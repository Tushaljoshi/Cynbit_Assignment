import { MapPin, Network } from "lucide-react";

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="page-width about-inner">
        <div className="about-icon" aria-hidden="true">
          <Network size={27} strokeWidth={1.5} />
        </div>
        <div className="about-copy">
          <p className="eyebrow">THE CYNBIT PERSPECTIVE</p>
          <h2>
            The speed of a startup.
            <br />
            The rigor of an enterprise.
          </h2>
          <p>
            Cynbit Technologies brings software development, AI automation,
            and digital operations together—building from Jaipur, Rajasthan,
            for ambitious teams.
          </p>
        </div>
        <div className="about-location">
          <MapPin size={17} aria-hidden="true" />
          <span>
            JAIPUR, RAJASTHAN
            <small>RAJASTHAN · INDIA</small>
          </span>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
