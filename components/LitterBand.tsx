import { site } from "@/lib/site";

export function LitterBand() {
  return (
    <section className="band" aria-labelledby="litter-band-heading">
      <div className="wrap band-inner">
        <div>
          <p className="eyebrow">The Current Litter</p>
          <h2 className="display" id="litter-band-heading">
            Six puppies. Ready to be matched.
          </h2>
          <p>
            Six Border Collie puppies born {site.birthDate}. Dam is{" "}
            {site.dam.name}, cleared OFA hips/elbows and CAER, genetic panel on
            file. Sire is {site.sire.name}, same panel. Individual profiles
            below — markings, temperament notes, and which ones are still
            available. Go-home date: {site.goHomeDate}.
          </p>
        </div>
        <a href="#litter" className="text-link">
          See individual puppy profiles
        </a>
      </div>
    </section>
  );
}
