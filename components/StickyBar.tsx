"use client";

import { useEffect, useState } from "react";
import { availableCount, site } from "@/lib/site";

export function StickyBar() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) => setOn(!entry.isIntersecting),
      { threshold: 0.12 },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`sticky-bar${on ? " is-on" : ""}`} role="region" aria-label="Litter availability">
      <div className="sticky-inner">
        <p>
          {availableCount} puppies available from the {site.litterMonthYear}{" "}
          litter. Go-home: {site.goHomeDate}.
        </p>
        <div className="sticky-actions">
          <a href="#inquire" className="btn-ghost">
            Join Wait List
          </a>
          <a href="#litter" className="btn btn-rose">
            Reserve Your Puppy
          </a>
        </div>
      </div>
    </div>
  );
}
