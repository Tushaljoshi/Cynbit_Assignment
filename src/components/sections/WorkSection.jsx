import { ArrowUpRight, Layers3, Network, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const projects = [
  {
    number: "01",
    category: "HEALTHCARE · AI",
    title: "AI Diagnostic Triage: Enhancing Medical Efficiency.",
    description:
      "A look at applying AI-assisted triage to improve medical workflows.",
    accent: "project-mint",
    icon: Sparkles,
  },
  {
    number: "02",
    category: "HEALTHCARE · IoT",
    title: "IoT Remote Patient Monitoring for Rural Health.",
    description:
      "Connected monitoring designed for care teams and patients beyond city limits.",
    accent: "project-peach",
    icon: Network,
  },
  {
    number: "03",
    category: "OPERATIONS · SOFTWARE",
    title: "Modernizing Legacy ERP for the Digital Era.",
    description:
      "A digital transformation story focused on bringing legacy operations forward.",
    accent: "project-blue",
    icon: Layers3,
  },
];

function WorkSection() {
  return (
    <section className="work-section section-space" id="work">
      <div className="page-width">
        <div className="work-heading">
          <SectionHeading
            eyebrow="SELECTED CASE STUDIES"
            title={
              <>
                Real challenges.
                <br />
                Thoughtful technology.
              </>
            }
            description="Explore examples from Cynbit’s work across healthcare, connected systems, and business software."
          />
          <a
            className="button button-light work-all-link"
            href="https://www.cynbit.in/case-studies"
            target="_blank"
            rel="noreferrer"
          >
            Explore all case studies <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="project-list grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                className="project-card"
                key={project.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className={`project-art ${project.accent}`}>
                  <div className="project-art-lines" />
                  <div className="project-art-mark">
                    <Icon size={32} strokeWidth={1.3} />
                  </div>
                  <span className="project-number">{project.number}</span>
                </div>
                <div className="project-copy">
                  <p className="card-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="card-description">{project.description}</p>
                  <a
                    className="text-link"
                    href="https://www.cynbit.in/case-studies"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read the case study <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
