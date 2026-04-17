import { FaGithub, FaTrophy } from "react-icons/fa";

const projects = [
  {
    title: "Biu — WhatsApp Employment Assistant",
    badge: "4th place — Google AI Tinkerers Hackathon",
    description:
      "Conversational assistant that helps low-literacy job seekers build a professional Harvard-style PDF resume through WhatsApp voice messages — no forms, no typing, no friction. Also finds real job listings matched to their profile.",
    technologies: ["Python", "Gemini API", "WhatsApp Cloud API", "NLP"],
    github: "https://github.com/lucasrabay/VozPro",
  },
  {
    title: "Fake News Detector",
    badge: null,
    description:
      "95%+ accuracy classifier combining classical NLP, Transformers, and deep linguistic analysis on the WELFake dataset (70,000+ labeled articles). Full pipeline from data cleaning to Sentence Embeddings.",
    technologies: ["Python", "scikit-learn", "HuggingFace", "Transformers", "NLP"],
    github: "https://github.com/pedroveloso25/fake-news-detector-",
  },
  {
    title: "Instituto Alpargatas — Educational Urgency Mapping",
    badge: null,
    description:
      "Mapped educational urgency across municipalities supported by Instituto Alpargatas using official INEP/IDEB data (approval and dropout rates), assessed the Institute's impact per region, and proposed data-driven improvement paths.",
    technologies: ["Python", "Pandas", "Data Visualization", "INEP/IDEB"],
    github: "https://github.com/pedroveloso25/projeto.alpargatas",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-normal mb-4">
            My <span className="accent-text">Work</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            A selection of projects showcasing my skills in Data Science,
            Machine Learning, and NLP.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="gradient-border p-6 bg-surface rounded-2xl hover:translate-y-[-4px] transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors"
                >
                  <FaGithub className="text-xl" />
                </a>
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
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-background rounded-md text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
