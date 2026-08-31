export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-normal mb-8">
          Contact
        </h2>

        <div className="space-y-3 text-text-secondary">
          <p>
            <a
              href="mailto:pedroreboucasveloso@gmail.com"
              className="hover:text-accent transition-colors"
            >
              pedroreboucasveloso@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://github.com/pedroveloso25"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              github.com/pedroveloso25
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/pedro-rebou%C3%A7as-veloso"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              linkedin.com/in/pedro-rebouças-veloso
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
