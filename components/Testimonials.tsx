import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="wrap">
        <p className="eyebrow">Forever Homes</p>
        <h2 className="display">The families write back.</h2>
        <div className="quote-grid">
          {testimonials.map((t) => (
            <article className="quote-card" key={t.who}>
              <div className="quote-mark" aria-hidden="true">
                “
              </div>
              <blockquote>{t.quote}</blockquote>
              <cite>
                <strong>
                  {t.who}, {t.where}
                </strong>
                {t.note}
              </cite>
            </article>
          ))}
        </div>
        <p className="quiet">
          These are families we can put you in touch with before you place a
          hold.
        </p>
      </div>
    </section>
  );
}
