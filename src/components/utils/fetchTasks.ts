import { TaskProp } from "../MenuTask/MenuTask";

// src/services/taskService.ts
export const fetchTasks = async (path = "tasks") => {
  try {
    const response = await fetch(`http://localhost:3000/api/${path}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

// src/services/taskService.ts
export const createTask = async (task: TaskProp) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, ...newTask } = task;
    const response = await fetch("http://localhost:3000/api/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error submitting task:");
    throw error;
  }
};

// add a delete method based on id
export const deleteTask = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/task/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    // Verificar si la respuesta tiene contenido antes de intentar analizarla como JSON
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      return {}; // O cualquier valor predeterminado que desees
    }
  } catch (error) {
    console.error("Error deleting task:");
    throw error;
  }
};

//add an update method based on id
export const updateTask = async (id: string, task: TaskProp) => {
  try {
    const response = await fetch(`http://localhost:3000/api/task/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error updating task:");
    throw error;
  }
};
