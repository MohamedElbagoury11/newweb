import { localizedPath, useLanguage } from "@/lib/language";
import { newsItems } from "@/lib/mockData";

const copy = {
  ar: {
    title: " قسم الاخبار  ",
   // eyebrow:  "  آخر المستجدات  ",
    intro: "تابع أحدث أخبار الجمعية وبرامجها ومبادراتها في حفظ التراث والهوية الوطنية.",
    button: "عرض كل الأخبار",
  },
  en: {
    title: "News section",
  //  eyebrow: "Latest Updates",
    intro: "Follow the association's latest programs, initiatives, and events in heritage preservation and national identity.",
    button: "View All News",
  },
};

export default function NewsPreview() {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <section className="news-section">
      <div className="container">
        <div className="section-heading-row">
          <div>
          
            <h2 className="section-title">{t.title}</h2>
            <p className="section-intro">{t.intro}</p>
          </div>
          <a href={localizedPath("/news", lang)} className="section-action-btn">
            {t.button}
          </a>
        </div>

        <div className="news-card-grid">
          {newsItems.map((item) => {
            const local = item[lang];
            return (
              <article className="news-card" key={item.id}>
                <img src={item.image} alt={local.title} className="news-card-image" loading="lazy" />
                <div className="news-card-body">
                  <div className="news-meta">
                    <span>{local.category}</span>
                    <time dateTime={item.date}>{item.date}</time>
                  </div>
                  <h3>{local.title}</h3>
                  <p>{local.excerpt}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
