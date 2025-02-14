import * as React from "react";
import TableCell from "./TableCell";

const tables = [
  { id: "T-01", status: "available", floor: 1, chair: 2 },
  { id: "T-02", status: "reserved", floor: 1, chair: 3 },
  { id: "T-03", status: "occupied", floor: 1, chair: 4 },
  { id: "T-04", status: "waiting", floor: 2, chair: 12 },
  { id: "T-05", status: "settlement", floor: 2, chair: 5 },
  { id: "T-06", status: "available", floor: 3, chair: 6 },
  { id: "T-07", status: "occupied", floor: 3, chair: 7 },
  { id: "T-08", status: "reserved", floor: 1, chair: 8 },
  { id: "T-09", status: "available", floor: 2, chair: 9 },
  { id: "T-10", status: "settlement", floor: 3, chair: 10 },
  { id: "T-11", status: "available", floor: 1, chair: 2 },
  { id: "T-12", status: "reserved", floor: 1, chair: 3 },
  { id: "T-13", status: "occupied", floor: 1, chair: 4 },
  { id: "T-14", status: "waiting", floor: 2, chair: 12 },
  { id: "T-15", status: "settlement", floor: 2, chair: 5 },
  { id: "T-16", status: "available", floor: 3, chair: 6 },
  { id: "T-17", status: "occupied", floor: 3, chair: 7 },
  { id: "T-18", status: "reserved", floor: 1, chair: 8 },
  { id: "T-19", status: "available", floor: 2, chair: 9 },
  { id: "T-20", status: "settlement", floor: 3, chair: 10 },
  { id: "T-21", status: "available", floor: 1, chair: 2 },
  { id: "T-22", status: "reserved", floor: 1, chair: 3 },
  { id: "T-23", status: "occupied", floor: 1, chair: 4 },
  { id: "T-24", status: "waiting", floor: 2, chair: 12 },
  { id: "T-25", status: "settlement", floor: 2, chair: 5 },
  { id: "T-26", status: "available", floor: 3, chair: 6 },
  { id: "T-27", status: "occupied", floor: 3, chair: 7 },
  { id: "T-28", status: "reserved", floor: 1, chair: 8 },
  { id: "T-29", status: "available", floor: 2, chair: 9 },
  { id: "T-30", status: "settlement", floor: 3, chair: 10 },
];

export default function TableGrid({ floor, filter }) {
  const filteredTables = tables.filter((table) => {
    const floorMatch = table.floor === floor;
    const statusMatch = filter === "all" || table.status === filter;
    return floorMatch && statusMatch;
  });

  return (
    <section
      className="flex flex-wrap
       text-black grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 mt-8 w-full max-w-7xl"
      role="grid"
      aria-label="Restaurant tables grid"
    >
      {filteredTables.map((table) => (
        <TableCell key={table.id} tableId={table.id} status={table.status} chair={table.chair - 2} />
      ))}
    </section>
  );
}
