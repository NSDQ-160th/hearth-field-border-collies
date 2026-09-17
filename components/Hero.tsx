import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero-stage">
        <div className="hero-mosaic">
          <figure className="tile tile-dam">
            <img
              src="/images/hero-dam-closeup.jpg"
              alt="Close-up of Riley, a red merle Border Collie"
            />
            <span className="tile-shade" />
          </figure>
          <figure className="tile tile-pups">
            <img
              src="/images/hero-puppies-straw.jpg"
              alt="A pile of Border Collie puppies sleeping together in the house"
            />
            <span className="tile-shade" />
          </figure>
          <figure className="tile tile-field">
            <img
              src="/images/hero-field.jpg"
              alt="Falcor, a black and white Border Collie, standing in the yard"
            />
            <span className="tile-shade" />
            <div className="hero-headline">
              <h1>
                Raised at home.
                <span className="accent">With our kids.</span>
              </h1>
            </div>
          </figure>
          <figure className="tile tile-hands">
            <img
              src="/images/hero-hands.jpg"
              alt="Hands holding a sleepy Border Collie puppy"
            />
            <span className="tile-shade" />
          </figure>
          <figure className="tile tile-herd">
            <img
              src="/images/hero-herding.jpg"
              alt="Falcor running across the backyard grass"
            />
            <span className="tile-shade" />
          </figure>
          <figure className="tile tile-certs">
            <img
              src="/images/hero-certificates.jpg"
              alt="Vet papers on the kitchen table"
            />
            <span className="tile-shade" />
          </figure>
        </div>
        <div className="hero-badge">
          {site.location} · Litter Available Now
        </div>
      </div>

      <div className="hero-copy wrap">
        <p>
          These six puppies were born in our house in Hagerstown. We hold them
          every day. Riley is their mom. Falcor is their dad. They will need a
          family who wants to walk, play, and train — not a dog who lives on the
          couch.
        </p>
        <div className="hero-actions">
          <a href="#litter" className="btn btn-rose">
            See the puppies
          </a>
          <a href="#parents" className="btn btn-outline">
            Meet Riley &amp; Falcor
          </a>
        </div>
        <div className="scroll-cue" aria-hidden="true">
          Scroll
          <span className="line" />
        </div>
      </div>
    </section>
  );
}
