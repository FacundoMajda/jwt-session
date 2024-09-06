import { env } from "../config/env";
export const fetchApi = async (route, method = "GET", payload) => {
  const url = `${env.server.path}${route}`;

  const options =
    method === "GET"
      ? {}
      : {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Error - Status: ${response.status}`);
  }

  const data = response.status !== 204 ? await response.json() : null;

  return data;
};
