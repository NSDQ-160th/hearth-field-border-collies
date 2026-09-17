"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  householdTypes,
  NO_PREFERENCE,
  puppies,
  site,
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

  const puppyLabel = useMemo(() => {
    if (!submittedFor || submittedFor === NO_PREFERENCE) {
      return "no preference / a future litter";
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

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setSubmitted(false);
      const first = document.querySelector<HTMLElement>(".field.error input, .field.error select");
      first?.focus();
      return;
    }
    setSubmittedFor(preferredPuppy || NO_PREFERENCE);
    setSubmitted(true);
  }

  return (
    <section className="section inquire" id="inquire">
      <div className="wrap">
        <p className="eyebrow">Reserve a Puppy</p>
        <h2 className="display">Tell us about the home.</h2>
        <p className="lede" style={{ marginTop: "0.9rem" }}>
          We match pups to people, not the other way around. Fill this in and we
          will reply within one business day. A hold is not a checkout.
        </p>

        <form className="form" onSubmit={onSubmit} noValidate>
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
            <label htmlFor="preferred-puppy">Preferred puppy</label>
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
                  {p.status === "reserved" ? " (reserved)" : ""}
                </option>
              ))}
              <option value={NO_PREFERENCE}>No preference / future litter</option>
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
              Experience with herding or high-drive dogs
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
            <button type="submit" className="btn btn-rose">
              Request This Puppy
            </button>
            <p className="form-note">
              We do not take payment on this page. Holds are arranged after we
              approve the home.
            </p>
          </div>
        </form>

        {submitted ? (
          <p className="success" role="status" aria-live="polite">
            We received your request for {puppyLabel}. We’ll reply within one
            business day.
          </p>
        ) : null}
      </div>
    </section>
  );
}
