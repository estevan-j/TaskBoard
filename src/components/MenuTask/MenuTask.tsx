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
  const [tasks, setTasks] = useState<TaskProp[]>([
    {
      _id: '6711fc1054687db12a479082',
      name: 'Task in Progress',
      description: 'completing',
      status: 'In Progress',
      image: 'Progress',
      icon: '⏰',
    },
    {
      _id: '6711fc2054687db12a479086',
      name: 'Task Completed',
      description: 'I finished my task',
      status: 'Completed',
      image: 'Done',
      icon: '🏋️‍♂️',
    },
    {
      _id: '6711fc3954687db12a47908a',
      name: "Task Won't Do",
      description: "I don't want to do it",
      status: "Won't do",
      image: 'Stop',
      icon: '📚',
    },
  ]);

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