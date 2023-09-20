// import all modules and packages
import express from "express";

import teaRoutes from "./routes/tea.js";
import coffeeRoutes from "./routes/coffee.js";
//use app
const app = express();

app.use((req, res, next) => {
  console.log("middle ware called FROM APP");
  next();
});
app.use("/tea", teaRoutes);
app.use("/coffee", coffeeRoutes);

app.listen(3000, () => {
  console.log("SERVER IS UP AND RUNNING");
});
