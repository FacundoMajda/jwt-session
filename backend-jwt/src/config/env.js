import "dotenv/config";

export const environment = {
  jwt: { secret: process.env.KEY_SECRET },
  server: { host: process.env.SERVER_HOST, port: process.env.SERVER_PORT },
  database: {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pwd: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
};
