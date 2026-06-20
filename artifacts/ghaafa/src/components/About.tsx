import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

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
          {/* Text Column */}
          <div className="about-text-col">
            <div className="fade-in-up">
              <span className="about-badge">من نحن</span>
            </div>
            <div className="fade-in-up">
              <h2 className="about-title">
                جمعية غافة لإحياء التراث والهوية الوطنية
              </h2>
            </div>
            <div className="fade-in-up">
              <p className="about-desc">
                تأسست الجمعية عام 2003م من قِبَل مجموعة من المهتمين والمتخصصين في التراث، 
                إيماناً منهم بأهمية الحفاظ على تراث الآباء والأجداد وتوارثه جيلاً بعد جيل 
                عبر آلاف السنين.
              </p>
            </div>
            <div className="fade-in-up">
              <p className="about-desc">
                تعمل الجمعية على صون الموروث الثقافي والحضاري في أنحاء دولة الإمارات 
                العربية المتحدة من خلال برامج توعوية وأنشطة متنوعة تهدف إلى ترسيخ الهوية 
                الوطنية وتعزيز الانتماء للوطن.
              </p>
            </div>
            <div className="fade-in-up">
              <p className="about-desc">
                بدأت جمعية غافة حلماً ثم فكرةً ثم أصبحت واقعاً يُساهم في حفظ الموروث 
                الثقافي والعمراني في أنحاء الدولة وتعزيز الوعي بأهميته لدى الأجيال القادمة.
              </p>
            </div>
            <div className="fade-in-up" style={{ marginTop: 24 }}>
              <a href="#" className="hero-btn" style={{ display: "inline-block" }}>
                تعرّف على الجمعية
              </a>
            </div>
          </div>

          {/* Image Column */}
          <div className="about-image-col fade-in-up">
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                alt="التراث الإماراتي"
                className="about-image"
              />
              {/* Year badge */}
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
                  2003
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, marginTop: 4 }}>
                  سنة التأسيس
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
