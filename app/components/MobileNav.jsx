import { NavLink } from "@remix-run/react";

export default function MobileNav({ setMenuOpen }) {
  const navItems = [
    { path: "/about", label: "about" },
    { path: "/writing", label: "thoughts" },
    { path: "/projects", label: "projects" },
    { path: "/people", label: "people" },
    { path: "/work", label: "work" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="mobile-nav">
      <div className="mobile-nav-header">
        <NavLink to="/about" onClick={handleLinkClick} className="mobile-nav-logo">🍦</NavLink>
        <button className="mobile-nav-close" onClick={() => setMenuOpen(false)}>
          &times;
        </button>
      </div>
      <nav>
        <ul className="mobile-nav-menu">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={handleLinkClick}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
} 