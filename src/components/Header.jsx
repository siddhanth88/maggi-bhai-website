import { useState, useEffect } from "react";
import {
  Vote,
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { whatsappHandler } from "../utils/common";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Vision", href: "#vision" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`block lg:fixed top-0 left-0 right-0 lg:right-auto z-50 transition-all duration-500 ${
          isScrolled ? "py-0 lg:py-0" : "py-0 lg:py-0"
        }`}
      >
        <div className="lg:px-0">
          {/* Dynamic Island Container */}
          <nav
            className={`relative transition-all duration-500 ${
              isScrolled
                ? "bg-slate-900/80 backdrop-blur-2xl shadow-2xl border-slate-700/50"
                : "bg-slate-900/60 backdrop-blur-xl shadow-lg border-slate-700/30"
            } lg:rounded-full w-full lg:w-fit lg:border`}
          >
            {/* Ambient glow effect */}
            <div
              className={`absolute inset-0 lg:rounded-full transition-opacity duration-500 ${
                isScrolled ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 lg:rounded-full bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10 blur-xl" />
            </div>

            {/* Main Navigation */}
            <div className="relative flex items-center gap-2 px-4 py-3 sm:gap-3 sm:px-6 sm:py-4 lg:px-4 lg:py-2.5 justify-between">
              {/* Logo/Brand */}
              <a
                href="#home"
                className="flex items-center gap-2 transition-transform duration-300 sm:gap-3 group hover:scale-105"
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 bg-orange-500 rounded-lg opacity-50 blur-md animate-pulse"
                    style={{ animationDuration: "3s" }}
                  />
                  <div className="relative flex items-center justify-center transition-all duration-300 rounded-lg w-9 h-9 sm:w-10 sm:h-10 lg:w-9 lg:h-9 group-hover:rotate-12">
                    <img
                      src="/shiv-sena-logo.png"
                      alt="Logo"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-base font-extrabold leading-tight text-white sm:text-lg lg:text-sm">
                    Maggi Bhai
                  </h1>
                  <p className="text-xs font-bold sm:text-sm lg:text-[10px] text-orange-400">
                    Shiv Sena
                  </p>
                </div>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden gap-1 lg:flex">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="relative px-3 py-1.5 text-xs font-semibold transition-all duration-300 rounded-full text-slate-300 hover:text-white group"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute inset-0 transition-all duration-300 scale-0 rounded-full bg-white/10 group-hover:scale-100" />
                  </a>
                ))}
              </div>

              {/* CTA Buttons - Desktop */}
              <div className="items-center hidden gap-2 lg:flex">
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold transition-all duration-300 rounded-full group text-slate-300 hover:text-white"
                >
                  <Phone
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-12"
                    strokeWidth={2.5}
                  />
                  <span className="hidden xl:inline">Call</span>
                  <div className="absolute inset-0 transition-all duration-300 scale-0 rounded-full bg-white/10 group-hover:scale-100" />
                </a>

                <button
                  onClick={() => whatsappHandler()}
                  className="cursor-pointer relative overflow-hidden px-3 py-1.5 text-xs font-bold text-white transition-all duration-300 rounded-full shadow-lg group hover:scale-105"
                >
                  <div className="absolute inset-0 transition-transform duration-500 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 group-hover:scale-110" />
                  <span className="relative z-10 flex items-center gap-1.5">
                    <Sparkles
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-12"
                      strokeWidth={2.5}
                    />
                    <span>Join</span>
                  </span>
                  <div
                    className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:opacity-100"
                    style={{ animation: "shine 2s infinite" }}
                  />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative flex items-center justify-center transition-all duration-300 rounded-full w-9 h-9 lg:w-8 lg:h-8 lg:hidden group hover:bg-white/10"
              >
                {isMobileMenuOpen ? (
                  <X
                    className="w-5 h-5 text-white transition-transform duration-300 lg:w-4 lg:h-4 group-hover:rotate-90"
                    strokeWidth={2.5}
                  />
                ) : (
                  <Menu
                    className="w-5 h-5 text-white transition-transform duration-300 lg:w-4 lg:h-4 group-hover:scale-110"
                    strokeWidth={2.5}
                  />
                )}
              </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
              className={`lg:hidden overflow-hidden transition-all duration-500 ${
                isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-4 pb-4 space-y-2 border-t sm:px-6 border-slate-700/50">
                {/* Navigation Links */}
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl text-slate-300 hover:text-white hover:bg-white/10"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {link.name}
                  </a>
                ))}

                {/* Mobile CTA Buttons */}
                <div className="pt-2 space-y-2">
                  <a
                    href="tel:+919146469000"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl text-slate-300 hover:text-white hover:bg-white/10"
                  >
                    <Phone className="w-4 h-4" strokeWidth={2.5} />
                    <span>Call Us</span>
                  </a>

                  <button
                    onClick={() => {
                      whatsappHandler();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full relative flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 overflow-hidden rounded-xl group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500" />
                    <Sparkles
                      className="relative z-10 w-4 h-4"
                      strokeWidth={2.5}
                    />
                    <span className="relative z-10">Join Campaign</span>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  );
}