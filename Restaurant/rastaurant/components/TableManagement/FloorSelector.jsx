import React from "react";

function FloorSelector({ currentFloor, onFloorChange }) {
  const floors = ["1 Floor", "2 Floor", "Out side"];

  return (
    <footer className="flex overflow-hidden flex-col justify-center items-start px-7 py-6 mt-8 w-full text-2xl font-semibold bg-white rounded-none border-t border-gray-200 shadow-[0px_2px_2px_rgba(0,0,0,0.12)] text-neutral-400 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-10 items-center max-md:max-w-full">
        {floors.map((floor) => (
          <div
            key={floor}
            className="flex gap-3 justify-center items-center self-stretch my-auto cursor-pointer"
            onClick={() => onFloorChange(floor)}
          >
            <div
              className={`flex shrink-0 self-stretch my-auto rounded-full ${
                floor === currentFloor
                  ? "bg-zinc-500"
                  : "border-2 border-solid border-neutral-400"
              } h-[18px] w-[18px]`}
            />
            <div
              className={`self-stretch my-auto ${
                floor === currentFloor ? "text-slate-950" : ""
              }`}
            >
              {floor}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default FloorSelector;
