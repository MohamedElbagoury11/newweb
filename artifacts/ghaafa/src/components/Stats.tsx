import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language";

const stats = {
  ar: [
    { number: 20, suffix: "+", label: "سنة من الخبرة" },
    { number: 500, suffix: "+", label: "عضو فاعل" },
    { number: 1200, suffix: "+", label: "نشاط وفعالية" },
    { number: 50, suffix: "+", label: "شراكة استراتيجية" },
  ],
  en: [
    { number: 20, suffix: "+", label: "Years of Experience" },
    { number: 500, suffix: "+", label: "Active Members" },
    { number: 1200, suffix: "+", label: "Activities and Events" },
    { number: 50, suffix: "+", label: "Strategic Partnerships" },
  ],
};

function useCounter(target: number, active: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

function StatItem({ stat, active }: { stat: (typeof stats.ar)[0]; active: boolean }) {
  const count = useCounter(stat.number, active);
  return (
    <div className="stat-item">
      <div className="stat-number">
        {count}{stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats[lang].map((stat) => (
            <StatItem key={stat.label} stat={stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
