// Assuming you already have MenuItem component
"use client";
import React, { useState } from "react";
import Link from "next/link";

const MenuItem = ({ icon: Icon, label, submenu, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="relative">
      <div className="flex items-center p-2 space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700">
        <Icon className="h-5 w-5" />
        <Link href={link || "#"} className="flex-grow">
          <span>{label}</span>
        </Link>
        {submenu && (
          <button onClick={toggleSubmenu} className="ml-auto">
            {isOpen ? "▲" : "▼"}
          </button>
        )}
      </div>

      {/* Submenu */}
      {isOpen && submenu && (
        <ul className="ml-6 mt-1 space-y-1">
          {submenu.map((subitem, index) => (
            <li
              key={index}
              className="hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Link href={`/${subitem.toLowerCase()}`}>
                <span className="block p-2">{subitem}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
