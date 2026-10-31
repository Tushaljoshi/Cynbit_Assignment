import { ArrowUpRight } from "lucide-react";
import BrandMark from "./BrandMark";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-main">
        <div className="footer-brand">
          <BrandMark />
          <p>Optimistic architecture for a digital-first world.</p>
        </div>
        <div className="footer-contact">
          <p className="footer-label">START A CONVERSATION</p>
          <a href="mailto:opportunities@cynbit.in">
            opportunities@cynbit.in <ArrowUpRight size={15} />
          </a>
          <a href="tel:+918947962667">+91 89479 62667</a>
        </div>
        <div className="footer-location">
          <p className="footer-label">BASED IN</p>
          <span>Jaipur, Rajasthan, India</span>
        </div>
      </div>
      <div className="page-width footer-bottom flex items-center justify-between">
        <span>© {new Date().getFullYear()} Cynbit Technologies</span>
        <span>Built for what’s next.</span>
        <a href="#home">
          Back to top <ArrowUpRight size={14} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
