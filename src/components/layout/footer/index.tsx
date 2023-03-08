import React from 'react';
import FooterNavigation from '@/components/layout/footer/footer-navigation';
import Box from '@mui/material/Box';

import { josefinSans } from '@/fonts';

import { footer, grayBlock } from '@/styles/footer';

export default function Footer() {
  return (
    <>
      <Box sx={grayBlock} component='section' />
      <Box sx={footer} component='footer'>
        <FooterNavigation />
        <Box component='p' className={josefinSans.className}>
          <span>Beats Per Mint Site</span>
          <span>last updated March 2023</span>
        </Box>
      </Box>
    </>
  );
}
