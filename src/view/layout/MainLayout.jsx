import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-gray-50 overflow-hidden">
      {/*  Fixed Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/*  Main Content Area (adjusted for sidebar width) */}
      <div className="flex flex-1 flex-col lg:ml-64 min-h-0">
        {/*  Sticky Header */}
        <Header onMenuClick={() => setSidebarOpen(true)} />

        {/*  Scrollable Page Content */}
        <main className="flex-1 overflow-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
