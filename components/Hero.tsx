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
              src="/images/story-2020.jpg"
              alt="The litter sleeping together on a rug in the house"
            />
            <span className="tile-shade" />
          </figure>
          <figure className="tile tile-field">
            <img
              src="/images/story-2012.jpg"
              alt="Riley standing in the grass at home"
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
              src="/images/story-2016.jpg"
              alt="Falcor, a black and white Border Collie, in the grass"
            />
            <span className="tile-shade" />
          </figure>
          <figure className="tile tile-herd">
            <img
              src="/images/story-2018.jpg"
              alt="Riley and Falcor together in the yard"
            />
            <span className="tile-shade" />
          </figure>
          <figure className="tile tile-certs">
            <img
              src="/images/parent-dam.jpg"
              alt="Riley with the newborn litter"
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
