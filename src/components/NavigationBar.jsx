"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavigationBar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";

  const navItems = [
    { name: "About me", href: "/#hero", isHomeOnly: true },
    { name: "Projects", href: "/#projects", isHomeOnly: true },
    { name: "Skills", href: "/#skills", isHomeOnly: true },
    { name: "Updates", href: "/#updates", isHomeOnly: true },
    { name: "Contact me", href: "/#contact", isHomeOnly: true },
  ];

  const handleClick = (e, href) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.substring(2);
      if (isHomePage) {
        const element = document.getElementById(targetId);
        if (element) {
          const navbarHeight = 64; // h-16 = 64px
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      } else {
        // Navigate to home page first, then scroll to section
        window.location.href = href;
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            Mohamed A.
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              // Show all items on home page, but only non-home-only items on other pages
              if (!isHomePage && item.isHomeOnly) {
                return null;
              }

              const isActive = false; // Updates is now a modal, not a page

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`px-4 py-2 rounded-lg text-base font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-cyan-500 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20"
                      : "text-gray-800 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-700/50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden border-t border-gray-200 dark:border-gray-700 py-4 ${
              isScrolled
                ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md"
                : "bg-white dark:bg-gray-800"
            }`}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                // Show all items on home page, but only non-home-only items on other pages
                if (!isHomePage && item.isHomeOnly) {
                  return null;
                }

                const isActive = false; // Updates is now a modal, not a page

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleClick(e, item.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-4 py-2 rounded-lg text-base font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-cyan-500 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20"
                        : "text-gray-800 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-700/50"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

