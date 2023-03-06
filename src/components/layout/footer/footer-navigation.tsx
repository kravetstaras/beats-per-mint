import * as React from 'react';
import Box from '@mui/material/Box';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

import ButtonBPM from '@/components/ui/button-bpm';

const footerNavifations = [
  {
    link: '#',
    icon: <TwitterIcon fontSize='large' />,
    id: 1,
    variantType: 'btnSulu',
  },
  {
    link: '#',
    icon: <InstagramIcon fontSize='large' />,
    id: 2,
    variantType: 'btnSulu',
  },
  {
    link: '#',
    icon: <TelegramIcon fontSize='large' />,
    id: 3,
    variantType: 'btnSulu',
  },
];

export default function FooterNavigation() {
  return (
    <Box component='div'>
      {footerNavifations?.map((el) => (
        <ButtonBPM
          key={el.id}
          icon={el.icon}
          link={el.link}
          //@ts-ignore
          //DOIT create ENUM for buttons type
          variantType={el.variantType}
        />
      ))}
    </Box>
  );
}
