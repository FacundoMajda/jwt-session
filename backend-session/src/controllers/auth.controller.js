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
    req.session.userId = newUser.id;
    req.session.email = newUser.email;
    await newUser.save();

    return res.status(201).json({
      status: "success",
      message: "Usuario registrado exitosamente",
      user: { id: newUser.id, email: newUser.email },
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
      return res.status(401).json({
        status: "error",
        message: "Credenciales incorrectas",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        status: "error",
        message: "Credenciales incorrectas",
      });
    }

    req.session.userId = user.id;
    req.session.email = user.email;

    return res.json({
      status: "success",
      message: "Inicio de sesión exitoso",
      user: { id: user.id, email: user.email },
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error en el servidor",
      error: error.message,
    });
  }
};

export const getSession = async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({
        status: "error",
        loggedIn: false,
        message: "No hay sesión activa",
      });
    }

    return res.json({
      status: "success",
      loggedIn: true,
      user: { id: req.session.userId, username: req.session.username },
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error en el servidor",
      error: error.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(400).json({
        status: "error",
        message: "No hay sesión activa para cerrar",
      });
    }

    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({
          status: "error",
          message: "Error al cerrar la sesión",
        });
      }
      res.clearCookie("connect.sid");
      return res.json({
        status: "success",
        message: "Sesión cerrada exitosamente",
      });
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error en el servidor",
      error: error.message,
    });
  }
};
