import { site } from "@/lib/site";
import { Mark } from "./Mark";

export function Footer() {
  const tel = (n: string) => n.replace(/[^\d+]/g, "");

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="brand" style={{ marginBottom: "0.6rem" }}>
          <Mark size={36} />
          <p className="footer-name">{site.name}</p>
        </div>
        <p>{site.location}</p>
        <p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <p>
          <a href={`tel:${tel(site.phone)}`}>{site.phone}</a>
          {" · "}
          <a href={`tel:${tel(site.phone2)}`}>{site.phone2}</a>
        </p>
        <p className="footer-tag">{site.tagline}</p>
        <p className="form-note" style={{ marginTop: "1rem" }}>
          Write us first. This website does not charge cards.
        </p>
        <div className="legal">
          <span>Copyright {site.year}</span>
          <span>
            <a href="/privacy">Privacy</a>
            {" · "}
            <a href="/terms">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
