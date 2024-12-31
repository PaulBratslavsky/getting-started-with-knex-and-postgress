import { onDatabaseConnect } from "./config/knex";

onDatabaseConnect()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
