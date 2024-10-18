import { Task } from "../models/Task.js";

// Obtener todas las tareas
export const getAllTasks = async () => {
  return await Task.find();
};

// Obtener una tarea por ID
export const getTaskById = async (id) => {
  return await Task.findById(id);
};

// Crear una nueva tarea
export const createTask = async (taskData) => {
  const task = new Task(taskData);
  return await task.save();
};

// Actualizar una tarea por ID
export const updateTaskById = async (id, taskData) => {
  return await Task.findByIdAndUpdate(id, taskData, { new: true });
};

// Eliminar una tarea por ID
export const deleteTaskById = async (id) => {
  return await Task.findByIdAndDelete(id);
};
