import { storyChapters } from "@/lib/site";

export function Story() {
  return (
    <section className="section" id="story">
      <div className="wrap">
        <div className="story-head">
          <p className="eyebrow">The Story</p>
          <h2 className="display">
            Twelve years of learning
            <br />
            <em>what a dog deserves.</em>
          </h2>
          <hr className="hairline" />
        </div>

        <div className="timeline">
          {storyChapters.map((chapter) => (
            <article className="chapter" key={chapter.year}>
              <span className="chapter-year">{chapter.year}</span>
              <div className="chapter-media">
                <img src={chapter.image} alt={chapter.alt} />
              </div>
              <div className="chapter-copy">
                <h3>
                  {chapter.year} — {chapter.title}
                </h3>
                <p>{chapter.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
