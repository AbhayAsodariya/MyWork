import * as React from "react";

const floorOptions = [
  { id: 1, label: "1st Floor" },
  { id: 2, label: "2nd Floor" },
  { id: 3, label: "Outside" },
];

export default function TableFloorSelector({ selectedFloor, onFloorChange }) {
  return (
    <footer className="sticky bottom-0 w-full bg-white border-t border-gray-200 text-black shadow-sm mt-8">
      <div className="max-w-7xl mx-auto px-4 py-4 md:px-6 md:py-6">
        <div className="flex flex-wrap gap-6 md:gap-10 items-center justify-center md:justify-start">
          {floorOptions.map((floor) => (
            <button
              key={floor.id}
              onClick={() => onFloorChange(floor.id)}
              className="flex gap-3 items-center group focus:outline-none"
              aria-pressed={selectedFloor === floor.id}
            >
              <div
                className={`flex-shrink-0 w-[18px] h-[18px] rounded-full transition-colors
                  ${
                    selectedFloor === floor.id
                      ? "bg-zinc-500"
                      : "border-2 border-neutral-400 group-hover:border-zinc-500"
                  }`}
                aria-hidden="true"
              />
              <span
                className={`text-xl font-semibold transition-colors
                  ${
                    selectedFloor === floor.id
                      ? "text-slate-950"
                      : "text-neutral-400 group-hover:text-slate-950"
                  }`}
              >
                {floor.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
