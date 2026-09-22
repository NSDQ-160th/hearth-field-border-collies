import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero-stage">
        <div className="hero-mosaic">
          <figure className="tile tile-dam">
            <img
              src="/images/Hero-Dam.jpeg"
              alt="Riley looking up from the kitchen floor"
            />
            <span className="tile-shade" />
          </figure>
          <figure className="tile tile-pups">
            <img
              src="/images/story-2020.jpeg"
              alt="The litter sleeping together in the house"
            />
            <span className="tile-shade" />
          </figure>
          <figure className="tile tile-field">
            <img
              src="/images/story-2012.jpeg"
              alt="Riley and Falcor in the yard by the fence"
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
              src="/images/story-2016.jpeg"
              alt="Falcor at home"
            />
            <span className="tile-shade" />
          </figure>
          <figure className="tile tile-herd">
            <img
              src="/images/story-2018.jpeg"
              alt="Riley and Falcor by the pool"
            />
            <span className="tile-shade" />
          </figure>
          <figure className="tile tile-certs">
            <img
              src="/images/hero-field.jpeg"
              alt="Falcor lying on the kitchen floor"
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
