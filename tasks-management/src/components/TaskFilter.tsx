import { Filter } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const TaskFiltersPopover = ({
  filters,
  onChange,
  onClear
}: {
  filters: {
    statusFilter: string;
    priorityFilter: string;
    categoryFilter: string;
    assignedUserFilter: string;
    dueDateFrom: string;
    dueDateTo: string;
  };
  onChange: (field: string, value: string) => void;
  onClear: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);


  useEffect(
    () => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setOpen(false);
        }
      };
      if (open) document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    },
    [open]
  );

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-info text-info-foreground rounded hover:bg-info-hover focus:outline-none focus:ring focus:ring-blue-400"
        aria-haspopup="true"
        aria-expanded={open}>
        <Filter/>
      </button>

      {open &&
        <div
          className="absolute right-0 mt-2 w-96 bg-[var(--color-card)] rounded shadow-lg ring-1 ring-black ring-opacity-5 p-4 z-50"
          role="dialog"
          aria-modal="true">
          <form
            onSubmit={e => e.preventDefault()}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="statusFilter"
                className="block mb-1 text-sm font-semibold text-[var(--color-muted-foreground)]">
                Status
              </label>
              <select
                id="statusFilter"
                value={filters.statusFilter}
                onChange={e => onChange("statusFilter", e.target.value)}
                className="w-full rounded border border-[var(--color-border)] px-3 py-2 text-[var(--color-foreground)] bg-[var(--color-input)] focus:outline-none focus:ring focus:ring-[var(--color-primary)] transition">
                <option value="All">All</option>
                <option value="NotTaken">NotTaken</option>
                <option value="InProgress">InProgress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="priorityFilter"
                className="block mb-1 text-sm font-semibold text-[var(--color-muted-foreground)]">
                Priority
              </label>
              <select
                id="priorityFilter"
                value={filters.priorityFilter}
                onChange={e => onChange("priorityFilter", e.target.value)}
                className="w-full rounded border border-[var(--color-border)] px-3 py-2 text-[var(--color-foreground)] bg-[var(--color-input)] focus:outline-none focus:ring focus:ring-[var(--color-primary)] transition">
                <option value="All">All</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

          
            <div>
              <label
                htmlFor="categoryFilter"
                className="block mb-1 text-sm font-semibold text-[var(--color-muted-foreground)]">
                Category
              </label>
              <select
                id="categoryFilter"
                value={filters.categoryFilter}
                onChange={e => onChange("categoryFilter", e.target.value)}
                className="w-full rounded border border-[var(--color-border)] px-3 py-2 text-[var(--color-foreground)] bg-[var(--color-input)] focus:outline-none focus:ring focus:ring-[var(--color-primary)] transition">
                <option value="All">All</option>
                <option value="FrontEnd">FrontEnd</option>
                <option value="BackEnd">BackEnd</option>
                <option value="QA">QA</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="assignedUserFilter"
                className="block mb-1 text-sm font-semibold text-[var(--color-muted-foreground)]">
                Assigned To
              </label>
              <input
                type="text"
                id="assignedUserFilter"
                placeholder="Search user"
                value={filters.assignedUserFilter}
                onChange={e => onChange("assignedUserFilter", e.target.value)}
                className="w-full rounded border border-[var(--color-border)] px-3 py-2 text-[var(--color-foreground)] bg-[var(--color-input)] focus:outline-none focus:ring focus:ring-[var(--color-primary)] transition"
              />
            </div>

      
            <div>
              <label
                htmlFor="dueDateFrom"
                className="block mb-1 text-sm font-semibold text-[var(--color-muted-foreground)]">
                Due From
              </label>
              <input
                type="date"
                id="dueDateFrom"
                value={filters.dueDateFrom}
                onChange={e => onChange("dueDateFrom", e.target.value)}
                className="w-full rounded border border-[var(--color-border)] px-3 py-2 text-[var(--color-foreground)] bg-[var(--color-input)] focus:outline-none focus:ring focus:ring-[var(--color-primary)] transition"
              />
            </div>

            <div>
              <label
                htmlFor="dueDateTo"
                className="block mb-1 text-sm font-semibold text-[var(--color-muted-foreground)]">
                Due To
              </label>
              <input
                type="date"
                id="dueDateTo"
                value={filters.dueDateTo}
                onChange={e => onChange("dueDateTo", e.target.value)}
                className="w-full rounded border border-[var(--color-border)] px-3 py-2 text-[var(--color-foreground)] bg-[var(--color-input)] focus:outline-none focus:ring focus:ring-[var(--color-primary)] transition"
              />
            </div>

   
            <div className="col-span-full flex justify-end">
              <button
                type="button"
                onClick={onClear}
                className="px-6 py-2 rounded border border-[var(--color-destructive)] text-[var(--color-destructive)] hover:bg-[var(--color-destructive-muted)] hover:text-[var(--color-destructive-foreground)] focus:outline-none focus:ring focus:ring-[var(--color-destructive)] transition">
                Clear Filters
              </button>
            </div>
          </form>
        </div>}
    </div>
  );
};
