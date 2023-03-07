import Box from '@mui/material/Box';
import AboutSectionCard from '@/components/ui/about-section-card';

import { aboutSection } from '@/styles/about-section';
import ButtonBPM from '@/components/ui/button-bpm';
import { inter } from '@/fonts';

const itemsAboutSection = [
  {
    id: '1',
    image: '/assets/icons/about-section/1.png',
    title: 'Connect with creators',
    description:
      'Beats Per Mint (BPM) is a subscription-based platform that allows fans to connect with artists and communities through blockchain technology.',
  },
  {
    id: '2',
    image: '/assets/icons/about-section/2.png',
    title: 'Contribute your content',
    description:
      'Featured artists and projects create content that community members can add to. All content is then accessed through a subscription. ',
  },
  {
    id: '3',
    image: '/assets/icons/about-section/3.png',
    title: 'Archive indefinitely',
    description:
      'As content is created, it’s added to a project community archive and forms the community’s NFT.',
  },
];

export default function AboutSection() {
  return (
    <Box component='section' sx={aboutSection}>
      <h2>About Beats Per Mint (BPM)</h2>
      <div className='cards'>
        {itemsAboutSection?.length > 0 &&
          itemsAboutSection.map((el) => (
            <AboutSectionCard
              key={el.id}
              image={el.image}
              title={el.title}
              description={el.description}
            />
          ))}
      </div>
      <ButtonBPM
        label='Learn more about us'
        variantType='btnMortar'
        font={inter}
      />
    </Box>
  );
}
