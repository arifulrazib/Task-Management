"use client";

import { useState, type FormEvent } from "react";
import { profile, socials } from "@/data/profile";
import { MailIcon, PhoneIcon, SocialIcon } from "./Icons";

type Status = "idle" | "submitting" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialForm: FormState = { name: "", email: "", message: "" };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const update = (field: keyof FormState) => (value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in every field.");
      setStatus("error");
      return;
    }
    if (!emailPattern.test(form.email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(initialForm);
    } catch {
      setError("Something went wrong. Please email me directly.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="grid gap-10 rounded-3xl border border-base-600/60 bg-base-800/60 p-8 sm:p-12 lg:grid-cols-2">
        {/* Left: intro + contact details */}
        <div>
          <p className="text-3xl font-bold text-accent">Let&apos;s</p>
          <h2 className="text-3xl font-bold text-white">Work together</h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Have a product to build or a codebase to rescue? Send a message and I&apos;ll get back
            to you within 24 hours.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-accent"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-base-700 text-accent">
                <MailIcon className="h-5 w-5" />
              </span>
              {profile.email}
            </a>
            <div className="flex items-center gap-3 text-sm text-muted">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-base-700 text-accent">
                <PhoneIcon className="h-5 w-5" />
              </span>
              {profile.location}
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full bg-base-700 text-muted transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-base-900"
              >
                <SocialIcon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="rounded-2xl bg-base-900/60 p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-white">Get a free quote now</h3>

          {status === "success" ? (
            <div
              role="status"
              className="mt-6 rounded-xl border border-accent/40 bg-accent/10 p-5 text-sm text-accent"
            >
              Thanks — your message is on its way. I&apos;ll reply soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="sr-only">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => update("name")(e.target.value)}
                  className="w-full rounded-xl border border-base-600 bg-base-800 px-4 py-3 text-sm text-white placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => update("email")(e.target.value)}
                  className="w-full rounded-xl border border-base-600 bg-base-800 px-4 py-3 text-sm text-white placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={(e) => update("message")(e.target.value)}
                  className="w-full resize-none rounded-xl border border-base-600 bg-base-800 px-4 py-3 text-sm text-white placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              {status === "error" && error && (
                <p role="alert" className="text-sm text-red-400">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3 text-sm font-semibold text-base-900 transition-colors hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
