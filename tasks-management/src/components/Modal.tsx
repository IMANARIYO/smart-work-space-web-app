import { useEffect, useRef, type ReactNode } from "react";
interface PopoverProps {
  children: ReactNode;
  onClose: () => void;
  className?: string;
  position?: string
}

export const Popover = ({
  children,
  onClose,
  className = "",
  position = "top-4 right-4"
}: PopoverProps) => {
  const popoverRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={popoverRef}
      className={`absolute z-50 rounded shadow-lg ring-1 ring-black ring-opacity-5 bg-[var(--color-card)] text-[var(--color-foreground)] ${position} ${className}`}
    >
      {children}
    </div>
  );
};
