import {
  Layout,
  Users,
  Calendar,
  Settings,
  LogOut,
} from "react-feather";
import { NavLink, useNavigate } from "react-router-dom";

const navLinks = [
  { icon: Layout, name: "Dashboard", path: "/dashboard" },
  { icon: Users, name: "Patients", path: "/patients" },
  { icon: Calendar, name: "Schedule", path: "/schedule" },
  { icon: Settings, name: "Settings", path: "/settings" },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <img src="/logo1.png" alt="Kcare" className="h-10 w-auto" />
        <span className="font-display text-2xl tracking-tight text-stone-900">
          Doctor Portal
        </span>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end={link.path === "/dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                isActive
                  ? "bg-indigo-50 text-indigo-700 font-semibold"
                  : "text-stone-600 hover:bg-stone-100"
              }`
            }
          >
            <link.icon size={20} />
            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-stone-200">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-stone-600 hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
