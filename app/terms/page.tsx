import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: `Terms · ${site.name}` };

export default function TermsPage() {
  return (
    <main className="page-legal wrap">
      <p className="eyebrow">
        <a href="/">← {site.wordmark}</a>
      </p>
      <h1>Terms</h1>
      <p>
        Sending a note is just that — a note. It is not a purchase or a
        contract. We talk first, in person or by phone. Puppies can be spoken
        for. We decide together whether a home is a fit.
      </p>
      <p>
        The written contract you receive before pickup is the governing
        agreement, including the health guarantee.
      </p>
    </main>
  );
}
