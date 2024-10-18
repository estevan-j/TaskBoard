import React, { useEffect, useState } from "react";
import TaskList from "../TaskList/TaskList";
import Logo from "../icons/Logo";
import Edit from "../icons/Edit";
import FormTask from "../FormTask/FormTask";
import { fetchTasks } from "../utils/fetchTasks";
import { useTaskStore } from "../../store/useTaskStore";

export interface TaskProp {
  _id: string;
  name: string;
  description: string;
  icon: string;
  status: string;
  image: string;
}


const MenuTask: React.FC = () => {
  const { formActive } = useTaskStore();
  const [tasks, setTasks] = useState<TaskProp[]>([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    getTasks();
  }, [formActive]);

  return (
    <section className="w-full min-h-screen bg-white01 p-4 flex flex-col items-center gap-y-5 relative">
      <div>
        <div className="flex gap-2 items-center bg-green">
          <Logo />
          <h1 className="text-[2.5rem] font-medium"> My Task Board </h1>
          <Edit />
        </div>
        <p className="text-4 font-bold text-start pl-[50px]">Tasks to keep organised</p>
      </div>
      <TaskList tasks={tasks} />
      {formActive && (
        <>
          <div id="overlay" className="fixed inset-0 bg-lightGray bg-opacity-70"></div>
          <div className="fixed right-0 top-0 h-full p-4 z-50">
            <FormTask />
          </div>
        </>
      )}
    </section>
  );
};

export default MenuTask;