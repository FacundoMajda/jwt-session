import { Router } from "express";
import {
  getSession,
  login,
  logout,
  register,
} from "../controllers/auth.controller.js";
import isAuth from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/login", login);

router.get("/session", isAuth, getSession);

router.post("/logout", isAuth, logout);

router.post("/register", register);

export default router;
