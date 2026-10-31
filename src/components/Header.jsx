import { useState } from "react";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import BrandMark from "./BrandMark";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Case studies", href: "#work" },
  { label: "About", href: "#about" },
];

function Header({ onStartDiscovery }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const sectionHref = (href) => (pathname === "/" ? href : `/${href}`);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner page-width flex items-center justify-between">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={sectionHref(item.href)}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="button button-dark header-cta"
          onClick={onStartDiscovery}
          type="button"
        >
          Start a project <ArrowUpRight size={16} aria-hidden="true" />
        </button>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-menu page-width"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={sectionHref(item.href)}
              onClick={closeMenu}
            >
              {item.label} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
          <button
            className="button button-dark mobile-menu-cta"
            type="button"
            onClick={() => {
              closeMenu();
              onStartDiscovery();
            }}
          >
            Start a project <ArrowRight size={16} aria-hidden="true" />
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
