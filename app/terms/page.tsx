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
        Submitting an inquiry is a request to be considered for a puppy. It is
        not a purchase, a hold, or a contract. A hold is arranged only after we
        approve the home, off this website. Puppy availability can change.
        Placement decisions stay with the kennel.
      </p>
      <p>
        The written contract you receive before pickup is the governing
        agreement, including the health guarantee.
      </p>
    </main>
  );
}
