import { localizedPath, useLanguage } from "@/lib/language";
import { mediaItems } from "@/lib/mockData";

const copy = {
  ar: {
    title: "مكتبة الصور والفيديو",
  //  eyebrow: "المكتبة الإعلامية",
    intro: "مجموعة مختارة من الصور والفيديوهات التي توثق الفعاليات والرحلات والمبادرات التراثية.",
    button: "زيارة المكتبة",
  },
  en: {
    title: "Photo and Video Library",
  //  eyebrow: "Media Library",
    intro: "A curated collection of images and videos documenting heritage events, trips, and community initiatives.",
    button: "Visit Library",
  },
};

export default function MediaPreview() {
  const { lang } = useLanguage();
  const t = copy[lang];
  const previewItems = mediaItems.slice(0, 4);

  return (
    <section className="media-section">
      <div className="container">
        <div className="section-heading-row">
          <div>
            <h2 className="section-title">{t.title}</h2>
            <p className="section-intro">{t.intro}</p>
          </div>
          <a href={localizedPath("/media-library", lang)} className="section-action-btn">
            {t.button}
          </a>
        </div>

        <div className="media-card-grid">
          {previewItems.map((item) => {
            const local = item[lang];
            return (
              <a href={localizedPath("/media-library", lang)} className="media-card" key={item.id}>
                <img src={item.image} alt={local.title} className="media-card-image" loading="lazy" />
                <span className="media-type-badge">{local.label}</span>
                {item.type === "video" && (
                  <span className="media-play-mark" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                )}
                <div className="media-card-title">{local.title}</div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
