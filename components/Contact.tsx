"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// TODO: Replace with your Formspree form ID from https://formspree.io
const FORMSPREE_ID = "xpqkdjpw";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (status === "success" || status === "error") {
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-normal mb-4">
            Get in <span className="accent-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Interested in collaborating or have a question? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Let's talk</h3>
              <p className="text-text-secondary leading-relaxed">
                I'm always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision. Feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:pedroreboucasveloso@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-surface border border-border hover:border-accent transition-colors group"
              >
                <div className="p-3 rounded-lg bg-accent/10">
                  <FaEnvelope className="text-xl text-accent" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Email</p>
                  <p className="font-medium group-hover:text-accent transition-colors">
                    pedroreboucasveloso@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-surface border border-border">
                <div className="p-3 rounded-lg bg-accent/10">
                  <FaMapMarkerAlt className="text-xl text-accent" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Location</p>
                  <p className="font-medium">Brazil</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/pedroveloso25"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-surface border border-border hover:border-accent hover:text-accent transition-all"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/pedro-rebou%C3%A7as-veloso"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-surface border border-border hover:border-accent hover:text-accent transition-all"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg transition-all duration-200"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg transition-all duration-200"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg resize-none transition-all duration-200"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 px-6 rounded-lg bg-accent text-background font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-accent text-center font-medium">
                Message sent!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 text-center font-medium">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
