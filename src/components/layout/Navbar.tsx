"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "What We Do", href: "/what-we-do" },
  { name: "Who We Serve", href: "/who-we-serve" },
  { name: "Our Work", href: "/our-work" },
  { name: "Our Faculty", href: "/our-faculty" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-md transition-transform group-hover:scale-105">
                <Image src="/favicon.png" alt="TAC Logo" fill className="object-contain" />
              </div>
              <span className="font-serif font-bold text-xl text-primary leading-tight">
                The Arete<br/>Connoisseurs
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-dark hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-primary-dark transition-colors shadow-sm hover:shadow-md"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-dark hover:text-primary p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 rounded-md text-base font-medium text-neutral-dark hover:bg-gray-50 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block mt-4 text-center bg-primary text-white px-5 py-3 rounded-md text-base font-semibold hover:bg-primary-dark"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
