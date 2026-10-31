import {
  Bot,
  Check,
  Cloud,
  Code2,
  Sparkles,
} from "lucide-react";

const serviceOptions = [
  { label: "AI & automation", icon: Bot },
  { label: "Software development", icon: Code2 },
  { label: "Cloud & infrastructure", icon: Cloud },
  { label: "Digital growth", icon: Sparkles },
];

const outcomeOptions = [
  "Reduce manual work",
  "Launch a new digital product",
  "Modernize existing technology",
  "Reach more of the right customers",
  "I'm still exploring",
];

export function ServiceStep({ value, onChange }) {
  return (
    <fieldset className="wizard-fieldset">
      <legend className="wizard-legend">Pick a service area</legend>
      <div className="service-options">
        {serviceOptions.map((option) => {
          const Icon = option.icon;
          const selected = value === option.label;
          return (
            <button
              className={`service-option ${selected ? "selected" : ""}`}
              type="button"
              key={option.label}
              aria-pressed={selected}
              onClick={() => onChange(option.label)}
            >
              <span className="option-icon">
                <Icon size={19} aria-hidden="true" />
              </span>
              <span>{option.label}</span>
              {selected && (
                <Check
                  className="option-check"
                  size={17}
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function OutcomeStep({ outcome, timeline, onOutcomeChange, onTimelineChange }) {
  return (
    <div className="wizard-fieldset">
      <fieldset>
        <legend className="wizard-legend">
          What would you like to achieve?
        </legend>
        <div className="outcome-options">
          {outcomeOptions.map((option) => (
            <button
              className={`outcome-option ${
                outcome === option ? "selected" : ""
              }`}
              type="button"
              key={option}
              aria-pressed={outcome === option}
              onClick={() => onOutcomeChange(option)}
            >
              <span className="radio-dot" aria-hidden="true" />
              {option}
            </button>
          ))}
        </div>
      </fieldset>
      <label className="form-label timeline-label" htmlFor="project-timeline">
        When are you hoping to begin? <span>Optional</span>
        <select
          id="project-timeline"
          value={timeline}
          onChange={(event) => onTimelineChange(event.target.value)}
        >
          <option>I'm exploring</option>
          <option>Within the next month</option>
          <option>In 1–3 months</option>
          <option>Later this year</option>
        </select>
      </label>
    </div>
  );
}

export function ContactStep({ form, onChange, onSubmit }) {
  return (
    <form className="contact-fields" onSubmit={onSubmit}>
      <p className="wizard-legend">How can Cynbit reach you?</p>
      <label className="form-label" htmlFor="discovery-name">
        Full name
        <input
          id="discovery-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          value={form.name}
          onChange={(event) => onChange("name", event.target.value)}
          required
        />
      </label>
      <label className="form-label" htmlFor="discovery-email">
        Email address
        <input
          id="discovery-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={form.email}
          onChange={(event) => onChange("email", event.target.value)}
          required
        />
      </label>
      <label className="form-label" htmlFor="discovery-company">
        Organization <span>Optional</span>
        <input
          id="discovery-company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Company or team"
          value={form.company}
          onChange={(event) => onChange("company", event.target.value)}
        />
      </label>
      <label className="form-label" htmlFor="discovery-context">
        Anything else we should know? <span>Optional</span>
        <textarea
          id="discovery-context"
          name="context"
          rows={3}
          maxLength={700}
          placeholder="A little context about the challenge..."
          value={form.context}
          onChange={(event) => onChange("context", event.target.value)}
        />
      </label>
      <button className="button button-primary wizard-submit" type="submit">
        Prepare my project brief <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
