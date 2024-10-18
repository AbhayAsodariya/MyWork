// This is a mock API file. In a real application, these functions would make actual API calls.

const mockTables = {
  "1 Floor": [
    { id: "T-01", status: "available" },
    { id: "T-02", status: "reserved" },
    { id: "T-03", status: "occupied" },
    { id: "T-04", status: "waiting" },
    { id: "T-05", status: "bill-settlement" },
  ],
  "2 Floor": [
    { id: "T-06", status: "available" },
    { id: "T-07", status: "reserved" },
    { id: "T-08", status: "occupied" },
  ],
  "Out side": [
    { id: "T-09", status: "available" },
    { id: "T-10", status: "waiting" },
  ],
};

export const fetchTables = async (floor) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockTables[floor] || [];
};

export const updateTableStatus = async (tableId, newStatus) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  // In a real application, this would update the database
  console.log(`Table ${tableId} status updated to ${newStatus}`);
  return { success: true };
};
