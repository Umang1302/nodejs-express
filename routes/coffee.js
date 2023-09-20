import express from "express";
import bodyParser from "body-parser";
import coffeeController from "../controllers/coffee.js";

const coffeeRouter = express.Router();

coffeeRouter.use(bodyParser.json());

coffeeRouter.get("/", coffeeController.getCoffee);

export default coffeeRouter;
