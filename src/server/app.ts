import chalk from "chalk";
import express from "express";

const app = express();

export const startServer = (port: number) => {
  app.listen(+port, () => {
    console.log(chalk.green(`Listening on http://localhost:${port}`));
  });
};

export default app;
