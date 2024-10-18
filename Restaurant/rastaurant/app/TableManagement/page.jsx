"use client";
import { useState, useEffect } from "react";
import Layout from "@/components/common/Layout";
import TableGrid from "@/components/TableManagement/TableGrid";
import FloorSelector from "@/components/TableManagement/FloorSelector";
import { fetchTables } from "@/lib/api";
import withAuth from "@/components/common/withAuth";

function TableManagement() {
  const [tables, setTables] = useState([]);
  const [currentFloor, setCurrentFloor] = useState("1 Floor");

  useEffect(() => {
    const loadTables = async () => {
      const fetchedTables = await fetchTables(currentFloor);
      setTables(fetchedTables);
    };
    loadTables();
  }, [currentFloor]);

  const handleFloorChange = (floor) => {
    setCurrentFloor(floor);
  };

  const handleTableStatusChange = (tableId, newStatus) => {
    setTables(
      tables.map((table) =>
        table.id === tableId ? { ...table, status: newStatus } : table
      )
    );
    // Here you would also make an API call to update the table status on the server
  };

  return (
    <Layout>
      <TableGrid
        tables={tables}
        onTableStatusChange={handleTableStatusChange}
      />
      <FloorSelector
        currentFloor={currentFloor}
        onFloorChange={handleFloorChange}
      />
    </Layout>
  );
}

export default withAuth(TableManagement);
