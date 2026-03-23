"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "CALL FOR PAPERS", href: "#tracks" },
    { label: "IMPORTANT DATES", href: "#timeline" },
    { label: "REGISTRATION FEE", href: "#registration" },
    { label: "PUBLICATIONS", href: "#publications" },
    { label: "SUPPORT", href: "#support" },
  ]

  return (
    <nav className="absolute w-full top-0 z-50 bg-transparent transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-24 w-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center mr-8">
            <h1 className="text-2xl font-bold text-white flex items-center leading-none">
              <span className="text-5xl mr-1"> </span>
              <span className="flex flex-col text-m tracking-widest font-bold">
                <span>ICRMRI</span>
                <span>2026</span>
              </span>
            </h1>
          </div>

          {/* Desktop Menu - Spread Out */}
          <div className="hidden xl:flex flex-1 justify-between items-center max-w-6xl mx-auto px-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base xl:text-[16px] font-bold text-white tracking-wide hover:text-white/80 transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-white/80">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="xl:hidden pb-6 pt-2 px-4 absolute top-24 left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-sm font-bold tracking-wide text-white hover:text-white/80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="block py-3">
              <div className="bg-white px-2 py-1 inline-block rounded-sm">
                <div className="border border-black px-1.5 py-0.5 text-[10px] font-bold text-black leading-tight">
                  NAAC GRADE A
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

