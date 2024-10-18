import React, { useState } from "react";
import Table from "../TableManagement/Table";
import TableLegend from "./TableLegend";

function TableGrid({ tables, onTableStatusChange }) {
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredTables =
    filterStatus === "All"
      ? tables
      : tables.filter((table) => table.status === filterStatus.toLowerCase());

  return (
    <section className="flex flex-col mt-6 w-full max-md:max-w-full">
      <TableLegend onFilterChange={setFilterStatus} />
      <div className="flex flex-wrap gap-10 justify-between items-center mx-6 mt-9 w-full max-w-[1109px] max-md:mr-2.5 max-md:max-w-full">
        {filteredTables.map((table) => (
          <Table
            key={table.id}
            {...table}
            onStatusChange={(newStatus) =>
              onTableStatusChange(table.id, newStatus)
            }
          />
        ))}
      </div>
    </section>
  );
}

export default TableGrid;
