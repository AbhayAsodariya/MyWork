import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";
import Image from "next/image";

export default function Home({ children }) {
  return (
    <div className="flex overflow-hidden flex-col bg-neutral-50">
      <Header />
      <div className="flex flex-wrap gap-5 justify-between w-full">
        <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
          <Sidebar />
        </div>
        <main className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
