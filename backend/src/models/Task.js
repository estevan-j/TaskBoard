import { mongoose } from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    // enum: ["Pending", "In Progress", "Completed"],
    default: "Pending",
  },
  icon: {
    type: String,
  },
  image: {
    type: String,
  },
});

export const Task = mongoose.model("Task", TaskSchema);
