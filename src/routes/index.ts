import express from "express";
import CheckerController from "../controllers/checker";

const router = express.Router();

router.post("/check", async (req, res) => {
  try {
    const controller = new CheckerController();
    const response = await controller.check(req.body);
    return res.send(response);
  } catch (error) {
    console.error((<Error>error).stack);
    res.status(400).send((<Error>error).message);
  }
});

export default router;
