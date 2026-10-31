import { ArrowRight, Sparkles } from "lucide-react";

function ClosingSection({ onStartDiscovery }) {
  return (
    <section className="closing-section section-space" id="contact">
      <div className="closing-card page-width">
        <div className="closing-decoration" aria-hidden="true">
          <div />
          <div />
          <div />
        </div>
        <div className="closing-content">
          <p className="eyebrow">READY WHEN YOU ARE</p>
          <h2>
            Have a challenge
            <br />
            worth solving?
          </h2>
          <p>
            Tell us where you want to go. We’ll help you start with the right
            questions.
          </p>
          <button
            className="button button-cream"
            type="button"
            onClick={onStartDiscovery}
          >
            Start your discovery <ArrowRight size={17} />
          </button>
        </div>
        <div className="closing-aside">
          <span className="closing-spark">
            <Sparkles size={22} />
          </span>
          <p>Good things start with a clear conversation.</p>
          <span>LET’S BUILD WHAT’S NEXT</span>
        </div>
      </div>
    </section>
  );
}

export default ClosingSection;
