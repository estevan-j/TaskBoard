import { useTaskStore } from "../../../store/useTaskStore";
import { TaskProp } from "../../MenuTask/MenuTask";

interface TaskProps {
    task?: TaskProp;
    color: Array<string>;
}

const Task = ({ task, color }: TaskProps) => {
    const formActive = useTaskStore((state) => state.formActive);
    const setFormActive = useTaskStore((state) => state.setFormActive);

    const { setTask } = useTaskStore();
    const handleChange = () => {
        setFormActive(!formActive);
        setTask(task || {});
    }

    return (
        <div className={`w-full flex items-center gap-3 ${color[1]} p-3 rounded-xl cursor-pointer`}
            onClick={handleChange}
        >
            <div className="bg-white rounded p-[7px]">
                {task?.icon}
            </div>
            <h2 className="flex-grow font-bold text-[18px]">
                {task?.name}
            </h2>
            <div className={`${color[0]} rounded p-[7px]`}>
                <img src={`/${task?.image}.svg`} />
            </div>
        </div>
    )
}

export default Task
