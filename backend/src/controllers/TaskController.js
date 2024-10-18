import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById,
} from "../Services/Task.Service.js";
import mongoose from "mongoose";

export const handleGetTask = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("Invalid ID format");
    }
    const task = await getTaskById(id);
    if (!task) {
      return res.status(404).send("Task not found!");
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const handleGetTasks = async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const handlePostTask = async (req, res) => {
  try {
    const task = req.body;
    // add id to task
    const newTask = await createTask(task);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const handleDeleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteTaskById(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const handlePutTask = async (req, res) => {
  try {
    const { id } = req.params;

    // Verificamos si el id es un ObjectId válido
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send("Invalid Task ID");
    }

    const task = req.body;

    // Verificar si los datos de la tarea están presentes
    if (!task || Object.keys(task).length === 0) {
      return res.status(400).send("Data to update cannot be empty!");
    }

    // Convertir id a ObjectId
    const objectId = new mongoose.Types.ObjectId(id);

    // Intentar actualizar la tarea
    const updatedTask = await updateTaskById(objectId, task);

    if (!updatedTask) {
      return res.status(404).send("Task not found");
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).send(error.message);
  }
};
