import { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/language";

const content = {
  ar: {
    badge: "من نحن",
    title: "جمعية غافة لإحياء التراث والهوية الوطنية",
    paragraphs: [
      "تأسست الجمعية عام 2025م من قبل مجموعة من المهتمين والمتخصصين في التراث، إيمانا منهم بأهمية الحفاظ على تراث الآباء والأجداد وتوارثه جيلا بعد جيل عبر آلاف السنين.",
      "تعمل الجمعية على صون الموروث الثقافي والحضاري في أنحاء دولة الإمارات العربية المتحدة من خلال برامج توعوية وأنشطة متنوعة تهدف إلى ترسيخ الهوية الوطنية وتعزيز الانتماء للوطن.",
      "بدأت جمعية غافة حلما ثم فكرة ثم أصبحت واقعا يساهم في حفظ الموروث الثقافي والعمراني في أنحاء الدولة وتعزيز الوعي بأهميته لدى الأجيال القادمة.",
    ],
    cta: "تعرف على الجمعية",
    imageAlt: "التراث الإماراتي",
    yearLabel: "سنة التأسيس",
  },
  en: {
    badge: "About Us",
    title: "Ghaafa Association for Heritage Revival and National Identity",
    paragraphs: [
      "The association was founded in 2025 by people passionate about heritage and specialized in preserving the legacy of parents and grandparents for future generations.",
      "Ghaafa works to protect cultural and civilizational heritage across the United Arab Emirates through awareness programs and diverse activities that strengthen national identity.",
      "Ghaafa began as a dream, became an idea, and grew into a living initiative that helps preserve cultural and architectural heritage for the generations to come.",
    ],
    cta: "Learn About the Association",
    imageAlt: "Emirati heritage",
    yearLabel: "Year Founded",
  },
};

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();
  const t = content[lang];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".fade-in-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="about-text-col">
            <div className="fade-in-up">
              <span className="about-badge">{t.badge}</span>
            </div>
            <div className="fade-in-up">
              <h2 className="about-title">{t.title}</h2>
            </div>
            {t.paragraphs.map((paragraph) => (
              <div className="fade-in-up" key={paragraph}>
                <p className="about-desc">{paragraph}</p>
              </div>
            ))}
            <div className="fade-in-up" style={{ marginTop: 24 }}>
              <a href="#" className="hero-btn" style={{ display: "inline-block" }}>
                {t.cta}
              </a>
            </div>
          </div>

          <div className="about-image-col fade-in-up">
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                alt={t.imageAlt}
                className="about-image"
              />
              <div style={{
                position: "absolute",
                bottom: 24,
                right: 24,
                background: "#0B6B3A",
                color: "#fff",
                borderRadius: 8,
                padding: "14px 20px",
                textAlign: "center",
                fontFamily: "Cairo, sans-serif",
                boxShadow: "0 8px 24px rgba(11,107,58,0.4)",
                zIndex: 1,
              }}>
                <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 36, fontWeight: 800, lineHeight: 1, color: "#7ED957" }}>
                  2025
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, marginTop: 4 }}>
                  {t.yearLabel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
