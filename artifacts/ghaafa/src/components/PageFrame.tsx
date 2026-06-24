import { useEffect, type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLanguage } from "@/lib/language";

export default function PageFrame({ children }: { children: ReactNode }) {
  const { dir, lang } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    document.body.dir = dir;

    return () => {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
      document.body.dir = "rtl";
    };
  }, [dir, lang]);

  return (
    <div dir={dir} lang={lang}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
