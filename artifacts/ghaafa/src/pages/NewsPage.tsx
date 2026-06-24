import PageFrame from "@/components/PageFrame";
import { localizedPath, useLanguage } from "@/lib/language";
import { newsItems } from "@/lib/mockData";

const copy = {
  ar: {
    title: "الأخبار والفعاليات",
    intro: "أخبار تجريبية تعرض شكل صفحة الأخبار والفعاليات الخاصة بجمعية غافة.",
    back: "العودة للرئيسية",
    readMore: "قراءة المزيد",
  },
  en: {
    title: "News and Events",
    intro: "Mock news content showing the structure of Ghaafa Association's news and events page.",
    back: "Back to Home",
    readMore: "Read More",
  },
};

export default function NewsPage() {
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
          </div>
        </section>

        <section className="page-section">
          <div className="container">
            <div className="news-list-grid">
              {newsItems.map((item) => {
                const local = item[lang];
                return (
                  <article className="news-list-card" key={item.id}>
                    <img src={item.image} alt={local.title} loading="lazy" />
                    <div>
                      <div className="news-meta">
                        <span>{local.category}</span>
                        <time dateTime={item.date}>{item.date}</time>
                      </div>
                      <h2>{local.title}</h2>
                      <p>{local.excerpt}</p>
                      <a href="#" className="inline-action">{t.readMore}</a>
                    </div>
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
