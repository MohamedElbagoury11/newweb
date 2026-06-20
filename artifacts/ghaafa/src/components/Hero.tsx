import { useState, useEffect } from "react";

const slides = [
  {
    bg: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1920&q=80",
    title: "جمعية غافة لإحياء التراث والهوية الوطنية",
    subtitle: "نحافظ على إرثنا الثقافي ونحيي تراث الأجداد لأجيال المستقبل",
  },
  {
    bg: "https://images.unsplash.com/photo-1559181567-c3190ca9d5f3?w=1920&q=80",
    title: "تراثنا هويتنا وشرفنا",
    subtitle: "نعمل على صون الموروث الثقافي والعمراني لدولة الإمارات العربية المتحدة",
  },
  {
    bg: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=1920&q=80",
    title: "إحياء التراث وصون الهوية الوطنية",
    subtitle: "منذ عام 2003 ونحن نسعى لحفظ تراث آبائنا وأجدادنا للأجيال القادمة",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 500);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (idx: number) => {
    if (idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400);
  };

  const slide = slides[current];

  return (
    <section className="hero-section">
      {/* Background */}
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${slide.bg})`,
          opacity: animating ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
      />
      <div className="hero-overlay" />

      {/* Decorative geometric pattern */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "80px",
        background: "linear-gradient(to top, rgba(247,250,247,0.4), transparent)",
        zIndex: 1,
      }} />

      {/* Content */}
      <div className="hero-content" style={{ paddingTop: "124px" }}>
        <div style={{
          opacity: animating ? 0 : 1,
          transform: animating ? "translateY(20px)" : "translateY(0)",
          transition: "all 0.6s ease",
        }}>
          {/* Arabic decorative line */}
          <div style={{
            width: 60,
            height: 2,
            background: "linear-gradient(90deg, #7ED957, transparent)",
            margin: "0 auto 24px",
          }} />
          <h1 className="hero-title">{slide.title}</h1>
          <p className="hero-subtitle">{slide.subtitle}</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#about" className="hero-btn">اكتشف أكثر</a>
            <a href="#activities" className="hero-btn" style={{
              background: "transparent",
              border: "2px solid rgba(255,255,255,0.6)",
            }}>أنشطتنا</a>
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div style={{
        position: "absolute",
        bottom: 40,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 10,
        zIndex: 3,
      }}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            style={{
              width: idx === current ? 28 : 10,
              height: 10,
              borderRadius: 5,
              background: idx === current ? "#7ED957" : "rgba(255,255,255,0.5)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll-indicator"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
