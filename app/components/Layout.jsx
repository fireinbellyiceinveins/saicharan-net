import { useState } from "react";
import { Link, useLocation } from "@remix-run/react";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";

export default function Layout({ children }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="mobile-header">
        <div className="sidebar-logo">
          <a href="/about">🍦</a>
        </div>
        <div className="mobile-header-controls">
          <ThemeToggle />
          <button className="hamburger-button" onClick={() => setMenuOpen(true)}>
            &#9776;
          </button>
        </div>
      </div>

      <div className="app">
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </div>

      {isMenuOpen && <MobileNav setMenuOpen={setMenuOpen} />}
    </>
  );
} 