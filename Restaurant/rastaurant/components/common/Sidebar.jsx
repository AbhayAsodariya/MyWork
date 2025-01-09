// Sidebar.jsx
"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaCog,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";

const Sidebar = ({ isOpen }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    if (!isOpen) setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    if (!isOpen) setActiveMenu(null);
  };

  const handleClick = (menu) => {
    if (isOpen) {
      setActiveMenu(activeMenu === menu ? null : menu);
    }
  };

  const MenuItem = ({ icon: Icon, label, submenu, link }) => (
    <div
      className={`flex flex-col ${
        isOpen ? "w-full" : "w-16"
      } transition-all duration-300 ease-in-out`}
      onMouseEnter={() => handleMouseEnter(label)}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleClick(label)}
    >
      <Link
        href={link || "#"}
        className="flex items-center p-2 text-gray-200 hover:bg-gray-700"
      >
        <Icon className="w-5 h-5" />
        {isOpen && <span className="ml-2">{label}</span>}
        {submenu &&
          isOpen &&
          (activeMenu === label ? (
            <FaChevronDown className="ml-auto" />
          ) : (
            <FaChevronRight className="ml-auto" />
          ))}
      </Link>

      {submenu &&
        ((isOpen && activeMenu === label) ||
          (!isOpen && activeMenu === label)) && (
          <div
            className={`${
              isOpen ? "pl-4" : "absolute left-16 mt-0 bg-gray-700 shadow-md"
            }`}
          >
            {submenu.map((item, index) => (
              <Link
                key={index}
                href={item.link || "#"}
                className="block p-2 text-gray-200 hover:bg-gray-500"
              >
                <span className="ml-2">{item.label}</span>
              </Link>
            ))}
          </div>
        )}
    </div>
  );

  return (
    <div
      className={`h-screen bg-gray-800 border-r ${
        isOpen ? "w-64" : "w-16"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        {isOpen ? (
          <h1 className="text-xl font-bold text-white">ResPos</h1>
        ) : (
          <h1 className="text-xl font-bold text-white">RP</h1>
        )}
      </div>

      <nav className="mt-4">
        <MenuItem icon={FaHome} label="Dashboard" link="/dashboard" />
        <MenuItem
          icon={FaUser}
          label="Table Management"
          link="/TableManagement"
        />
        {/* <MenuItem
          icon={FaUser}
          label="Table Management"
          submenu={[
            {
              label: "Add Table",
              link: "/TableManagement/AddTable",
            },
            {
              label: "Manage Tables",
              link: "/TableManagement/ManageTables",
            },
          ]}
        /> */}
        <MenuItem icon={FaCog} label="Settings" />
      </nav>
    </div>
  );
};

export default Sidebar;
