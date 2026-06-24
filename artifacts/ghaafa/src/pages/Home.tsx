import Hero from "../components/Hero";
import About from "../components/About";
import Chairman from "../components/Chairman";
import KeyLinks from "../components/KeyLinks";
import Activities from "../components/Activities";
import Stats from "../components/Stats";
import BgSection from "../components/BgSection";
import NewsPreview from "../components/NewsPreview";
import MediaPreview from "../components/MediaPreview";
import InstagramFeed from "../components/InstagramFeed";
import PageFrame from "../components/PageFrame";

export default function Home() {
  return (
    <PageFrame>
      <Hero />
      <About />
      <Chairman />
      <KeyLinks />
      <Activities />
      <Stats />
      <NewsPreview />
      <MediaPreview />
      <BgSection />
      <InstagramFeed />
    </PageFrame>
  );
}
