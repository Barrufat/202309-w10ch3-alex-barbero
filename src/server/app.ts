import chalk from "chalk";
import express from "express";
import helmet from "helmet";

const app = express();
app.use(helmet());

export const startServer = (port: number) => {
  app.listen(+port, () => {
    console.log(chalk.green(`Listening on http://localhost:${port}`));
  });
};

export default app;
