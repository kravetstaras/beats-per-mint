import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';

import { aboutSectionCard } from '@/styles/ui/about-section-card';

type TAboutSectionCard = {
  image: string;
  title: string;
  description: string;
};

export default function AboutSectionCard({
  image,
  title,
  description,
}: TAboutSectionCard) {
  return (
    <Box sx={aboutSectionCard} component='div'>
      <Image src={image} alt={title + 'icon'} width={116} height={116} />
      <h3>{title}</h3>
      <p>{description}</p>
    </Box>
  );
}
