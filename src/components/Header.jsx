"use client";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container nav">
        <div className="brand">
          <div className="brand-logo">Ps</div>
          Phantomsong
        </div>

        <nav className="nav-links" aria-label="Primary">
          <a href="#services" onClick={close}>Services</a>
          <a href="#work" onClick={close}>Portfolio</a>
          <a href="#about" onClick={close}>About</a>
          <a href="#contact" onClick={close}>Contact</a>
        </nav>

        <div className="nav-cta">
          <a className="btn btn-ghost" href="#work">View work</a>
          <a className="btn btn-primary" href="#contact">Book Free</a>
        </div>

        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(s => !s)}
        >
          ☰
        </button>
      </div>

      <div
        className="container mobile-menu"
        id="mobileMenu"
        style={{ display: open ? "flex" : "none" }}
        aria-hidden={!open}
      >
        <a href="#services" onClick={close}>Services</a>
        <a href="#work" onClick={close}>Portfolio</a>
        <a href="#about" onClick={close}>About</a>
        <a href="#contact" onClick={close}>Contact</a>
        <a className="btn btn-primary" href="#contact" onClick={close}>Book Free</a>
      </div>
    </header>
  );
}
