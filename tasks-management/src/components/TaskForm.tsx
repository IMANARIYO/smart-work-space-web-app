import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import type { Itask, TaskCategory, TaskPriority } from "../types/task";
import { taskCategories, taskPriorities } from "../types/task";

type TaskFormProps = {
  initialTask?: Itask;
  onClose?: () => void;
};

export const TaskForm = ({ initialTask, onClose }: TaskFormProps) => {
  const isEdit = !!initialTask;

  const [task, setTask] = useState<Omit<Itask, "id" | "assignedOn">>(
    initialTask
      ? {
          taskName: initialTask.taskName,
          priority: initialTask.priority,
          category: initialTask.category,
          dueDate: initialTask.dueDate ?? new Date(),
          assignedUser: initialTask.assignedUser ?? "",
          status: initialTask.status,
        }
      : {
          taskName: "",
          priority: "Medium",
          category: "FrontEnd",
          dueDate: new Date(),
          assignedUser: "",
          status: "NotTaken",
        }
  );

  const { dispatch } = useContext(TaskContext)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const now = new Date();
    const updatedTask: Itask = {
      ...task,
      id: initialTask?.id ?? Date.now(),
      assignedOn: initialTask?.assignedOn ?? now,
    };

    dispatch({
      type: isEdit ? "EDIT_TASK" : "ADD_TASK",
      payload: updatedTask,
    });

    if (!isEdit) {
      setTask({
        taskName: "",
        priority: "Medium",
        category: "FrontEnd",
        dueDate: new Date(),
        assignedUser: "",
        status: "NotTaken",
      });
    }

    onClose?.();
  };

  return (
    <div className="bg-card p-4 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">
        {isEdit ? "Edit Task" : "Add New Task"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Task Name</label>
          <input
            type="text"
            value={task.taskName}
            onChange={e => setTask({ ...task, taskName: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Priority</label>
          <select
            value={task.priority}
            onChange={e =>
              setTask({ ...task, priority: e.target.value as TaskPriority })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {taskPriorities.map(p => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Category</label>
          <select
            value={task.category}
            onChange={e =>
              setTask({ ...task, category: e.target.value as TaskCategory })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {taskCategories.map(c => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Due Date</label>
          <input
            type="date"
            value={task.dueDate?.toISOString().split("T")[0]}
            onChange={e =>
              setTask({ ...task, dueDate: new Date(e.target.value) })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Assigned To</label>
          <input
            type="text"
            value={task.assignedUser}
            onChange={e =>
              setTask({ ...task, assignedUser: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-gray-800  rounded"
          >
            {isEdit ? "Update Task" : "Add Task"}
          </button>
        </div>
      </form>
    </div>
  );
};
