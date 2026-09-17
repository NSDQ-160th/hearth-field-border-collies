import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero-stage">
        <div className="hero-mosaic">
          <figure className="tile tile-dam">
            <img
              src="/images/hero-dam-closeup.jpg"
              alt="Close-up of Briar, a black-and-white Border Collie, looking into farm light"
            />
            <span className="tile-shade" />
          </figure>
          <figure className="tile tile-pups">
            <img
              src="/images/hero-puppies-straw.jpg"
              alt="A pile of Border Collie puppies sleeping in straw"
            />
            <span className="tile-shade" />
          </figure>
          <figure className="tile tile-field">
            <img
              src="/images/hero-field.jpg"
              alt="An adult Border Collie standing in a green working field"
            />
            <span className="tile-shade" />
            <div className="hero-headline">
              <h1>
                Raised by Hand.
                <span className="accent">Bred for the Work.</span>
              </h1>
            </div>
          </figure>
          <figure className="tile tile-hands">
            <img
              src="/images/hero-hands.jpg"
              alt="Human hands holding a sleepy Border Collie puppy"
            />
            <span className="tile-shade" />
          </figure>
          <figure className="tile tile-herd">
            <img
              src="/images/hero-herding.jpg"
              alt="A Border Collie working ducks across muddy pasture, paw prints in the earth"
            />
            <span className="tile-shade" />
          </figure>
          <figure className="tile tile-certs">
            <img
              src="/images/hero-certificates.jpg"
              alt="Paper health certificates on a wooden desk with a coffee ring"
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
          Every puppy whelped in the house, handled daily from first breath,
          health-tested before they ever meet you. These dogs need a job —
          training, movement, and a brain to work — not a sofa.
        </p>
        <div className="hero-actions">
          <a href="#litter" className="btn btn-rose">
            Reserve Your Puppy
          </a>
          <a href="#parents" className="btn btn-outline">
            Meet the Parents
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
