import {
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaChartBar,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPostgresql,
  SiSqlite,
  SiJupyter,
  SiPlotly,
  SiR,
} from "react-icons/si";

const technologies = [
  { name: "Python", icon: FaPython },
  { name: "R", icon: SiR },
  { name: "SQL", icon: FaDatabase },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "PyTorch", icon: SiPytorch },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "SQLite", icon: SiSqlite },
  { name: "Power BI", icon: FaChartBar },
  { name: "Plotly", icon: SiPlotly },
  { name: "Git", icon: FaGitAlt },
  { name: "Jupyter", icon: SiJupyter },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-normal mb-4">
            Tech <span className="accent-text">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Tools and technologies I use daily to build robust and scalable data solutions.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center p-4 rounded-xl bg-surface border border-border hover:border-accent/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <tech.icon
                className="text-4xl mb-2 text-text-secondary group-hover:text-accent transition-colors"
              />
              <span className="text-xs text-text-secondary group-hover:text-foreground transition-colors text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
