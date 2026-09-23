"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  householdTypes,
  NO_PREFERENCE,
  puppies,
} from "@/lib/site";
import { useInquiry } from "@/lib/inquiry";

type Errors = {
  name?: string;
  email?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Inquire() {
  const { preferredPuppy, setPreferredPuppy } = useInquiry();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [household, setHousehold] = useState("");
  const [experience, setExperience] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedFor, setSubmittedFor] = useState("");
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [company, setCompany] = useState("");

  const puppyLabel = useMemo(() => {
    if (!submittedFor || submittedFor === NO_PREFERENCE) {
      return "a puppy";
    }
    const match = puppies.find((p) => p.id === submittedFor);
    return match?.name ?? submittedFor;
  }, [submittedFor]);

  function validate() {
    const next: Errors = {};
    if (!name.trim()) next.name = "Please enter your full name.";
    if (!email.trim()) next.email = "Please enter an email address.";
    else if (!EMAIL_RE.test(email.trim())) {
      next.email = "Enter a valid email, like name@example.com.";
    }
    return next;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    setSendError("");
    if (Object.keys(next).length > 0) {
      setSubmitted(false);
      const first = document.querySelector<HTMLElement>(
        ".field.error input, .field.error select",
      );
      first?.focus();
      return;
    }

    setSending(true);
    try {
      const response = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          puppy: preferredPuppy,
          household,
          experience,
          message,
          company,
        }),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) {
        setSubmitted(false);
        setSendError(
          result.error || "We could not send that note. Email us directly.",
        );
        return;
      }
      setSubmittedFor(preferredPuppy || NO_PREFERENCE);
      setSubmitted(true);
    } catch {
      setSubmitted(false);
      setSendError("We could not send that note. Email us directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section inquire" id="inquire">
      <div className="wrap">
        <p className="eyebrow">Ask about a puppy</p>
        <h2 className="display">Tell us about your home.</h2>
        <p className="lede" style={{ marginTop: "0.9rem" }}>
          We would rather talk than take a card number. Fill this in and we
          will write back. This is not a checkout.
        </p>

        <form className="form" onSubmit={onSubmit} noValidate>
          <div className="hp" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className={`field${errors.name ? " error" : ""}`}>
            <label htmlFor="full-name">
              Full name <span className="req">*</span>
            </label>
            <input
              id="full-name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "err-name" : undefined}
            />
            {errors.name ? (
              <span className="field-error" id="err-name">
                {errors.name}
              </span>
            ) : null}
          </div>

          <div className={`field${errors.email ? " error" : ""}`}>
            <label htmlFor="email">
              Email <span className="req">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "err-email" : undefined}
            />
            {errors.email ? (
              <span className="field-error" id="err-email">
                {errors.email}
              </span>
            ) : null}
          </div>

          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="preferred-puppy">Which puppy</label>
            <select
              id="preferred-puppy"
              name="puppy"
              value={preferredPuppy}
              onChange={(e) => setPreferredPuppy(e.target.value)}
            >
              <option value="">Select a puppy</option>
              {puppies.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
              <option value={NO_PREFERENCE}>No preference / just saying hello</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="household">Household type</label>
            <select
              id="household"
              name="household"
              value={household}
              onChange={(e) => setHousehold(e.target.value)}
            >
              <option value="">Select household type</option>
              {householdTypes.map((h) => (
                <option key={h.value} value={h.value}>
                  {h.label}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="experience">
              Have you had a Border Collie or a busy dog before?
            </label>
            <input
              id="experience"
              name="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div>
            <button type="submit" className="btn btn-rose" disabled={sending}>
              {sending ? "Sending…" : "Send a note"}
            </button>
            <p className="form-note">
              This page does not take payment. We will talk first.
            </p>
            {sendError ? (
              <p className="field-error" role="alert">
                {sendError}
              </p>
            ) : null}
          </div>
        </form>

        {submitted ? (
          <p className="success" role="status" aria-live="polite">
            We got your note about {puppyLabel}. We’ll write back soon.
          </p>
        ) : null}
      </div>
    </section>
  );
}
