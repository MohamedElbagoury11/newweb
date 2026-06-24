import { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/language";

const boxes = [
  {
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "الجمعية العمومية",
    desc: "تتكون الجمعية العمومية من جميع الأعضاء العاملين والذين أمضوا في عضوية الجمعية ستة أشهر على الأقل، وتجتمع مرة واحدة في السنة على الأقل.",
    href: "#",
  },
  {
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
        <rect x="9" y="3" width="6" height="4" rx="1"/>
        <path d="M9 12h6M9 16h4"/>
      </svg>
    ),
    title: "الخطة الاستراتيجية",
    desc: "أولاً الحفاظ على التراث، ثانياً إدارة وتأهيل المناطق والمواقع التاريخية، ثالثاً نشر الوعي التراثي، رابعاً جمعية فعالة وفاعلة.",
    href: "#",
  },
  {
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
        <path d="M3.05 11h2.95M18 11h2.95M12 3.05v2.95M12 18v2.95"/>
      </svg>
    ),
    title: "من نحن",
    desc: "بدأت جمعية غافة حلماً ثم فكرةً ثم أصبحت واقعاً يساهم في حفظ الموروث الثقافي والعمراني في أنحاء الدولة.",
    href: "#",
  },
];

const englishBoxes = [
  {
    ...boxes[0],
    title: "General Assembly",
    desc: "The General Assembly includes active members who have completed at least six months of association membership and meets at least once a year.",
  },
  {
    ...boxes[1],
    title: "Strategic Plan",
    desc: "Preserving heritage, managing historic sites, spreading heritage awareness, and building an active, effective association.",
  },
  {
    ...boxes[2],
    title: "About Us",
    desc: "Ghaafa began as a dream, then an idea, and became a reality that contributes to preserving cultural and architectural heritage.",
  },
];

export default function KeyLinks() {
  const ref = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();
  const sectionTitle = lang === "en" ? "Key Links" : "روابط رئيسية";
  const items = lang === "en" ? englishBoxes : boxes;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".fade-in-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="key-links" className="key-links-section" ref={ref}>
      <div className="container">
        <div className="section-title-block fade-in-up">
          <h2 className="section-title">{sectionTitle}</h2>
        </div>

        <div className="icon-boxes-grid">
          {items.map((box, i) => (
            <a key={i} href={box.href} className="icon-box fade-in-up">
              <div className="icon-box-icon">
                {box.icon}
              </div>
              <h3 className="icon-box-title">{box.title}</h3>
              <p className="icon-box-desc">{box.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
