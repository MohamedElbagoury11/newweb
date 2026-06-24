import { useEffect, useState } from "react";
import { localizedPath, mockPagePath, useLanguage, type Language } from "@/lib/language";

type NavItem = {
  label: string;
  routeLabel?: string;
  active?: boolean;
  href?: string;
  children?: Array<{ label: string; href?: string; routeLabel?: string }>;
};

const arabicNavItems: NavItem[] = [
  { label: "الصفحة الرئيسية", href: "/", active: true },
  {
    label: "من نحن",
    children: [
      { label: "كلمة رئيس مجلس الإدارة" },
      { label: "عن الجمعية" },
      { label: "الخطة الاستراتيجية للجمعية" },
      { label: "مقر جمعية غافة" },
    ],
  },
  {
    label: "هيكل الجمعية",
    children: [
      { label: "المؤسسون والعضويات الفخرية" },
      { label: "الجمعية العمومية" },
      { label: "العضويات وأعضاء الجمعية" },
    ],
  },
  {
    label: "الأنشطة",
    children: [
      { label: "الزيارات والوفود" },
      { label: "المحاضرات والندوات والمؤتمرات" },
      { label: "الدورات التدريبية" },
      { label: "المعارض التراثية والفنية" },
      { label: "الرحلات" },
      { label: "المخيمات التراثية" },
      { label: "لجنة الناطقين باللغة الإنجليزية" },
    ],
  },
  { label: "الرعاة والداعمون" },
  {
    label: "المركز الإعلامي",
    children: [
      { label: "الأخبار والفعاليات", href: "/news" },
      { label: "معرض الصور", href: "/media-library" },
      { label: "معرض الفيديو", href: "/media-library" },
      { label: "التقارير السنوية" },
    ],
  },
  { label: "اتصل بنا" },
];

const englishNavItems: NavItem[] = [
  { label: "Home", href: "/", active: true },
  {
    label: "About Us",
    children: [
      { label: "Chairman's Message" },
      { label: "About the Association" },
      { label: "Strategic Plan" },
      { label: "Ghaafa Association Headquarters" },
    ],
  },
  {
    label: "Association Structure",
    children: [
      { label: "Founders and Honorary Members" },
      { label: "General Assembly" },
      { label: "Memberships and Members" },
    ],
  },
  {
    label: "Activities",
    children: [
      { label: "Visits and Delegations" },
      { label: "Lectures, Seminars and Conferences" },
      { label: "Training Courses" },
      { label: "Heritage and Art Exhibitions" },
      { label: "Trips" },
      { label: "Heritage Camps" },
      { label: "English Speakers Committee" },
    ],
  },
  { label: "Sponsors and Supporters" },
  {
    label: "Media Center",
    children: [
      { label: "News and Events", href: "/news" },
      { label: "Photo Gallery", href: "/media-library" },
      { label: "Video Gallery", href: "/media-library" },
      { label: "Annual Reports" },
    ],
  },
  { label: "Contact Us" },
];

function getHref(item: { label: string; href?: string; routeLabel?: string }, lang: Language) {
  if (item.href) return localizedPath(item.href, lang);
  return mockPagePath(item.routeLabel ?? item.label, lang);
}

function SocialIcon({ label }: { label: string }) {
  return (
    <span style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 800 }}>
      {label}
    </span>
  );
}

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const { isEnglish, lang } = useLanguage();
  const items = isEnglish ? englishNavItems : arabicNavItems;
  const languageHref = isEnglish ? "/" : "/en/";
  const languageLabel = isEnglish ? "العربية" : "English";
  const phoneLabel = isEnglish ? "Contact us: +971 4 3539765" : "تواصل معنا: 971+ 4 3539765";
  const orgName = isEnglish
    ? "Ghaafa Association for Heritage Revival and National Identity"
    : "جمعية غافة لإحياء التراث والهوية الوطنية";

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar-inner">
            <div className="topbar-left">
              <div className="topbar-social">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" title="Facebook"><SocialIcon label="f" /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" title="X"><SocialIcon label="x" /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" title="Instagram"><SocialIcon label="ig" /></a>
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer" title="YouTube"><SocialIcon label="yt" /></a>
              </div>
              <a href="tel:+97143539765" className="topbar-phone">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                {phoneLabel}
              </a>
            </div>
            <div className="topbar-right">
              <a href={languageHref} className="lang-toggle">{languageLabel}</a>
            </div>
          </div>
        </div>
      </div>

      <header className={`site-header ${sticky ? "header-sticky" : "header-transparent"}`}>
        <div className="container">
          <div className="header-inner">
            <a href={localizedPath("/", lang)} className="logo-container">
              <img
                src="/logo.jpg"
                alt={orgName}
                className="logo-img"
                style={{
                  height: sticky ? 58 : 66,
                  width: "auto",
                  objectFit: "contain",
                  borderRadius: 6,
                  transition: "all 0.3s ease",
                  filter: sticky ? "none" : "drop-shadow(0 2px 8px rgba(0,0,0,0.35))",
                  background: sticky ? "transparent" : "rgba(255,255,255,0.92)",
                  padding: sticky ? 0 : "3px",
                }}
              />
            </a>

            <nav>
              <ul className="main-nav">
                {items.map((item) => (
                  <li key={item.label} className="nav-item">
                    <a
                      href={getHref(item, lang)}
                      className={`nav-link ${item.active ? "active" : ""}`}
                      style={{ color: sticky ? "#333" : "#fff" }}
                    >
                      {item.label}
                      {item.children && (
                        <svg className="nav-chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                      )}
                    </a>
                    {item.children && (
                      <div className="dropdown-menu">
                        {item.children.map((child) => (
                          <a key={child.label} href={getHref(child, lang)} className="dropdown-item">
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label={isEnglish ? "Menu" : "القائمة"}>
              <span style={{ background: sticky ? "#333" : "#fff" }} />
              <span style={{ background: sticky ? "#333" : "#fff" }} />
              <span style={{ background: sticky ? "#333" : "#fff" }} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-nav-overlay ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      <nav className={`mobile-nav ${mobileOpen ? "open" : ""}`} style={{ display: "block" }}>
        <button className="mobile-nav-close" onClick={() => setMobileOpen(false)}>×</button>
        <div style={{ padding: "10px 20px 16px", borderBottom: "1px solid #f0f0f0" }}>
          <div style={{ fontFamily: "Cairo, sans-serif", fontSize: "14px", fontWeight: 700, color: "#0B6B3A" }}>
            {orgName}
          </div>
        </div>
        {items.map((item) => (
          <div key={item.label} className="mobile-nav-item">
            <a href={getHref(item, lang)} className="mobile-nav-link" onClick={() => !item.children && setMobileOpen(false)}>
              <span>{item.label}</span>
            </a>
            {item.children && (
              <>
                <button
                  className="mobile-nav-link"
                  onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                  style={{ width: "100%", border: 0, background: "transparent" }}
                >
                  <span>{isEnglish ? "Sub pages" : "الصفحات الفرعية"}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                    style={{ transform: openSub === item.label ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}>
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                <div className={`mobile-sub-menu ${openSub === item.label ? "open" : ""}`}>
                  {item.children.map((child) => (
                    <a key={child.label} href={getHref(child, lang)} className="mobile-sub-link" onClick={() => setMobileOpen(false)}>
                      {child.label}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
