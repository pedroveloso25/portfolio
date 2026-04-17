"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { name: "work", href: "#projects" },
  { name: "exp", href: "#about" },
  { name: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 text-xl font-mono text-foreground hover:text-accent transition-colors">
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid #3B82F6' }}>
            <Image
              src="/pedro.jpg"
              alt="Pedro"
              width={36}
              height={36}
              unoptimized
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
          pedro.rv
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-sm text-text-secondary hover:text-foreground transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
        <a
          href="mailto:pedroreboucasveloso@gmail.com"
          className="hidden md:inline-flex px-4 py-2 rounded-lg bg-accent text-background font-medium text-sm hover:opacity-90 transition-opacity"
        >
          hire me
        </a>
      </div>
    </nav>
  );
}
