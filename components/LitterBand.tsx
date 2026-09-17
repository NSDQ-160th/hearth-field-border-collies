import { site } from "@/lib/site";

export function LitterBand() {
  return (
    <section className="band" aria-labelledby="litter-band-heading">
      <div className="wrap band-inner">
        <div>
          <p className="eyebrow">This litter</p>
          <h2 className="display" id="litter-band-heading">
            Six puppies. Born in our house.
          </h2>
          <p>
            Six Border Collie puppies born {site.birthDate}. Mom is{" "}
            {site.dam.name}. Dad is {site.sire.name}. Photos and a few notes on
            each one are below. Ready to go home {site.goHomeDate}.
          </p>
        </div>
        <a href="#litter" className="text-link">
          See each puppy
        </a>
      </div>
    </section>
  );
}
