// Layout.js
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { ThemeProvider } from "next-themes";

const Layout = ({ children }) => {
  return (
    <ThemeProvider attribute="class">
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 overflow-y-auto p-6 bg-neutral-50 dark:bg-gray-900">
            {children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
