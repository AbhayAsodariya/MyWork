// Layout.js
"use client"
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { ThemeProvider } from "next-themes";

const Layout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <ThemeProvider attribute="class">
      <div className="flex h-screen">
        <Sidebar isOpen={isOpen} />
        <div className="flex flex-col flex-1">
          <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <main className="flex-1 overflow-y-auto p-6 bg-neutral-50 dark:bg-gray-900">
            {children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
