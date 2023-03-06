import React from 'react';
import FooterNavigation from '@/components/layout/footer/footer-navigation';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';

import { josefinSans } from '@/fonts';

import { footer } from '@/styles/footer';

export default function Footer() {
  return (
    <Box sx={footer} component='footer'>
      <FooterNavigation />
      <Box component='p' className={josefinSans.className}>
        <span>Beats Per Mint Site</span>
        <span>last updated November 2022</span>
      </Box>
    </Box>
  );
}
