"use client";
import { useRouter } from "next/navigation";
import React from "react";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/LoginPage/login");
  };

  return (
    <header className="flex flex-wrap gap-5 justify-between px-6 py-3 w-full bg-gray-800 border-b border-solid border-b-gray-200 max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-7 items-center max-md:max-w-full">
        <div className="gap-2 self-stretch px-3 py-2 my-auto text-sm font-semibold leading-relaxed text-center bg-gray-50 rounded-md border border-solid border-zinc-200 text-zinc-900">
          Law Garden Outlet
        </div>
      </div>
      <div className="flex gap-4 my-auto">
          <DarkModeToggle />
       
        <button
          onClick={handleLogout}
          className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
