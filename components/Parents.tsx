import { site } from "@/lib/site";

export function Parents() {
  const dogs = [site.dam, site.sire];

  return (
    <section className="section" id="parents">
      <div className="wrap">
        <p className="eyebrow">The Parents</p>
        <h2 className="display">Mom and Dad</h2>
        <p className="lede" style={{ marginTop: "0.9rem" }}>
          Riley and Falcor live with us. These are the two dogs who made this
          litter.
        </p>

        <div className="parents-grid">
          {dogs.map((dog) => (
            <article className="parent-card" key={dog.name}>
              <div className="parent-photo" data-slot={dog.slot}>
                <img src={dog.image} alt={dog.alt} />
              </div>
              <div className="parent-body">
                <div className="parent-kicker">{dog.role}</div>
                <h3>{dog.name}</h3>
                <p className="parent-color">{dog.color}</p>
                <p className="parent-meta">
                  <strong>{dog.joined}.</strong>
                </p>
                <p>
                  <strong>{dog.about}.</strong> {dog.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="parents-note">
          Vet records are here if you want to see them. Ask and we will send
          what we have.
        </p>
      </div>
    </section>
  );
}
