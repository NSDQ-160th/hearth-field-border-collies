import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: `Privacy · ${site.name}` };

export default function PrivacyPage() {
  return (
    <main className="page-legal wrap">
      <p className="eyebrow">
        <a href="/">← {site.wordmark}</a>
      </p>
      <h1>Privacy</h1>
      <p>
        What you send us — name, email, phone, and what you tell us about your
        home — is only so we can write back about a puppy. We do not sell it.
        We do not run ads. This page does not take payment or store card
        numbers.
      </p>
      <p>
        Questions: {site.email}.
      </p>
    </main>
  );
}
