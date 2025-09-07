import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-stone-50">
      <Sidebar/>
      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
