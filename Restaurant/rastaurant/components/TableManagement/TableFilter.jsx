import * as React from "react";

const filters = [
  { value: "all", label: "All tables" },
  { value: "available", label: "Available only" },
  { value: "occupied", label: "Occupied only" },
];

export default function TableFilter({ selected, onFilterChange }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef = React.useRef(null);

  return (
    <div className="relative text-black">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex gap-4 justify-between items-center px-4 py-3 w-40 bg-white dark:bg-black dark:text-white rounded-md border border-zinc-200 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-base">
          {filters.find((f) => f.value === selected)?.label}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-40 bg-white dark:bg-black dark:text-white rounded-md shadow-lg border border-zinc-200 z-10"
          role="listbox"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`w-full text-left px-4 py-2 text-base hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-50
                ${selected === filter.value ? "bg-gray-100 dark:bg-gray-700" : ""}`}
              onClick={() => {
                onFilterChange(filter.value);
                setIsOpen(false);
              }}
              role="option"
              aria-selected={selected === filter.value}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
