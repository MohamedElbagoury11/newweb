import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import KeyLinks from "../components/KeyLinks";
import Activities from "../components/Activities";
import Stats from "../components/Stats";
import BgSection from "../components/BgSection";
import InstagramFeed from "../components/InstagramFeed";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div dir="rtl">
      <Header />
      <Hero />
      <About />
      <KeyLinks />
      <Activities />
      <Stats />
      <BgSection />
      <InstagramFeed />
      <Footer />
    </div>
  );
}
