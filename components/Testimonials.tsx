import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="wrap">
        <p className="eyebrow">People we know</p>
        <h2 className="display">They have been to the house.</h2>
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
          We can put you in touch with people who have met Riley and Falcor
          before you decide.
        </p>
      </div>
    </section>
  );
}
