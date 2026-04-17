import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-mono text-foreground">pedro.rv</span>
          <span className="text-text-secondary text-sm">
            &copy; {currentYear} All rights reserved
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/pedroveloso25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://linkedin.com/in/pedroveloso25"
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
            <FaEnvelope className="text-xl" />
          </a>
        </div>

        <p className="text-text-secondary text-sm">
          Built with <span className="text-accent">Next.js</span> & <span className="text-accent">Tailwind</span>
        </p>
      </div>
    </footer>
  );
}
