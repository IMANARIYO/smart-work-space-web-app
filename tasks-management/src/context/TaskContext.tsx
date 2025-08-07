import { createContext, type Dispatch } from "react";
import type { Itask } from "../types/task";
import type { TaskAction } from "./taskReducer";


export type TaskContextType = {
  tasks: Itask[];
  dispatch: Dispatch<TaskAction>;
};


export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);
