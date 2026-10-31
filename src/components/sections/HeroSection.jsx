import {
  ArrowDownRight,
  ArrowRight,
  Bot,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";

function HeroArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="art-glow" />
      <div className="art-grid" />
      <motion.div
        className="art-orbit orbit-outer"
        animate={{ rotate: 360 }}
        transition={{ duration: 54, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="art-orbit orbit-inner"
        animate={{ rotate: -360 }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
      />
      <div className="art-core">
        <div className="core-icon">
          <Workflow size={30} strokeWidth={1.5} />
        </div>
        <span>INTELLIGENCE, IN MOTION</span>
      </div>
      <div className="art-chip chip-automation">
        <span className="chip-icon teal-chip">
          <Bot size={16} />
        </span>
        <span>
          <strong>AI automation</strong>
          <small>Less busywork</small>
        </span>
      </div>
      <div className="art-chip chip-systems">
        <span className="chip-icon peach-chip">
          <Network size={16} />
        </span>
        <span>
          <strong>Connected systems</strong>
          <small>Built around you</small>
        </span>
      </div>
      <span className="art-node node-one" />
      <span className="art-node node-two" />
      <span className="art-node node-three" />
    </div>
  );
}

function HeroSection({ onStartDiscovery }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-inner page-width grid items-center">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="hero-kicker">
            <span className="kicker-dot" />
            THE OPTIMISTIC ARCHITECT
          </div>
          <h1>
            Architecting
            <br />
            the future with
            <br />
            <em className="text-brand-teal">AI automation.</em>
          </h1>
          <p className="hero-description">
            Cynbit Technologies architects the digital future with autonomous
            AI agents, custom software development, and scalable business
            platforms. Based in Jaipur, Rajasthan, we bridge the gap between
            technical precision and business growth.
          </p>
          <div className="hero-actions flex flex-wrap gap-3">
            <button
              className="button button-primary inline-flex items-center gap-3 rounded-full bg-brand-teal text-brand-white"
              type="button"
              onClick={onStartDiscovery}
            >
              Start discovery <ArrowRight size={18} aria-hidden="true" />
            </button>
            <a className="button button-light" href="#work">
              View our work <ArrowDownRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-note">
            <ShieldCheck size={16} aria-hidden="true" />
            A thoughtful first step for your next big idea.
          </div>
        </motion.div>
        <motion.div
          className="hero-visual-wrap"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <HeroArtwork />
        </motion.div>
      </div>
      <div className="hero-bottom page-width">
        <span>IDEAS INTO DIGITAL ADVANTAGE</span>
        <a href="#services">
          Explore our capabilities <ArrowDownRight size={15} />
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
