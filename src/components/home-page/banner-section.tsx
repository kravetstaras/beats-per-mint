import Box from '@mui/material/Box';
import BannerCard from '@/components/ui/banner-card';

import ButtonBPM from '@/components/ui/button-bpm';
import { inter } from '@/fonts';

const bannerItems = [
  {
    id: '1',
    image: '/assets/banners-section/1.jpg',
    biteText: 'Upgrade how you listen',
    title: 'MUSIC ON THE BLOCKCHAIN',
    link: '/',
  },
  {
    id: '2',
    image: '/assets/banners-section/2.jpg',
    biteText: 'Check this out',
    title: 'FEATURED PROJECT NAME',
    link: '/',
  },
];

export default function BannersSection() {
  return (
    <Box component='section'>
      <div className='mainBanner'>
        <h3>Welcome to Beats Per Mint</h3>
        <p>Where NFTs are valued by the culture they create.</p>
        <ButtonBPM label='How it works' variantType='btnMortar' font={inter} />
      </div>
      {bannerItems?.length > 0 &&
        bannerItems.map((banner) => (
          <BannerCard
            key={banner.id}
            image={banner.image}
            biteText={banner.biteText}
            title={banner.title}
            link={banner.link}
          />
        ))}
    </Box>
  );
}
