import { site } from "@/lib/site";

export function Parents() {
  const dogs = [
    { role: "Dam", dog: site.dam },
    { role: "Sire", dog: site.sire },
  ];

  return (
    <section className="section" id="parents">
      <div className="wrap">
        <p className="eyebrow">The Parents</p>
        <h2 className="display">The dogs behind this litter.</h2>
        <p className="lede" style={{ marginTop: "0.9rem" }}>
          These are the two Border Collies who produced this litter. Photos
          first. Paperwork on request.
        </p>

        <div className="parents-grid">
          {dogs.map(({ role, dog }) => (
            <article className="parent-card" key={role}>
              <div className="parent-photo" data-slot={dog.slot}>
                <img
                  src={dog.image}
                  alt={`${dog.name}, ${role.toLowerCase()} of the current litter — ${dog.color}`}
                />
              </div>
              <div className="parent-body">
                <div className="parent-kicker">{role}</div>
                <h3>{dog.name}</h3>
                <p className="parent-color">{dog.color}</p>
                <p>{dog.bio}</p>
                <p className="parent-meta">
                  <strong>Health.</strong> {dog.health}
                </p>
                <p className="parent-meta">
                  <strong>What {role === "Dam" ? "she" : "he"} passes on.</strong>{" "}
                  {dog.passes}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="parents-note">
          Ask for the raw PDFs — we send them the same day, before any hold is
          placed.
        </p>
      </div>
    </section>
  );
}
