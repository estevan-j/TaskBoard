import express from "express";
import {
  handleGetTask,
  handleGetTasks,
  handlePostTask,
  handleDeleteTask,
  handlePutTask,
} from "../controllers/TaskController.js";

const router = express.Router();

// Define routes with error handling
router.get("/tasks", async (req, res, next) => {
  try {
    await handleGetTasks(req, res);
  } catch (error) {
    next(error);
  }
});

router.get("/task/:id", async (req, res, next) => {
  try {
    await handleGetTask(req, res);
  } catch (error) {
    next(error);
  }
});

router.post("/task", async (req, res, next) => {
  try {
    await handlePostTask(req, res);
  } catch (error) {
    next(error);
  }
});

router.delete("/task/:id", async (req, res, next) => {
  try {
    await handleDeleteTask(req, res);
  } catch (error) {
    next(error);
  }
});

router.put("/task/:id", async (req, res, next) => {
  try {
    await handlePutTask(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
