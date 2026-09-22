import { curriculum } from "@/lib/site";

export function Health() {
  return (
    <section className="section" id="health">
      <div className="wrap">
        <p className="eyebrow">Health</p>
        <h2 className="display">
          Life in the house.
        </h2>
        <p className="lede" style={{ marginTop: "1.1rem" }}>
          Riley and Falcor have been to the vet. If you want the records, ask.
          We will email what we have.
        </p>

        <div className="health-grid">
          <div className="health-col">
            <div className="curric">
              {curriculum.map((item) => (
                <div className="curric-item" key={item.when}>
                  <div className="curric-when">{item.when}</div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <figure className="film-card">
            <img
              src="/images/health-week3.jpg"
              alt="A Border Collie puppy sitting in the grass"
            />
            <figcaption className="film-caption">
              The pups in the backyard.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
