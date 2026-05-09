import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Для кого", href: "#for-whom" },
  { label: "Как работаем", href: "#how-we-work" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Кейсы", href: "#cases" },
  { label: "FAQ", href: "#faq" },
  { label: "О нас", href: "#about" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleLink("#hero"); }}
          className={`font-bold text-lg tracking-tight font-montserrat transition-colors ${scrolled ? "text-[hsl(var(--brand))]" : "text-white"}`}
        >
          АЗИ<span className="brand-accent-text">мпакт</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className={`text-sm font-medium transition-colors hover:brand-accent-text ${
                scrolled ? "text-gray-700 hover:text-[hsl(var(--brand))]" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleLink("#contact")}
            className="ml-2 px-4 py-2 text-sm font-semibold rounded brand-bg text-white hover:brand-bg-light transition-colors"
          >
            Получить расчёт
          </button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} className={scrolled ? "text-gray-800" : "text-white"} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLink(link.href)}
                className="text-left text-sm font-medium text-gray-700 hover:text-[hsl(var(--brand))] py-1"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleLink("#contact")}
              className="mt-2 px-4 py-2 text-sm font-semibold rounded brand-bg text-white"
            >
              Получить расчёт
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
