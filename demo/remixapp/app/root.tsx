import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload,
  NavLink,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen">
        <div className="flex flex-1">
          {/* Global Sidebar */}
          <aside className="w-64 shadow-md bg-gray-900 text-white flex flex-col">
            <div className="p-4">
              <h1 className="text-2xl font-bold">E-commerce Site</h1>
            </div>
            <nav className="mt-6 flex-1">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `block py-2 px-4 ${
                    isActive
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `block py-2 px-4 ${
                    isActive
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `block py-2 px-4 ${
                    isActive
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`
                }
              >
                Cart
              </NavLink>
              <NavLink
                to="/account"
                className={({ isActive }) =>
                  `block py-2 px-4 ${
                    isActive
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`
                }
              >
                Account
              </NavLink>
            </nav>
            <div className="p-4 border-t border-gray-700">
              <NavLink
                to="/login"
                className="block w-full py-2 px-4 text-center bg-blue-600 hover:bg-blue-700 rounded mb-2"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="block w-full py-2 px-4 text-center bg-green-600 hover:bg-green-700 rounded"
              >
                Register
              </NavLink>
            </div>
          </aside>

          {/* Main content area */}
          <main className="flex-1 overflow-auto">
            <Header />
            <Outlet />
            <Footer />
          </main>
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
