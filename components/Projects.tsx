import { FaGithub, FaTrophy, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Biu — WhatsApp Employment Assistant",
    badge: "4th place — Google AI Tinkerers Hackathon",
    description:
      "Conversational assistant that builds PDF resumes from WhatsApp voice messages for people with low literacy — no forms, no typing. Also matches job listings to their profile. Team project; my role was AI engineering and research. Built with Python, Gemini API, and WhatsApp Cloud API.",
    github: "https://github.com/lucasrabay/VozPro",
  },
  {
    title: "Herança Tática",
    badge: null,
    description:
      "Web app comparing the tactical DNA of national teams across World Cups from 1930 to 2022. Historical football data is fragmented — each era has different detail levels. Similarity is calculated only over features present in both sources, with explicit confidence levels: high (6+ features, both StatsBomb), medium (3–5, mixed sources), low (1–2, basic historical data). Up to 12 tactical metrics when data allows. Built with React, Vite, Tailwind, Python, and FastAPI.",
    github: "https://github.com/pedroveloso25/heranca-tatica",
    live: "https://copa-heranca-tatica.vercel.app",
  },
  {
    title: "Fake News Detector",
    badge: null,
    description:
      "Classifier achieving 0.97 F1-score on both REAL and FAKE classes over the WELFake dataset (72,000+ labeled articles). Combines classical NLP, Transformers, and linguistic analysis. Full pipeline from data cleaning to sentence embeddings, built with Python, scikit-learn, and HuggingFace.",
    github: "https://github.com/pedroveloso25/fake-news-detector-",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-normal mb-8">
          Work
        </h2>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="pb-8 border-b border-border last:border-b-0"
            >
              <div className="flex items-center gap-3 mb-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors"
                >
                  <FaGithub className="text-xl" />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                  </a>
                )}
              </div>

              {project.badge && (
                <div className="flex items-center gap-2 mb-3">
                  <FaTrophy className="text-accent text-sm" />
                  <span className="text-xs font-mono text-accent">
                    {project.badge}
                  </span>
                </div>
              )}

              <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
