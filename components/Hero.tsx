export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-normal mb-2 text-foreground">
          Pedro Rebouças Veloso
        </h1>
        <p className="text-lg md:text-xl text-text-secondary mb-8">
          Data Scientist
        </p>

        <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 text-sm md:text-base">
          <dt className="text-text-secondary">Location</dt>
          <dd className="text-foreground">João Pessoa, Brazil</dd>

          <dt className="text-text-secondary">Currently</dt>
          <dd className="text-foreground">Data intern @ TJPB · Researcher @ TAIL</dd>

          <dt className="text-text-secondary">Studying</dt>
          <dd className="text-foreground">Data Science — UFPB</dd>

          <dt className="text-text-secondary">Organizer</dt>
          <dd className="text-foreground">Careers in Data</dd>
        </dl>

        <div className="mt-8 flex gap-4">
          <a
            href="mailto:pedroreboucasveloso@gmail.com"
            className="text-text-secondary hover:text-accent transition-colors text-sm"
          >
            pedroreboucasveloso@gmail.com
          </a>
          <a
            href="https://github.com/pedroveloso25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors text-sm"
          >
            github.com/pedroveloso25
          </a>
        </div>
      </div>
    </section>
  );
}
