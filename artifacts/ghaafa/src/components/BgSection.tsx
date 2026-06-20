import { useEffect, useRef } from "react";

export default function BgSection() {
  const ref = useRef<HTMLDivElement>(null);

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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="bg-section"
      ref={ref}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1920&q=80)",
      }}
    >
      <div className="bg-section-overlay" />
      <div className="container">
        <div className="bg-section-content">
          <div className="fade-in-up">
            {/* Decorative top line */}
            <div style={{
              width: 60,
              height: 3,
              background: "rgba(126,217,87,0.8)",
              margin: "0 auto 20px",
              borderRadius: 2,
            }} />
          </div>
          <div className="fade-in-up">
            <h2 className="bg-section-title">انضم إلى جمعية غافة</h2>
          </div>
          <div className="fade-in-up">
            <p className="bg-section-text">
              كن جزءاً من رحلة الحفاظ على التراث الإماراتي وإحياء هويتنا الوطنية. 
              انضم إلينا اليوم وساهم في صون إرث أجدادنا للأجيال القادمة.
            </p>
          </div>
          <div className="fade-in-up" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#" className="bg-section-btn">
              انضم إلينا الآن
            </a>
            <a href="#" className="bg-section-btn" style={{
              background: "transparent",
              border: "2px solid rgba(255,255,255,0.6)",
              color: "#fff",
            }}>
              تواصل معنا
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
