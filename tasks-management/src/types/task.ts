export type TaskPriority = "Low" | "Medium" | "High";
export type TaskCategory = "FrontEnd" | "BackEnd" | "QA";


export const taskPriorities: TaskPriority[] = ["Low", "Medium", "High"];
export const taskCategories: TaskCategory[] = ["FrontEnd", "BackEnd", "QA"];
export const taskStatuses: TaskStatus[] = [
  "NotTaken",
  "Taken",
  "InProgress",
  "Completed",
  "InCompleted"
];
export type TaskStatus =
  | "NotTaken"
  | "Taken"
  | "InProgress"
  | "Completed"
  | "InCompleted";

export interface Itask {
  id: number;
  taskName: string;
  priority: TaskPriority;
  category: TaskCategory;
  dueDate?: Date;
  assignedUser?: string;
  assignedOn?: Date;
  status: TaskStatus;
}
