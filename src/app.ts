import chalk from "chalk";
import express from "express";

const port = process.env.PORT ?? 4000;

const app = express();

app.listen(port, () => {
  console.log(chalk.green(`Listening on http://localhost:${port}`));
});

export default app;
