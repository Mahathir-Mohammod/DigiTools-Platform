import { useState } from "react";

const NAV_LINKS = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[1000] w-full border-b border-[#f0f0f0] bg-white px-5 py-0 shadow-sm md:px-10">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-tighter text-[#7c3aed] select-none">
          DigiTools
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-8 list-none md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="relative text-[0.9rem] font-medium text-[#374151] transition-colors duration-200 hover:text-[#7c3aed] after:absolute after:-bottom-[3px] after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#7c3aed] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right*/}
        <div className="hidden items-center gap-5 md:flex">
          <button className="flex items-center gap-[6px] p-1 text-[0.9rem] cursor-pointer font-medium text-[#374151] transition-colors hover:text-[#7c3aed]" aria-label="Cart">
            <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>
          <button className="p-1 text-[0.9rem] cursor-pointer font-medium text-[#374151] transition-colors hover:text-[#7c3aed]">
            Login
          </button>
          <button className="whitespace-nowrap rounded-full bg-[#7c3aed] px-[22px] py-[10px] text-[0.88rem] font-semibold text-white shadow-[0_2px_10px_rgba(124,58,237,0.35)] transition-all hover:-translate-y-[1px] hover:bg-[#6d28d9] active:translate-y-0 cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Hamburger-B */}
        <button
          className="flex flex-col gap-[5px] p-1 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}>
          <span className={`block h-[2px] w-[22px] rounded-full bg-[#374151] transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-[2px] w-[22px] rounded-full bg-[#374151] transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-[22px] rounded-full bg-[#374151] transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile */}
      <div className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-16 flex-col gap-1 border-t border-[#f0f0f0] bg-white p-4 pb-6 shadow-lg md:hidden`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="border-b border-[#f5f5f5] py-2.5 text-[0.9rem] font-medium text-[#374151] transition-colors hover:text-[#7c3aed]"
          >
            {link}
          </a>
        ))}
        <div className="mt-4 flex items-center gap-3">
          <button className="text-[0.9rem] font-medium text-[#374151]">Login</button>
          <button className="rounded-full bg-[#7c3aed] px-[22px] py-[10px] text-[0.88rem] font-semibold text-white shadow-[0_2px_10px_rgba(124,58,237,0.35)]">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}