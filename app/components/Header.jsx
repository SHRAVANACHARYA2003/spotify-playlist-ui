"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [active, setActive] = useState("playlist");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "playlist", label: "My Playlist" },
    { id: "home", label: "Home" },
    { id: "browse", label: "Browse" },
  ];

  return (
    <header className={`topbar ${scrolled ? "scrolled" : ""}`}>
      <div className="topbar-left">
        <div className="logo">Spotify</div>

        <nav className="nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${active === item.id ? "active" : ""}`}
              onClick={() => setActive(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="topbar-right">
        <div className="profile">
          <div className="avatar">U</div>
          <span className="profile-name">User</span>
        </div>
      </div>
    </header>
  );
}
