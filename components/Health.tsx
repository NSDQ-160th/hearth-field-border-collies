import { clearances, curriculum } from "@/lib/site";

export function Health() {
  return (
    <section className="section" id="health">
      <div className="wrap">
        <p className="eyebrow">Health &amp; Standards</p>
        <h2 className="display">
          We test everything.
          <br />
          <em>We hide nothing.</em>
        </h2>
        <p className="lede" style={{ marginTop: "1.1rem" }}>
          Every result is available to prospective buyers before a hold is
          placed. Ask for the raw PDFs — we send them the same day.
        </p>

        <div className="health-grid">
          <div className="health-col">
            <h3>Genetic &amp; Structural Clearances</h3>
            {clearances.map((row) => (
              <div className="clearance" key={row.label}>
                <div>
                  <span className="clearance-label">{row.label}</span>
                  <span className="clearance-note">{row.note}</span>
                </div>
                <span className="pill">{row.pill}</span>
              </div>
            ))}
            <p className="note-box">
              Original certificates on file. OFA numbers, CAER dates, and DNA
              lab reports available on request. Do not invent certificate
              numbers anywhere on this site.
            </p>
          </div>

          <div className="health-col">
            <h3>Puppy Curriculum Milestones</h3>
            <div className="curric">
              {curriculum.map((item) => (
                <div className="curric-item" key={item.when}>
                  <div className="curric-when">{item.when}</div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
            <figure className="film-card">
              <img
                src="/images/health-week3.jpg"
                alt="A young Border Collie standing in a hay field at the farm"
              />
              <span className="play" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#F5F0E3">
                  <path d="M8 5.5v13l12-6.5-12-6.5z" />
                </svg>
              </span>
              <figcaption className="film-caption">
                Week 3 noise protocol · filmed at the farm.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
