import { faqs } from "@/lib/site";

export function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <p className="eyebrow">Before You Write</p>
        <h2 className="display">Straight answers.</h2>
        <div className="faq-list">
          {faqs.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
