import React from "react";

function TableLegend() {
  const legendItems = [
    { color: "zinc-300", label: "Available table" },
    { color: "red-500", label: "Reserved table" },
    { color: "emerald-500", label: "Occupied table" },
    { color: "blue-600", label: "Waiting" },
    { color: "yellow-400", label: "Bill Settlement" },
  ];

  return (
    <div className="flex flex-wrap gap-10 justify-between items-center mx-6 w-full font-semibold max-w-[1109px] text-slate-950 max-md:mr-2.5 max-md:max-w-full">
      <h2 className="gap-10 self-stretch my-auto text-2xl">Select table</h2>
      <div className="flex flex-wrap gap-8 items-center self-stretch my-auto text-sm leading-relaxed text-black min-w-[240px] max-md:max-w-full">
        {legendItems.map((item, index) => (
          <div
            key={index}
            className="flex gap-2 items-center self-stretch my-auto"
          >
            <div
              className={`flex shrink-0 self-stretch my-auto w-3.5 h-3.5 rounded-full bg-${item.color}`}
            />
            <div className="self-stretch my-auto">{item.label}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-3 items-start self-stretch my-auto w-40 text-base">
        <div className="flex gap-10 justify-between items-center px-3.5 py-4 w-40 bg-white rounded-md border border-solid border-zinc-200 min-h-[52px] shadow-[0px_1px_2px_rgba(0,0,0,0.08)]">
          <div className="self-stretch my-auto">All table</div>
          <img
            loading="lazy"
            src="http://b.io/ext_14-"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
          />
        </div>
      </div>
    </div>
  );
}

export default TableLegend;
