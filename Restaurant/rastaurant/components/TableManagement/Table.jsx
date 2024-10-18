import React, { useState } from "react";

function Table({ id, status, onStatusChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getStatusClass = (status) => {
    const statusClasses = {
      reserved: "bg-red-100 border-red-500",
      occupied: "bg-emerald-50 border-emerald-500",
      waiting: "bg-violet-200 border-blue-600",
      "bill-settlement": "bg-yellow-50 border-yellow-400",
      available: "bg-zinc-100 border-zinc-300",
    };
    return statusClasses[status] || statusClasses.available;
  };

  const handleStatusChange = (newStatus) => {
    onStatusChange(newStatus);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative flex flex-col items-center self-stretch my-auto text-base font-semibold leading-relaxed whitespace-nowrap text-zinc-500">
      <div
        className={`flex overflow-hidden gap-2.5 items-start self-stretch p-5 my-auto rounded-lg border border-solid ${getStatusClass(
          status
        )} h-[100px] shadow-[0px_2px_8px_rgba(0,0,0,0.08)] w-[100px] cursor-pointer`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="flex relative gap-2.5 items-start w-[60px]">
          <div className="flex z-0 shrink-0 bg-white rounded-full h-[60px] w-[60px]" />
          <div className="absolute top-2/4 left-2/4 z-0 -translate-x-2/4 -translate-y-2/4 h-[26px] w-[35px]">
            {id}
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg z-10">
          <button
            onClick={() => handleStatusChange("available")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Available
          </button>
          <button
            onClick={() => handleStatusChange("reserved")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Reserved
          </button>
          <button
            onClick={() => handleStatusChange("occupied")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Occupied
          </button>
          <button
            onClick={() => handleStatusChange("waiting")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Waiting
          </button>
          <button
            onClick={() => handleStatusChange("bill-settlement")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Bill Settlement
          </button>
        </div>
      )}
    </div>
  );
}

export default Table;
