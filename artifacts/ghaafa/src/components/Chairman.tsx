import chairmanImage from "@/assets/videos/images/person.webp";
import { useLanguage } from "@/lib/language";

const content = {
  ar: {
    eyebrow: "كلمة القيادة",
    title: "عائشة الجابري ",
    name: "رئيس مجلس الإدارة",
    description:
     "عائشة الجابري موجهة تربوي سابق في وزارة التربية والتعليم مدرب دولي معتمد في وزارة تنمية المجتمع صاحبة إصدار أول كتاب كبسولة السعادة و الإيجابي مؤسس و رئيس مجلس إدارة جمعية غافية لإحياء التراث والهوية الوطنية",
  },
  en: {
    eyebrow: "Leadership Message",
    title: "Aisha Al-Jabri",
    name: "Chairman of the Board",
    description:"Aisha Al Jabri, a former educational supervisor in the Ministry of Education, an accredited international trainer in the Ministry of Community Development, author of the first book The Capsule of Happiness and Positivity and founder and chairperson of the board of directors of the Ghafia Association for the Revival of Heritage and National Identity."
  },
};

export default function Chairman() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section className="chairman-section">
      <div className="container">
        <div className="chairman-grid">
          <div className="chairman-image-wrap">
            <img src={chairmanImage} alt={t.name} className="chairman-image" />
          </div>
          <div className="chairman-content">
            <span className="about-badge">{t.eyebrow}</span>
            <h2 className="chairman-title">{t.title}</h2>
            <h3 className="chairman-name">{t.name}</h3>
            <p className="chairman-description">{t.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
