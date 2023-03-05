import * as React from 'react';
import Box from '@mui/material/Box';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

import ButtonSulu from '@/components/ui/button-sulu';

const footerNavifations = [
  { link: '#', icon: <TwitterIcon fontSize='large' />, id: 1 },
  { link: '#', icon: <InstagramIcon fontSize='large' />, id: 2 },
  { link: '#', icon: <TelegramIcon fontSize='large' />, id: 3 },
];

export default function FooterNavigation() {
  return (
    <Box component='div'>
      {footerNavifations?.map((el) => (
        <ButtonSulu key={el.id} icon={el.icon} link={el.link} />
      ))}
    </Box>
  );
}
