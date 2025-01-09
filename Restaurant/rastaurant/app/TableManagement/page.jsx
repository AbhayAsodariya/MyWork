"use client";
import Layout from '@/components/common/Layout';
// import Layout from "@/components/common/Layout";
// import TableFilter from "@/components/TableManagement/TableFilter";
// import TableFloorSelector from "@/components/TableManagement/TableFloorSelector";
// import TableGrid from "@/components/TableManagement/TableGrid";
// import TableStatusLegend from "@/components/TableManagement/TableStatusLegend";
// import * as React from "react";
// import { useState } from "react";

// export default function TableLayout() {
//   const [selectedFloor, setSelectedFloor] = useState(1);
//   const [selectedFilter, setSelectedFilter] = useState("all");

//   return (
//     <Layout>
//       <main className="flex flex-col items-center p-4 md:p-6 lg:p-8 min-h-screen ">
//         <section className="flex flex-col md:flex-row gap-6 md:gap-10 justify-between items-start md:items-center w-full max-w-7xl">
//           <h1 className="text-2xl font-semibold text-slate-950 dark:text-white">
//             Select table
//           </h1>
//           <TableStatusLegend />
//           <TableFilter
//             selected={selectedFilter}
//             onFilterChange={setSelectedFilter}
//           />
//         </section>

//         <TableGrid floor={selectedFloor} filter={selectedFilter} />

//         <TableFloorSelector
//           selectedFloor={selectedFloor}
//           onFloorChange={setSelectedFloor}
//         />
//       </main>
//     </Layout>
//   );
// }



// pages/index.js
import RestaurantScene from '@/components/RestaurantScene';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1 style={{ textAlign: "center", padding: "1rem" }}>
          3D Restaurant Design
        </h1>
        <RestaurantScene />
      </div>
    </Layout>
  );
}
