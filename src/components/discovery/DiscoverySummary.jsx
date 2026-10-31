import { Check, Mail } from "lucide-react";

function DiscoverySummary({ form, mailto, onDone }) {
  return (
    <div className="brief-ready" role="status" aria-live="polite">
      <div className="brief-ready-icon">
        <Check size={25} aria-hidden="true" />
      </div>
      <p className="brief-kicker">PROJECT BRIEF PREPARED</p>
      <h3>{form.service}</h3>
      <p className="brief-outcome">{form.outcome}</p>
      <div className="brief-summary">
        <span>CONTACT</span>
        <strong>
          {form.name} · {form.email}
        </strong>
        <span>TIMELINE</span>
        <strong>{form.timeline}</strong>
      </div>
      <p className="prototype-disclaimer">
        This is a frontend prototype. Nothing is stored or sent until you
        choose to open and send the email draft.
      </p>
      <div className="brief-actions">
        <a className="button button-primary" href={mailto}>
          Open email draft <Mail size={17} aria-hidden="true" />
        </a>
        <button className="button button-light" type="button" onClick={onDone}>
          Done
        </button>
      </div>
    </div>
  );
}

export default DiscoverySummary;
