import { ArrowRight, Layers3, Mail, ShieldCheck, Target } from "lucide-react";
import SectionHeading from "../SectionHeading";

function ApproachSection({ onStartDiscovery }) {
  return (
    <section className="approach-section section-space" id="approach">
      <div className="page-width approach-layout">
        <div className="approach-copy">
          <SectionHeading
            eyebrow="A BETTER WAY TO BEGIN"
            title={
              <>
                Clarity before
                <br />
                complexity.
              </>
            }
            description="Not sure which solution fits? Start with the challenge. A few guided choices make it easier to explain what you need—without having to write the perfect brief."
          />
          <button
            className="button button-primary"
            type="button"
            onClick={onStartDiscovery}
          >
            Shape your project brief <ArrowRight size={17} />
          </button>
        </div>
        <div className="approach-panel">
          <div className="panel-topline">
            <span>YOUR FIRST CONVERSATION</span>
            <span className="panel-status">
              <span /> 3 simple steps
            </span>
          </div>
          <div className="journey-step">
            <span className="step-number">01</span>
            <div>
              <h3>Choose a direction</h3>
              <p>AI, software, cloud, or digital growth.</p>
            </div>
            <Layers3 size={20} aria-hidden="true" />
          </div>
          <div className="journey-step">
            <span className="step-number">02</span>
            <div>
              <h3>Describe the outcome</h3>
              <p>Tell us what progress looks like for you.</p>
            </div>
            <Target size={20} aria-hidden="true" />
          </div>
          <div className="journey-step">
            <span className="step-number">03</span>
            <div>
              <h3>Prepare your introduction</h3>
              <p>Review your context before opening an email draft.</p>
            </div>
            <Mail size={20} aria-hidden="true" />
          </div>
          <div className="panel-footnote">
            <ShieldCheck size={15} aria-hidden="true" />
            This prototype does not store or send your information.
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApproachSection;
