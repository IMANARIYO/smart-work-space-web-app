import {  Clock, User, Folder, Flag } from "lucide-react"; 
import { useTasks } from "../hooks/use-tasks";
import { taskStatuses, type Itask } from "../types/task";

interface TaskItemProps {
  task: Itask;
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-800";
    case "Medium":
      return "bg-yellow-100 text-yellow-800";
    case "Low":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const TaskItem = ({ task }: TaskItemProps) => {
  const { dispatch } = useTasks();

  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white space-y-3">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          
                  <input
          type="checkbox"
          checked={task.status === "Completed"}
          onClick={() =>
            dispatch({
              type: "UPDATE_STATUS",
              payload: {
                id: task.id,
                status: task.status === "Completed" ? "InProgress" : "Completed",
              },
            })
          }
          readOnly
          className="h-5 w-5 text-blue-600 rounded"
        />
        <span
          className={`text-lg font-medium ${
            task.status === "Completed"
              ? "line-through text-gray-500"
              : "text-gray-900"
          }`}
        >
          {task.taskName}
        </span>
      </div>
<select
  value={task.status}
  onChange={(e) =>
    dispatch({
      type: "UPDATE_STATUS",
      payload: {
        id: task.id,
        status: e.target.value as Itask["status"],
      },
    })
  }
  className="text-sm px-2 py-1 rounded border border-gray-300 bg-white focus:outline-none focus:ring focus:border-blue-300"
>
  {taskStatuses.map((status) => (
    <option key={status} value={status}>
      {status}
    </option>
  ))}
</select>

      
        </div>


      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className={`flex items-center gap-1 px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
          <Flag className="h-3 w-3" />
          {task.priority}
        </span>
        <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-blue-100 text-blue-800">
          <Folder className="h-4 w-4" />
          {task.category}
        </span>
        {task.assignedUser && (
          <span className="flex   items-center gap-1 px-2 py-1 rounded-full bg-purple-100 text-purple-800">
            <User className="h-4 w-4" />
            {task.assignedUser}
          </span>
        )}
        {task.dueDate && (
          <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">
            <Clock className="h-3 w-3" />
            {new Date(task.dueDate).toLocaleDateString()}
          </span>
        )}
      </div>
    </div>
  );
};
