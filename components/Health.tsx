import { clearances, curriculum } from "@/lib/site";

export function Health() {
  return (
    <section className="section" id="health">
      <div className="wrap">
        <p className="eyebrow">Health</p>
        <h2 className="display">
          We will show you
          <br />
          <em>the paperwork.</em>
        </h2>
        <p className="lede" style={{ marginTop: "1.1rem" }}>
          Riley and Falcor have been to the vet. If you want the records, ask.
          We will email what we have. This page does not invent certificate
          numbers.
        </p>

        <div className="health-grid">
          <div className="health-col">
            <h3>What we can share</h3>
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
              Original papers stay with us. If you are serious about a puppy, we
              will send copies. We do not post registration numbers on the
              internet.
            </p>
          </div>

          <div className="health-col">
            <h3>Life in the house</h3>
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
                alt="A young Border Collie in the backyard grass"
              />
              <span className="play" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#F5F0E3">
                  <path d="M8 5.5v13l12-6.5-12-6.5z" />
                </svg>
              </span>
              <figcaption className="film-caption">
                The pups in the backyard.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
