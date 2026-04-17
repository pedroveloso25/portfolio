import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="opacity-0 animate-fade-in-up">
          <p className="font-mono text-accent text-sm md:text-base mb-6">
            // brasil · data-driven, outcome-focused · learning in public
          </p>
        </div>

        <h1 className="opacity-0 animate-fade-in-up animation-delay-100 font-serif text-5xl md:text-7xl font-normal mb-4 text-foreground">
          Pedro Rebouças Veloso
        </h1>

        <h2 className="opacity-0 animate-fade-in-up animation-delay-200 text-xl md:text-2xl italic text-text-secondary mb-8">
          Data Scientist · Builder · Researcher
        </h2>

        <p className="opacity-0 animate-fade-in-up animation-delay-300 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
          Turning messy data into decisions that matter. Python, ML, NLP — and always learning in public.
        </p>

        <div className="opacity-0 animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-background font-medium hover:opacity-90 transition-opacity"
          >
            view work
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:border-accent transition-colors"
          >
            get in touch
          </a>
        </div>

        <div className="opacity-0 animate-fade-in-up animation-delay-500 flex items-center justify-center gap-6">
          <a
            href="https://github.com/pedroveloso25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-rebou%C3%A7as-veloso"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="mailto:pedroreboucasveloso@gmail.com"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            <HiOutlineMail className="text-xl" />
          </a>
        </div>

        <div className="opacity-0 animate-fade-in animation-delay-500 mt-16">
          <a href="#about" className="inline-block animate-bounce">
            <svg
              className="w-6 h-6 text-text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
