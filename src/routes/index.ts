import express from "express";
import CheckerController from "../controllers/checker";

const router = express.Router();

router.get("/checker/:word", async (_req, res) => {
  const controller = new CheckerController();
  const response = await controller.getResponse(_req.params.word);
  return res.send(response);
});

export default router;
