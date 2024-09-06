import { Sequelize } from "sequelize";
import { environment } from "./env.js";

const sequelize = new Sequelize({
  host: environment.database.host,
  port: environment.database.port,
  username: environment.database.user,
  password: environment.database.pwd,
  database: environment.database.name,
  dialect: "mysql",
});

export async function initDb() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log("Database conectada.");
  } catch (error) {
    console.error("No se pudo conectar a database: ", error);
  }
}

export default sequelize;
