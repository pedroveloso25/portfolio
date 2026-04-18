const skills = [
  { category: "Languages", items: ["Python", "R", "SQL"] },
  { category: "Machine Learning", items: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost"] },
  { category: "Data", items: ["Pandas", "NumPy"] },
  { category: "Visualization", items: ["Power BI", "Matplotlib", "Plotly"] },
  { category: "Databases", items: ["PostgreSQL", "SQLite", "Neon"] },
  { category: "Tools", items: ["Git", "Jupyter"] },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-normal mb-4">
            About <span className="accent-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-text-secondary leading-relaxed">
              I'm a Data Scientist focused on building things that matter. My work lives at the intersection of machine learning, NLP, and real-world impact — from helping low-literacy job seekers build resumes via WhatsApp voice messages to detecting fake news with 95%+ accuracy.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              I'm also part of TAIL (Technology and Artificial Intelligence League) — the largest academic AI league in Northern/Northeastern Brazil — where I develop projects and research in AI.
            </p>

            <div className="mt-6 p-4 border-l-2 border-accent/50 bg-surface/50 rounded-r-lg">
              <p className="text-sm text-text-secondary leading-relaxed flex gap-3">
                <span className="text-accent shrink-0">🎓</span>
                <span>
                  Currently studying Data Science for Business at UFPB — a program that bridges technical depth with communication, storytelling, and business thinking. I don't just build models; I translate them into decisions.
                </span>
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <p className="text-accent text-sm font-mono mb-2">
                  {skillGroup.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-surface border border-border rounded-full hover:border-accent transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
