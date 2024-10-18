// src/store/useTaskStore.ts
import { create } from "zustand";
import { TaskProp } from "../components/MenuTask/MenuTask";

interface TaskState {
  task: TaskProp;
  setTask: (task: Partial<TaskProp>) => void;
  formActive: boolean;
  setFormActive: (active: boolean) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  task: {
    _id: "",
    name: "",
    description: "",
    icon: "",
    status: "",
    image: "Progress",
  },
  setTask: (task) => set((state) => ({ task: { ...state.task, ...task } })),
  formActive: false,
  setFormActive: (active) => set({ formActive: active }),
}));
