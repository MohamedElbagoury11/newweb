import PageFrame from "@/components/PageFrame";
import { localizedPath, useLanguage } from "@/lib/language";

const copy = {
  ar: {
    fallbackTitle: "صفحة تجريبية",
    intro: "هذه صفحة تجريبية بمحتوى وهمي جاهز للربط من القوائم. يمكن استبدال هذه البيانات لاحقا بالمحتوى الحقيقي.",
    back: "العودة للرئيسية",
    overview: "نبذة عامة",
    goals: "الأهداف",
    programs: "برامج مقترحة",
    cards: [
      {
        title: "محتوى تعريفي",
        text: "مساحة مخصصة لعرض المعلومات الأساسية والتفاصيل المهمة الخاصة بهذه الصفحة.",
      },
      {
        title: "خدمات ومبادرات",
        text: "قائمة مختصرة بالبرامج أو الخدمات أو المبادرات التي يمكن إضافتها هنا.",
      },
      {
        title: "بيانات تواصل",
        text: "يمكن استخدام هذا القسم لإضافة روابط أو ملفات أو معلومات داعمة للزوار.",
      },
    ],
  },
  en: {
    fallbackTitle: "Mock Page",
    intro: "This is a mock page connected from the site menus. Its placeholder content can be replaced later with real data.",
    back: "Back to Home",
    overview: "Overview",
    goals: "Goals",
    programs: "Suggested Programs",
    cards: [
      {
        title: "Introductory Content",
        text: "A dedicated area for key information and important details related to this page.",
      },
      {
        title: "Services and Initiatives",
        text: "A short list of programs, services, or initiatives can be added here.",
      },
      {
        title: "Contact Details",
        text: "Use this area for supporting links, files, and visitor information.",
      },
    ],
  },
};

function getTitle() {
  const slug = window.location.pathname.split("/page/")[1] ?? "";
  try {
    return decodeURIComponent(slug).replace(/-/g, " ").trim();
  } catch {
    return slug.replace(/-/g, " ").trim();
  }
}

export default function MockPage() {
  const { lang } = useLanguage();
  const t = copy[lang];
  const title = getTitle() || t.fallbackTitle;

  return (
    <PageFrame>
      <main className="inner-page">
        <section className="page-hero">
          <div className="container">
            <a href={localizedPath("/", lang)} className="page-back-link">{t.back}</a>
            <h1>{title}</h1>
            <p>{t.intro}</p>
          </div>
        </section>

        <section className="page-section">
          <div className="container">
            <div className="mock-page-grid">
              <article className="mock-page-main">
                <span className="section-eyebrow">{t.overview}</span>
                <h2>{title}</h2>
                <p>{t.intro}</p>
                <p>
                  {lang === "en"
                    ? "This page follows the same visual style as the main website and is ready for future real content, forms, images, or documents."
                    : "تتبع هذه الصفحة نفس أسلوب الموقع الرئيسي وهي جاهزة لإضافة المحتوى الحقيقي أو النماذج أو الصور أو الملفات لاحقا."}
                </p>
              </article>

              <aside className="mock-page-side">
                <h3>{t.goals}</h3>
                <ul>
                  <li>{lang === "en" ? "Preserve heritage identity" : "حفظ الهوية التراثية"}</li>
                  <li>{lang === "en" ? "Support community awareness" : "دعم الوعي المجتمعي"}</li>
                  <li>{lang === "en" ? "Document programs and activities" : "توثيق البرامج والأنشطة"}</li>
                </ul>
              </aside>
            </div>

            <div className="mock-card-grid">
              {t.cards.map((card) => (
                <article className="mock-card" key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
