import heroVideo from "@/assets/videos/shutterstock_1093125227.mov";

const heroContent = {
  title: "جمعية غافة لإحياء التراث والهوية الوطنية",
  subtitle:" المحافظة على منظومة القيم الأصيلة و الهوية الوطنية وتجسيد العادات والتقاليد لدى أفراد المجتمع لتحقيق حياة مستدامة",
};

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/quicktime" />
      </video>
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
          opacity: 1,
          transform: "translateY(0)",
          transition: "all 0.6s ease",
        }}>
          {/* Arabic decorative line */}
          <div style={{
            width: 60,
            height: 2,
            background: "linear-gradient(90deg, #7ED957, transparent)",
            margin: "0 auto 24px",
          }} />
          <h1 className="hero-title">{heroContent.title}</h1>
          <p className="hero-subtitle">{heroContent.subtitle}</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#about" className="hero-btn">اكتشف أكثر</a>
            <a href="#activities" className="hero-btn" style={{
              background: "transparent",
              border: "2px solid rgba(255,255,255,0.6)",
            }}>أنشطتنا</a>
          </div>
        </div>
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
