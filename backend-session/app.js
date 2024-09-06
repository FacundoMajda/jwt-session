import cors from "cors";
import express from "express";
import session from "express-session";
import morgan from "morgan";
import path from "path";
import { environment } from "./src/config/env.js";
import { initDb } from "./src/config/db.js";
import router from "./src/routes/auth.routes.js";

const app = express();
const PORT = environment.server.port;
const HOST = environment.server.host;
const __dirname = path.resolve();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: environment.session.secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: true,
      sameSite: "lax",
    },
  })
);

app.use("/api", router);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, async () => {
  await initDb();
  console.log(`Server running on ${HOST}:${PORT}/`);
});
