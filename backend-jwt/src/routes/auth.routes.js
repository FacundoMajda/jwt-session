import { Router } from "express";
import {
  getSession,
  login,
  logout,
  register,
} from "../controllers/auth.controller.js";
import isJwtValid from "../middlewares/validar-jwt.js";

const router = Router();

router.post("/login", login);
router.post("/register", register);

router.get("/session", isJwtValid, getSession);
router.post("/logout", logout);

export default router;
