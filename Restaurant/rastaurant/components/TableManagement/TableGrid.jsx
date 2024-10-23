import * as React from "react";
import TableCell from "./TableCell";

const tables = [
  { id: "T-01", status: "available", floor: 1 },
  { id: "T-02", status: "reserved", floor: 1 },
  { id: "T-03", status: "occupied", floor: 1 },
  { id: "T-04", status: "waiting", floor: 2 },
  { id: "T-05", status: "settlement", floor: 2 },
  { id: "T-06", status: "available", floor: 3 },
  { id: "T-07", status: "occupied", floor: 3 },
  { id: "T-08", status: "reserved", floor: 1 },
  { id: "T-09", status: "available", floor: 2 },
  { id: "T-10", status: "settlement", floor: 3 },
];

export default function TableGrid({ floor, filter }) {
  const filteredTables = tables.filter((table) => {
    const floorMatch = table.floor === floor;
    const statusMatch = filter === "all" || table.status === filter;
    return floorMatch && statusMatch;
  });

  return (
    <section
      className="grid text-black grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 mt-8 w-full max-w-7xl"
      role="grid"
      aria-label="Restaurant tables grid"
    >
      {filteredTables.map((table) => (
        <TableCell key={table.id} tableId={table.id} status={table.status} />
      ))}
    </section>
  );
}
