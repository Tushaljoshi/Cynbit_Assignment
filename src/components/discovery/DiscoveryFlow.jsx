import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, ShieldCheck, Sparkles, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  ContactStep,
  OutcomeStep,
  ServiceStep,
} from "./DiscoverySteps";
import DiscoverySummary from "./DiscoverySummary";

const initialForm = {
  service: "",
  outcome: "",
  timeline: "I'm exploring",
  name: "",
  email: "",
  company: "",
  context: "",
};

const stepContent = [
  {
    title: "What are you looking to build?",
    description:
      "Choose the area that feels closest. You can always add context later.",
  },
  {
    title: "What would progress look like?",
    description:
      "A little direction helps shape a more relevant first conversation.",
  },
  {
    title: "Who should we get back to?",
    description: "Share just enough for Cynbit to know where to continue.",
  },
];

function DiscoveryFlow({ open = true, initialService = "", onClose, pageMode = false }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [briefReady, setBriefReady] = useState(false);

  useEffect(() => {
    if (open) {
      setStep(1);
      setBriefReady(false);
      setForm({ ...initialForm, service: initialService || "" });
    }
  }, [open, initialService]);

  const updateForm = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submitBrief = (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setBriefReady(true);
  };

  const emailBody = [
    "Hello Cynbit team,",
    "",
    "I'd like to explore a project together.",
    "",
    `Area of interest: ${form.service}`,
    `Desired outcome: ${form.outcome}`,
    `Timeline: ${form.timeline}`,
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Organization: ${form.company || "Not provided"}`,
    `Additional context: ${form.context || "Not provided"}`,
    "",
    "Sent from the Cynbit project discovery prototype.",
  ].join("\n");
  const mailto = `mailto:opportunities@cynbit.in?subject=${encodeURIComponent(
    `Project discovery: ${form.service}`,
  )}&body=${encodeURIComponent(emailBody)}`;
  const currentStep = stepContent[step - 1];

  return (
    <section
      className={pageMode ? "wizard-content wizard-page-content" : "wizard-flow"}
      aria-labelledby="discovery-title"
      aria-describedby="discovery-description"
    >
      <div className="wizard-top">
        <div className="wizard-brand">
          <span className="wizard-brand-mark" aria-hidden="true">
            c
          </span>
          <span>PROJECT DISCOVERY</span>
        </div>
        {pageMode ? (
          <Link
            className="wizard-close"
            to="/"
            aria-label="Return to Cynbit home"
          >
            <X size={19} aria-hidden="true" />
          </Link>
        ) : (
          <button
            className="wizard-close"
            type="button"
            onClick={onClose}
            aria-label="Close project discovery"
          >
            <X size={19} aria-hidden="true" />
          </button>
        )}
      </div>

      <h1 className="wizard-main-title" id="discovery-title">
        {briefReady
          ? "Your introduction is ready."
          : "Let’s start with the right questions."}
      </h1>
      <p className="wizard-main-description" id="discovery-description">
        {briefReady
          ? "Review the next step below. Your details have not been sent or saved."
          : "A short guided brief helps make your first conversation more useful."}
      </p>

      {!briefReady && (
        <div className="wizard-progress" aria-label={`Step ${step} of 3`}>
          <div
            className="wizard-progress-fill"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      )}

      {briefReady ? (
        <DiscoverySummary form={form} mailto={mailto} onDone={onClose} />
      ) : (
        <div className="wizard-body">
          <aside className="wizard-sidebar">
            <span className="wizard-step-label">STEP 0{step} / 03</span>
            <h2>{currentStep.title}</h2>
            <p>{currentStep.description}</p>
            <div className="wizard-sidebar-note">
              <span className="sidebar-note-icon">
                <Sparkles size={16} aria-hidden="true" />
              </span>
              <span>No pressure to have everything figured out.</span>
            </div>
          </aside>

          <div className="wizard-form-area">
            {step === 1 && (
              <ServiceStep
                value={form.service}
                onChange={(value) => updateForm("service", value)}
              />
            )}
            {step === 2 && (
              <OutcomeStep
                outcome={form.outcome}
                timeline={form.timeline}
                onOutcomeChange={(value) => updateForm("outcome", value)}
                onTimelineChange={(value) => updateForm("timeline", value)}
              />
            )}
            {step === 3 && (
              <ContactStep
                form={form}
                onChange={updateForm}
                onSubmit={submitBrief}
              />
            )}

            {step < 3 && (
              <div className="wizard-controls">
                {step > 1 ? (
                  <button
                    className="wizard-back"
                    type="button"
                    onClick={() => setStep((current) => current - 1)}
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                ) : (
                  <span className="wizard-back-placeholder" />
                )}
                <button
                  className="button button-primary wizard-next"
                  type="button"
                  disabled={step === 1 ? !form.service : !form.outcome}
                  onClick={() => setStep((current) => current + 1)}
                >
                  Continue <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="wizard-bottom">
        <span>
          <ShieldCheck size={14} aria-hidden="true" />
          Nothing is sent unless you choose to send the email draft.
        </span>
        {pageMode ? (
          <a href="mailto:opportunities@cynbit.in">
            Need another way? <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        ) : (
          <Link to="/discovery" onClick={onClose}>
            Open as a page <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        )}
      </div>
    </section>
  );
}

export default DiscoveryFlow;
