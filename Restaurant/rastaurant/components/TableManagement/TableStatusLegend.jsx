import * as React from "react";

const statusItems = [
  {
    color: "bg-zinc-300",
    label: "Available table",
    ariaLabel: "Shows available tables",
  },
  {
    color: "bg-red-500",
    label: "Reserved table",
    ariaLabel: "Shows reserved tables",
  },
  {
    color: "bg-emerald-500",
    label: "Occupied table",
    ariaLabel: "Shows occupied tables",
  },
  {
    color: "bg-blue-600",
    label: "Waiting",
    ariaLabel: "Shows tables with waiting customers",
  },
  {
    color: "bg-yellow-400",
    label: "Bill Settlement",
    ariaLabel: "Shows tables in bill settlement",
  },
];

export default function TableStatusLegend() {
  return (
    <div className="flex flex-wrap gap-4 md:gap-8 items-center text-sm leading-relaxed text-black dark:text-white">
      {statusItems.map((item) => (
        <div
          key={item.label}
          className="flex gap-2 items-center"
          role="status"
          aria-label={item.ariaLabel}
        >
          <div
            className={`flex-shrink-0 w-3.5 h-3.5 rounded-full ${item.color}`}
            aria-hidden="true"
          />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
