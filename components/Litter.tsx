"use client";

import { useMemo, useState } from "react";
import { puppies, site } from "@/lib/site";
import { useInquiry } from "@/lib/inquiry";

export function Litter() {
  const [filter, setFilter] = useState<"all" | "available">("all");
  const { requestPuppy } = useInquiry();

  const shown = useMemo(
    () =>
      filter === "available"
        ? puppies.filter((p) => p.status === "available")
        : puppies,
    [filter],
  );

  return (
    <section className="section" id="litter">
      <div className="wrap">
        <div className="litter-head">
          <div>
            <p className="eyebrow">{site.litterMonthYear} Litter</p>
            <h2 className="display">Meet the pups.</h2>
            <p className="lede" style={{ marginTop: "0.85rem" }}>
              Six puppies born {site.birthDate}. Mom: {site.dam.name}. Dad:{" "}
              {site.sire.name}. Ready to go home {site.goHomeDate}.
            </p>
          </div>
          <div className="filters" role="group" aria-label="Filter puppies">
            <button
              type="button"
              className="filter"
              aria-pressed={filter === "all"}
              onClick={() => setFilter("all")}
            >
              All Puppies
            </button>
            <button
              type="button"
              className="filter"
              aria-pressed={filter === "available"}
              onClick={() => setFilter("available")}
            >
              Available
            </button>
          </div>
        </div>

        <div className="puppy-grid">
          {shown.map((pup) => {
            const available = pup.status === "available";
            return (
              <article className="puppy-card" key={pup.id}>
                <div className="puppy-photo" data-slot={pup.slot}>
                  <img src={pup.image} alt={pup.alt} />
                  <span className={available ? "badge badge-avail" : "badge badge-held"}>
                    {available ? "Available" : "Reserved"}
                  </span>
                  <span className="badge badge-sex">
                    {pup.sex === "female" ? "Female" : "Male"}
                  </span>
                </div>
                <div className="puppy-body">
                  <h3>{pup.name}</h3>
                  <p className="puppy-color">{pup.color}</p>
                  <p>
                    <strong>Temperament.</strong> {pup.temperament}
                  </p>
                  <p>
                    <strong>Ideal home.</strong> {pup.idealHome}
                  </p>
                  {available ? (
                    <button
                      type="button"
                      className="btn btn-rose"
                      onClick={() => requestPuppy(pup.id)}
                    >
                      Ask about {pup.name}
                    </button>
                  ) : (
                    <button type="button" className="btn" disabled>
                      Spoken for
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
