import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  Cloud,
  Code2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const services = [
  {
    title: "AI & automation",
    category: "INTELLIGENCE",
    description:
      "Autonomous agents and cognitive automation designed around real business workflows.",
    icon: Bot,
    tone: "mint",
  },
  {
    title: "Software development",
    category: "DIGITAL PRODUCTS",
    description:
      "Custom web apps, mobile experiences, SaaS platforms, and the systems behind them.",
    icon: Code2,
    tone: "peach",
  },
  {
    title: "Cloud & infrastructure",
    category: "FOUNDATIONS",
    description:
      "Reliable cloud architecture and connected systems built for the next stage of growth.",
    icon: Cloud,
    tone: "blue",
  },
  {
    title: "Digital growth",
    category: "VISIBILITY",
    description:
      "Technical SEO and data-led marketing that help the right people find your product.",
    icon: Sparkles,
    tone: "lavender",
  },
];

function ServicesSection({ onStartDiscovery }) {
  return (
    <section className="service-section section-space" id="services">
      <div className="page-width">
        <div className="services-intro">
          <SectionHeading
            eyebrow="WHAT WE ARCHITECT"
            title={
              <>
                Ambition, meet
                <br className="desktop-break" /> execution.
              </>
            }
            description="The right technology should make the next step feel possible. Explore the capabilities Cynbit brings together to help you get there."
          />
          <p className="services-aside">
            From first blueprint
            <br />
            to systems at scale <ArrowDownRight size={18} />
          </p>
        </div>
        <div className="service-grid grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                className="service-card"
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <div className={`service-icon icon-${service.tone}`}>
                  <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <p className="card-category">{service.category}</p>
                <h3>{service.title}</h3>
                <p className="card-description">{service.description}</p>
                <button
                  className="text-link"
                  type="button"
                  onClick={() => onStartDiscovery(service.title)}
                >
                  Explore this service <ArrowUpRight size={15} />
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
