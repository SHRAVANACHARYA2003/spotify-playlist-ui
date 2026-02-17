"use client";

import { AiFillHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { MdLibraryMusic } from "react-icons/md";

export default function BottomNav({ active = "home", onChange }) {
  const navItems = [
    { id: "home", label: "Home", icon: <AiFillHome /> },
    { id: "search", label: "Search", icon: <IoSearch /> },
    { id: "library", label: "Your Library", icon: <MdLibraryMusic /> },
  ];

  return (
    <footer className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`nav-item ${active === item.id ? "active" : ""}`}
          onClick={() => onChange?.(item.id)}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </footer>
  );
}
