import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { environment } from "../config/env.js";

const isJwtValid = async (req, res, next) => {
  const token = req.cookies.authToken || req.session.token;
  const secret = environment.jwt.secret;
  try {
    if (!token) {
      return res.status(403).json({
        status: "error",
        message: "Token no proporcionado",
      });
    }

    const decoded = jwt.verify(token, secret);
    const user = await User.findByPk(decoded.userId);

    if (!user) {
      return res.status(401).json({
        status: "error",
        message: "Token inválido",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error en el servidor",
      error: error.message,
    });
  }
};

export default isJwtValid;
