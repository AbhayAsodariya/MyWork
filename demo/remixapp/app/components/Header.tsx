// app/components/Header.tsx
import { NavLink } from "@remix-run/react";

export default function Header() {
  return (
    <header className="bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-blue-600">
          {/* E-commerce Site */}
        </NavLink>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/login"
                className="block w-full py-2 px-4 text-center bg-blue-600 hover:bg-blue-700 rounded mb-2"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className="block w-full py-2 px-4 text-center bg-green-600 hover:bg-green-700 rounded"
              >
                Register
              </NavLink>
            </li>

            <li>
              <div className="bg-white border text-center bottom-1 p-2 rounded-full w-10 h-10 text-black ">
                A
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
