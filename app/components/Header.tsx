"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Stack", href: "#stack" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-tight text-white"
                >
                    Ichan Rivera
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden gap-8 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm text-gray-300 transition hover:text-white"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex flex-col gap-1 md:hidden"
                >
                    <span className="h-0.5 w-6 bg-white"></span>
                    <span className="h-0.5 w-6 bg-white"></span>
                    <span className="h-0.5 w-6 bg-white"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="border-t border-white/10 bg-black/90 md:hidden">
                    <nav className="flex flex-col px-6 py-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="py-3 text-gray-300 transition hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}