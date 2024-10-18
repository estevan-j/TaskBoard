
import { useTaskStore } from "../../store/useTaskStore";
import { TaskProp } from "../MenuTask/MenuTask";
import Task from "../ui/Task/Task";
import AddIcon from '/public/Add_round_duotone.svg';

interface TaskListProps {
    tasks: TaskProp[];
}
const colorItem = {
    'Progress': ['bg-yellow01', 'bg-yellow02'],
    'Done': ['bg-green01', 'bg-green02'],
    'Stop': ['bg-red01', 'bg-red02'],
}

const TaskList = ({ tasks }: TaskListProps) => {
    const formActive = useTaskStore((state) => state.formActive);
    const setFormActive = useTaskStore((state) => state.setFormActive);

    return (
        <div className="w-[560px] min-h-[400px] p-4 flex flex-col items-center gap-2">
            {
                tasks.map(task => (
                    <Task key={task._id} task={task} color={colorItem[task.image as keyof typeof colorItem]} />
                ))
            }
            <div className="w-full flex items-center gap-3 bg-lightBrown p-3 rounded-xl">
                <button className="bg-yellow01 rounded p-[7px]" onClick={() => setFormActive(!formActive)}>
                    <img src={AddIcon} alt="add" />
                </button>
                <h2 className="flex-grow font-medium">
                    Add new task
                </h2>
            </div>
        </div>
    );
};

export default TaskList;