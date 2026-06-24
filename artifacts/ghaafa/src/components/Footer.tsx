import { localizedPath, mockPagePath, useLanguage, type Language } from "@/lib/language";

const content = {
  ar: {
    org: "جمعية غافة لإحياء التراث والهوية الوطنية",
    desc: "تأسست الجمعية عام 2003م من قبل مجموعة من المهتمين والمتخصصين في التراث، إيمانا بأهمية الحفاظ على تراث الآباء والأجداد وتوارثه جيلا بعد جيل.",
    quickTitle: "روابط سريعة",
    activityTitle: "الأنشطة",
    contactTitle: "تواصل معنا",
    quickLinks: [
      { label: "الصفحة الرئيسية", href: "/" },
      { label: "من نحن" },
      { label: "هيكل الجمعية" },
      { label: "الأنشطة" },
      { label: "الرعاة والداعمون" },
      { label: "المركز الإعلامي", href: "/media-library" },
      { label: "اتصل بنا" },
    ],
    activityLinks: [
      { label: "الدورات التدريبية" },
      { label: "المحاضرات والندوات" },
      { label: "المعارض التراثية", href: "/media-library" },
      { label: "الرحلات" },
      { label: "المخيمات التراثية" },
      { label: "مطبوعات وإصدارات" },
    ],
    address: "مقر جمعية غافة\nدولة الإمارات العربية المتحدة",
    rights: "جميع الحقوق محفوظة",
    builtBy: "تصميم وتطوير:",
    team: "فريق التقنية",
  },
  en: {
    org: "Ghaafa Association for Heritage Revival and National Identity",
    desc: "Founded in 2003 by heritage specialists and enthusiasts, Ghaafa works to preserve the legacy of parents and grandparents for future generations.",
    quickTitle: "Quick Links",
    activityTitle: "Activities",
    contactTitle: "Contact Us",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About Us" },
      { label: "Association Structure" },
      { label: "Activities" },
      { label: "Sponsors and Supporters" },
      { label: "Media Center", href: "/media-library" },
      { label: "Contact Us" },
    ],
    activityLinks: [
      { label: "Training Courses" },
      { label: "Lectures and Seminars" },
      { label: "Heritage Exhibitions", href: "/media-library" },
      { label: "Trips" },
      { label: "Heritage Camps" },
      { label: "Publications and Releases" },
    ],
    address: "Ghaafa Association Headquarters\nUnited Arab Emirates",
    rights: "All rights reserved",
    builtBy: "Designed and developed by:",
    team: "Technology Team",
  },
};

function getFooterHref(item: { label: string; href?: string }, lang: Language) {
  if (item.href) return localizedPath(item.href, lang);
  return mockPagePath(item.label, lang);
}

export default function Footer() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand" style={{ marginBottom: 16, alignItems: "center" }}>
              <img
                src="/logo.jpg"
                alt={t.org}
                style={{
                  height: 80,
                  width: "auto",
                  objectFit: "contain",
                  borderRadius: 8,
                  background: "#fff",
                  padding: "6px 10px",
                  flexShrink: 0,
                }}
              />
            </div>
            <p className="footer-desc">{t.desc}</p>
            <div className="footer-social">
              {["facebook", "x", "instagram", "youtube"].map((label) => (
                <a key={label} href={mockPagePath(label, lang)} className="footer-social-link" title={label}>
                  <span style={{ fontSize: 12, fontWeight: 700 }}>{label[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">{t.quickTitle}</h4>
            <ul className="footer-links">
              {t.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={getFooterHref(link, lang)}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">{t.activityTitle}</h4>
            <ul className="footer-links">
              {t.activityLinks.map((link) => (
                <li key={link.label}>
                  <a href={getFooterHref(link, lang)}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">{t.contactTitle}</h4>
            <div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <span className="footer-contact-text" style={{ whiteSpace: "pre-line" }}>{t.address}</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.32h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.01a16 16 0 006.08 6.08l1.26-1.26a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                </span>
                <span className="footer-contact-text">
                  <a href="tel:+97143539765" style={{ color: "inherit" }}>+971 4 353 9765</a>
                </span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <span className="footer-contact-text">
                  <a href="mailto:info@ghaafa.org" style={{ color: "inherit" }}>info@ghaafa.org</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            {t.rights} © {new Date().getFullYear()} <span>{t.org}</span>
          </p>
          <p className="footer-copyright">
            {t.builtBy} <span>{t.team}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
