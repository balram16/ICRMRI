"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "COMMITTEE", href: "#committee" },
    { label: "CALL FOR PAPERS", href: "#tracks" },
    { label: "IMPORTANT DATES", href: "#timeline" },
    { label: "REGISTRATION FEE", href: "#registration" },
    { label: "PUBLICATIONS", href: "#publications" },
    { label: "SUPPORT", href: "#support" },
  ]

  return (
    <nav className="absolute w-full top-[41px] sm:top-[45px] z-50 bg-transparent transition-all duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 w-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-6 mr-4">
            <div className="mt-6">
            <Image
              src="/ltcelogo.webp"
              alt="LTCE Logo"
              width={80}
              height={80}
              className="object-contain"
            />
            </div>
            <h1 className="text-2xl font-bold text-white flex items-center leading-none">
              <span className="text-5xl mr-1 "> </span>
              <span className="flex flex-col text-m tracking-widest font-bold">
                <span>ICRMRI</span>
                <span>2026</span>
              </span>
            </h1>
          </div>

          {/* Desktop Menu - Spread Out */}
          <div className="hidden xl:flex flex-1 justify-end items-center gap-x-4 xl:gap-x-5 2xl:gap-x-7">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm xl:text-[15px] font-bold text-white tracking-normal hover:text-white/80 transition-colors whitespace-nowrap cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/Brochure ICRMRI 2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm xl:text-[15px] font-bold text-white tracking-normal hover:text-white/80 transition-colors whitespace-nowrap"
            >
              BROCHURE
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-white/80">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="xl:hidden pb-6 pt-2 px-4 absolute top-24 left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-sm font-bold tracking-wide text-white hover:text-white/80 transition-colors cursor-pointer"
                onClick={(e) => { scrollToSection(e, item.href); setIsOpen(false); }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/Brochure ICRMRI 2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 text-sm font-bold tracking-wide text-white hover:text-white/80 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              BROCHURE
            </a>
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
