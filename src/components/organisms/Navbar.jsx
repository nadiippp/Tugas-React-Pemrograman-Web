import { NavLink } from "react-router-dom";
import Icon from "../atoms/Icon";

export default function Navbar({ viewMode = "grid" }) {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-[960px] mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <NavLink
          to="/products"
          className="flex items-center gap-2.5 text-slate-900 font-bold text-lg tracking-tight hover:text-blue-700 transition-colors"
        >
          <span className="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center">
            <Icon name="box" size={18} />
          </span>
          <span>Manajemen Produk</span>
        </NavLink>

        <div className="flex items-center gap-2">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                isActive
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-transparent"
              }`
            }
          >
            <Icon name="box" size={16} />
            <span>Produk</span>
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                isActive
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-transparent"
              }`
            }
          >
            <Icon name="settings" size={16} />
            <span>Settings</span>
            <span className="ml-0.5 px-1.5 py-0.5 text-[11px] font-medium uppercase rounded bg-slate-100 text-slate-600">
              {viewMode}
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
