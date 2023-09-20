import express from "express";
import teaController from "../controllers/tea.js";
import bodyParser from "body-parser";

const router = express.Router();

router.use(bodyParser.json());

router.use((req, res, next) => {
  console.log("middle ware called =======>", req.body);
  req.body = {
    message: "BYE",
  };
  next();
});

router.get(
  "/",
  (req, res, next) => {
    console.log("middle ware called 2", req.body);
    next();
  },
  teaController.getAllTea
);
router.post("/", teaController.newTea);
router.delete("/", teaController.deleteAllTea);

export default router;
