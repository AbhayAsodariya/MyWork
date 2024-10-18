"use client";
import React from "react";
import Layout from "@/components/common/Layout";
import withAuth from "@/components/common/withAuth";

function Dashboard() {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p>
          Welcome to the ResPOS dashboard. Select an option from the sidebar to
          get started.
        </p>
      </div>
    </Layout>
  );
}

export default withAuth(Dashboard);
