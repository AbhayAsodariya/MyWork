import * as React from "react";

const statusStyles = {
  available: "bg-zinc-100 border-zinc-300 hover:bg-zinc-200",
  reserved: "bg-red-100 border-red-500 hover:bg-red-200",
  occupied: "bg-emerald-50 border-emerald-500 hover:bg-emerald-100",
  waiting: "bg-violet-200 border-blue-600 hover:bg-violet-300",
  settlement: "bg-yellow-50 border-yellow-400 hover:bg-yellow-100",
};

const statusLabels = {
  available: "Available",
  reserved: "Reserved",
  occupied: "Occupied",
  waiting: "Waiting for service",
  settlement: "In bill settlement",
};

export default function TableCell({ tableId, status }) {
  return (
    <div className="flex text-black flex-col items-center" role="gridcell">
      <div
        className="flex rounded border-2 border-zinc-300 min-h-[12px] w-[29px]"
        aria-hidden="true"
      />
      <div className="flex gap-2.5 items-center mt-2.5">
        <div
          className="flex-shrink-0 w-3 rounded border-2 border-zinc-300 h-[29px]"
          aria-hidden="true"
        />
        <button
          className={`flex items-center justify-center p-5 rounded-lg border transition-colors
            ${statusStyles[status]} h-[100px] w-[100px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
          aria-label={`${tableId} - ${statusLabels[status]}`}
        >
          <div className="relative w-[60px] h-[60px]">
            <div className="absolute inset-0 bg-white rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center font-semibold text-base">
              {tableId}
            </div>
          </div>
        </button>
        <div
          className="flex-shrink-0 w-3 rounded border-2 border-zinc-300 h-[29px]"
          aria-hidden="true"
        />
      </div>
      <div
        className="flex rounded border-2 border-zinc-300 min-h-[12px] w-[29px]"
        aria-hidden="true"
      />
    </div>
  );
}
