import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import session from "express-session";
import morgan from "morgan";
import router from "./src/routes/auth.routes.js";
import { environment } from "./src/config/env.js";

const app = express();
const PORT = environment.server.port;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: environment.jwt.secret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
