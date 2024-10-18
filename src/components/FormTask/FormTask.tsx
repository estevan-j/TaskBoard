import { ChangeEvent } from "react";
import IconTask from "../ui/IconTask/IconTask"
import Input from "../ui/Input/Input"
import LabelTask from "../ui/LabelTask/LabelTask"
import Status from "../ui/Status/Status";
import ButtonTask from "../ui/ButtonTask/ButtonTask";
import Trash from "../icons/Trash";
import DoneBtn from "../icons/DoneBtn";
import Stop2 from "../icons/Stop2";
import { createTask, deleteTask, updateTask } from "../utils/fetchTasks";
import { statuses } from "../utils/statusData";
import { useTaskStore } from "../../store/useTaskStore";


const FormTask = () => {
    const { task, setTask } = useTaskStore();
    const formActive = useTaskStore((state) => state.formActive);
    const setFormActive = useTaskStore((state) => state.setFormActive);


    const handleOptionClick = (option: string): void => {
        setTask({ icon: option });
    };

    const handleStatusClick = (status: string, image: string): void => {
        setTask({ status });
        setTask({ image });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        e.preventDefault();
        const { name, value } = e.target;
        setTask({ [name]: value });
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (task) {
                console.log(task);
                if (!task._id) {
                    await createTask(task);
                } else {
                    await updateTask(task._id, task);
                }
                setTask({ _id: '', name: '', description: '', icon: '', status: '', image: '' });
                setFormActive(!formActive);
            } else {
                throw ('Task is undefined');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async () => {
        try {
            if (task) {
                console.log('Deleting task:', task);
                await deleteTask(task._id);
                setFormActive(!formActive)
                setTask({ _id: '', name: '', description: '', icon: '', status: '', image: '' });
            } else {
                console.error('Task is undefined');
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <form className="w-full min-h-[550px] flex flex-col bg-white01 p-4 gap-2 rounded-xl" onSubmit={handleSubmit}>
            <div className="flex items-center justify-between">
                <h3 className="pb-3 font-bold">Task details</h3>
                <button type="button" className="border-lightSilver border-[1px] rounded-xl p-2"
                    onClick={() => setFormActive(!formActive)}
                >
                    <Stop2 />
                </button>
            </div>
            <div className="flex flex-col gap-1">
                <LabelTask htmlFor="name">Task name</LabelTask>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    value={task?.name}
                    placeholder="Enter the task name ..."
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-1">
                <LabelTask htmlFor="description">Description</LabelTask>
                <textarea
                    className="h-[120px] border-light-silver border-2 rounded-xl pr-4 pl-4 pt-2 pb-2 focus:border-blue01-500"
                    id="description"
                    name="description"
                    placeholder="Enter a short description"
                    value={task?.description}
                    onChange={handleChange}
                />
            </div>
            <div>
                <LabelTask>Icon</LabelTask>
                <div className="flex gap-2 flex-wrap gap-2 pt-1">
                    {['💻', '💭', '☕', '🏋️‍♂️', '📚', '⏰'].map(option => (
                        <IconTask
                            key={option}
                            isSelected={task?.icon === option}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </IconTask>
                    ))}
                </div>
            </div>
            <div>
                <LabelTask>Status</LabelTask>
                <div className="flex flex-wrap gap-2 pb-7">
                    {statuses.map(status => (
                        <Status
                            key={status.type}
                            type={status.type}
                            isSelected={task?.status === status.label}
                            color={status.color}
                            onClick={() => handleStatusClick(status.label, status.type)}
                        >
                            {status.label}
                        </Status>
                    ))}
                </div>
            </div>
            <div className="flex gap-2 justify-end">
                <ButtonTask type={"button"} style={{ backgroundColor: '#97A3B6' }}
                    onClick={handleDelete}
                >
                    <Trash />
                    Delete
                </ButtonTask>
                <ButtonTask type={"submit"} style={{ backgroundColor: '#3662E3' }} >
                    <DoneBtn />
                    Save
                </ButtonTask>
            </div>
        </form>
    );
};

export default FormTask;