
import { useReducer, type ReactNode } from "react";
import { TaskContext } from "../context/TaskContext";

import { taskReducer } from "../context/taskReducer";
import { initialTasks } from "../data/tasksData";
export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
