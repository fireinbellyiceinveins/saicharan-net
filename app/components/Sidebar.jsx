import { NavLink } from "@remix-run/react";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
  const navItems = [
    { path: "/about", label: "About" },
    { path: "/writing", label: "Thoughts" },
    { path: "/projects", label: "Projects" },
    { path: "/people", label: "People" },
    { path: "/work", label: "Work" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <NavLink to="/about">🍦</NavLink>
      </div>
      <nav>
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <ThemeToggle />
      </div>
    </aside>
  );
} 