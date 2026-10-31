import { Layers3, Mail, Network, Workflow } from "lucide-react";

function MobileBottomNav({ onStartDiscovery }) {
  return (
    <nav className="mobile-bottom-nav" aria-label="Quick navigation">
      <a href="#home">
        <Workflow size={18} aria-hidden="true" />
        <span>Home</span>
      </a>
      <a href="#services">
        <Layers3 size={18} aria-hidden="true" />
        <span>Services</span>
      </a>
      <a href="#work">
        <Network size={18} aria-hidden="true" />
        <span>Work</span>
      </a>
      <button type="button" onClick={onStartDiscovery}>
        <Mail size={18} aria-hidden="true" />
        <span>Contact</span>
      </button>
    </nav>
  );
}

export default MobileBottomNav;
