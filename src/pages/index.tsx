import DiscoverSection from '@/components/home-page/discover-section';
import AboutSection from '@/components/home-page/about-section';
import BannersSection from '@/components/home-page/banner-section';

export default function Home() {
  return (
    <>
      <BannersSection />
      <AboutSection />
      <DiscoverSection />
    </>
  );
}
