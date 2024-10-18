// app/routes/dashboard.tsx
import { json, redirect } from "@remix-run/node";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, ChevronDown, ChevronUp, X } from "lucide-react";

interface LoaderData {
  theme: "light" | "dark";
}

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = request.headers.get("Cookie");
  const isAuthenticated = cookie?.includes("authenticated=true");

  if (!isAuthenticated) {
    return redirect("/login");
  }

  const theme = cookie?.includes("theme=dark") ? "dark" : "light";
  return json<LoaderData>({ theme });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const theme = formData.get("theme") as "light" | "dark";
  return json(
    { success: true },
    {
      headers: {
        "Set-Cookie": `theme=${theme}; Path=/; HttpOnly; SameSite=Lax`,
      },
    }
  );
};

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className={`bg-gray-800 text-white h-screen ${
        isOpen ? "w-64" : "w-16"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="p-4 flex justify-between items-center">
        <h2 className={`font-bold ${isOpen ? "block" : "hidden"}`}>
          Dashboard
        </h2>
        <button onClick={toggleSidebar} className="text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <nav className="mt-8">
        <ul>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Home</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            Analytics
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer relative">
            <div
              className="flex items-center justify-between"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>Settings</span>
              {isDropdownOpen ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </div>
            {isDropdownOpen && (
              <ul className="ml-4 mt-2">
                <li className="py-1 hover:text-gray-300 cursor-pointer">
                  Profile
                </li>
                <li className="py-1 hover:text-gray-300 cursor-pointer">
                  Preferences
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => (
  <header className="bg-white dark:bg-gray-800 shadow-md p-4">
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
        My Dashboard
      </h1>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </div>
  </header>
);

const Footer: React.FC = () => (
  <footer className="bg-gray-100 dark:bg-gray-800 p-4 text-center text-gray-600 dark:text-gray-300">
    <p>&copy; 2024 My Dashboard. All rights reserved.</p>
  </footer>
);

export default function Dashboard() {
  const { theme: initialTheme } = useLoaderData<LoaderData>();
  const [theme, setTheme] = useState<"light" | "dark">(initialTheme);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const submit = useSubmit();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    submit({ theme: newTheme }, { method: "post" });
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={`flex h-screen ${theme === "dark" ? "dark" : ""}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Welcome to Your Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                Card 1
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Some content here...
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                Card 2
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                More content here...
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                Card 3
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Even more content...
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
