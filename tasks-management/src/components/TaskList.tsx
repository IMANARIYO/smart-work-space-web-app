import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { TaskItem } from "./TaskItem";
import { TaskForm } from "./TaskForm";
import type { Itask } from "../types/task";

import { TaskFiltersPopover } from "./TaskFilter";
import { Popover } from "./Modal";
export const TaskList = () => {
  const { tasks, dispatch } = useContext(TaskContext)!;
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState<Itask | undefined>(undefined);
  const [filters, setFilters] = useState({
    statusFilter: "All",
    priorityFilter: "All",
    categoryFilter: "All",
    assignedUserFilter: "",
    dueDateFrom: "",
    dueDateTo: "",
  });

  const handleChangeFilter = (field: string, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };
  const handleClearFilters = () => {
    setFilters({
      statusFilter: "All",
      priorityFilter: "All",
      categoryFilter: "All",
      assignedUserFilter: "",
      dueDateFrom: "",
      dueDateTo: "",
    });
  };
  const filteredTasks = tasks
    .filter((task) =>
      filters.statusFilter === "All"
        ? true
        : task.status === filters.statusFilter
    )
    .filter((task) =>
      filters.priorityFilter === "All"
        ? true
        : task.priority === filters.priorityFilter
    )
    .filter((task) =>
      filters.categoryFilter === "All"
        ? true
        : task.category === filters.categoryFilter
    )
    .filter((task) =>
      filters.assignedUserFilter
        ? task.assignedUser
          ?.toLowerCase()
          .includes(filters.assignedUserFilter.toLowerCase())
        : true
    )
    .filter((task) => {
      if (!filters.dueDateFrom && !filters.dueDateTo) return true;
      const taskDate = task.dueDate ? new Date(task.dueDate) : null;
      if (!taskDate) return false;
      if (filters.dueDateFrom && taskDate < new Date(filters.dueDateFrom))
        return false;
      if (filters.dueDateTo && taskDate > new Date(filters.dueDateTo))
        return false;
      return true;
    });

  const handleCreateNew = () => {
    setEditingTask(undefined);
    setShowForm(true);
  };

  const handleEdit = (task: Itask) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingTask(undefined);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this task?")) {
      dispatch({ type: "DELETE_TASK", payload: { id } });
    }
  };

  const handleClearCompleted = () => {
    tasks
      .filter(task => task.status === "Completed")
      .forEach(task => dispatch({ type: "DELETE_TASK", payload: { id: task.id } }));
  };
  return (
    <section
      className=" relative bg-card p-6 rounded-lg shadow-md space-y-6 text-card-foreground w-screen"
      aria-label="Task List"
    >

      <header className=" relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">

        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-primary)]">
            Task List
          </h2>
          <p className="text-sm text-[var(--color-muted-foreground)] mt-1">
            {filteredTasks.length} {filteredTasks.length === 1 ? "task" : "tasks"}
          </p>
        </div>


        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <TaskFiltersPopover
            filters={filters}
            onChange={handleChangeFilter}
            onClear={handleClearFilters}
          />

          <button
            onClick={handleClearCompleted}
            className="px-4 py-2 rounded-md bg-[var(--color-destructive)] text-[var(--color-destructive-foreground)] hover:bg-[var(--color-destructive-hover)] focus:outline-none focus:ring-4 focus:ring-[var(--color-destructive)] focus:ring-opacity-50 shadow-sm transition"
            aria-label="Clear completed tasks"
            type="button"
          >
            Clear Completed
          </button>

          <div className="relative">
            <button
              onClick={handleCreateNew}
              className="px-4 py-2 rounded-md bg-info text-info-foreground hover:bg-info-hover focus:outline-none focus:ring-4 focus:ring-info focus:ring-opacity-50 shadow-sm transition"
              aria-label="Create new task"
              type="button"
            >
              + New Task
            </button>

            {showForm && (
              <Popover onClose={handleCloseForm} position="top-12 right-8">
                <TaskForm onClose={handleCloseForm} initialTask={editingTask} />
              </Popover>
            )}
          </div>
        </div>
      </header>
<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-live="polite">
  {filteredTasks.length > 0 ? (
    filteredTasks.map(task => (
      <li
        key={task.id}
        className="relative group rounded-md bg-[var(--color-muted)] p-4 shadow-sm hover:shadow-md transition"
      >
        <TaskItem task={task} />

        <div className="absolute bottom-2 right-2 hidden group-hover:flex gap-2 bg-[var(--color-info-muted)] rounded p-2 shadow-md">
          <button
            onClick={() => handleEdit(task)}
            className="text-[var(--color-primary)] text-xs font-semibold hover:underline focus:outline-none"
            aria-label={`Edit task ${task.taskName}`}
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(task.id)}
            className="text-[var(--color-destructive)] text-xs font-semibold hover:underline focus:outline-none"
            aria-label={`Delete task ${task.taskName}`}
          >
            Delete
          </button>
        </div>
      </li>
    ))
  ) : (
    <li className="col-span-full text-center py-12 text-[var(--color-muted-foreground)] flex flex-col items-center">
      <p className="mb-3 text-lg font-medium">No tasks found.</p>
      <button
        onClick={handleCreateNew}
        className="px-4 py-2 bg-info text-info-foreground hover:bg-info-hover rounded shadow-sm transition"
        aria-label="Create your first task"
      >
        + Create your first task
      </button>
    </li>
  )}
</ul>

    </section>
  );
};
