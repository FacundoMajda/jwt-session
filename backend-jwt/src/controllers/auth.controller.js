import genJwt from "../helpers/generar-jwt.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      status: "error",
      message: "Los campos son requeridos",
    });
  }

  try {
    const existingUser = await User.findOne({ where: { email: email } });

    if (existingUser) {
      return res.status(409).json({
        status: "error",
        message: "El email ya está registrado",
      });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    return res.status(201).json({
      status: "success",
      message: "Usuario registrado exitosamente",
      DATA: { id: newUser.id, email: newUser.email },
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error en el servidor",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: "error",
      message: "Email y contraseña son requeridos",
    });
  }

  try {
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      console.log("User no existe");
      return res.status(401).json({
        status: "error",
        message: "Credenciales incorrectas",
      });
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        status: "error",
        message: "Credenciales incorrectas",
      });
    }

    const token = await genJwt(user.id);

    req.session.token = token;

    res.cookie("authToken", token, {
      httpOnly: true,
      secure: false,
      maxAge: 3600000,
    });
    console.log("Cookie set: ", req.cookies.authToken);

    return res.json({
      status: "success",
      message: "Inicio de sesión exitoso",
    });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({
      status: "error",
      message: "Error en el servidor",
      error: error.message,
    });
  }
};

export const getSession = (req, res) => {
  console.log(req.user);
  return res.json({
    status: "success",
    message: "Acceso permitido",
    user: req.user,
  });
};

export const logout = (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({
          status: "error",
          message: "Error al cerrar sesión",
        });
      }

      res.clearCookie("authToken");
      return res.json({
        status: "success",
        message: "Cierre de sesión exitoso",
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Error Inesperado",
    });
  }
};
