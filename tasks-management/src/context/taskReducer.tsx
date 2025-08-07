

import type { Itask, TaskStatus } from "../types/task";


export type TaskAction =
  | { type: "ADD_TASK"; payload: Itask }
  | { type: "EDIT_TASK"; payload: Itask }
  | { type: "DELETE_TASK"; payload: { id: number } }
| { type: "UPDATE_STATUS"; payload: { id: number; status: TaskStatus } }
  | { type: "SET_TASKS"; payload: Itask[] };

export function taskReducer(state: Itask[], action: TaskAction): Itask[] {
  switch (action.type) {
    case "ADD_TASK":
      return [action.payload, ...state];

    case "EDIT_TASK":
      return state.map(
        task => (task.id === action.payload.id ? action.payload : task)
      );

    case "DELETE_TASK":
      return state.filter(task => task.id !== action.payload.id);

case "UPDATE_STATUS":
  return state.map(
    task =>
      task.id === action.payload.id
        ? { ...task, status: action.payload.status }
        : task
  );

    case "SET_TASKS":
      return action.payload;

    default:
      return state;
  }
}
