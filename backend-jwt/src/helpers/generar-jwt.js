import jwt from "jsonwebtoken";
import { environment } from "../config/env.js";

const genJwt = async (userId) => {
  const payload = { userId };
  const secret = environment.jwt.secret;

  try {
    const token = jwt.sign(payload, secret, {
      expiresIn: "5h",
    });
    return token;
  } catch (error) {
    throw new Error("No se pudo generar el token");
  }
};
export default genJwt;
