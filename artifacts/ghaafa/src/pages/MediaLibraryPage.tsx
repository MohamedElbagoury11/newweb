import PageFrame from "@/components/PageFrame";
import { localizedPath, useLanguage } from "@/lib/language";
import { mediaItems } from "@/lib/mockData";

const copy = {
  ar: {
    title: "مكتبة الصور والفيديو",
    intro: "مكتبة تجريبية تجمع الصور والفيديوهات الخاصة بفعاليات الجمعية ومبادراتها التراثية.",
    back: "العودة للرئيسية",
    all: "الكل",
    images: "الصور",
    videos: "الفيديو",
  },
  en: {
    title: "Photo and Video Library",
    intro: "A mock library collecting images and videos from the association's heritage events and initiatives.",
    back: "Back to Home",
    all: "All",
    images: "Images",
    videos: "Videos",
  },
};

export default function MediaLibraryPage() {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <PageFrame>
      <main className="inner-page">
        <section className="page-hero">
          <div className="container">
            <a href={localizedPath("/", lang)} className="page-back-link">{t.back}</a>
            <h1>{t.title}</h1>
            <p>{t.intro}</p>
            <div className="media-filter-row" aria-label={t.title}>
              <span>{t.all}</span>
              <span>{t.images}</span>
              <span>{t.videos}</span>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="container">
            <div className="media-library-grid">
              {mediaItems.map((item) => {
                const local = item[lang];
                return (
                  <article className="media-library-card" key={item.id}>
                    <img src={item.image} alt={local.title} loading="lazy" />
                    <span className="media-type-badge">{local.label}</span>
                    {item.type === "video" && (
                      <span className="media-play-mark" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    )}
                    <div className="media-library-card-title">{local.title}</div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
