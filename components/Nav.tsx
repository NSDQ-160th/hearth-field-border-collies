"use client";

import { useState } from "react";
import { Mark } from "./Mark";
import { navLinks, site } from "@/lib/site";

export function Nav() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand" onClick={close}>
          <Mark />
          <span className="brand-copy">
            <span className="brand-name">{site.wordmark}</span>
            <span className="brand-sub">Border Collies</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#inquire" className="btn btn-rose nav-cta">
          Ask about a puppy
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <nav className="nav-panel" id="mobile-nav" aria-label="Mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a href="#inquire" className="btn btn-rose" onClick={close}>
            Ask about a puppy
          </a>
        </nav>
      ) : null}
    </header>
  );
}
