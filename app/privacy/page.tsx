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
        Inquiry details you send through this website — name, email, phone, and
        what you tell us about your home — are used only to match a puppy and
        reply to you. We do not sell this information. We do not run ads. This
        page does not process payments or store card numbers.
      </p>
      <p>
        Questions: {site.email}.
      </p>
    </main>
  );
}
