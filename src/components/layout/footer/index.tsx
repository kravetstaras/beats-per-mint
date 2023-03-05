import React from 'react';
import FooterNavigation from '@/components/layout/footer/footer-navigation';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';

import ButtonAlto from '@/components/ui/button-alto';

import { josefinSans } from '@/fonts';
import ButtonMontar from '@/components/ui/button-montar';

export default function Footer() {
  return (
    <Box>
      <FooterNavigation />
      <ButtonAlto
        click={() => console.log('ButtonAlto')}
        label='ButtonAlto'
        icon={<EditIcon fontSize='small' />}
      />
      <ButtonMontar
        click={() => console.log('ButtonAlto')}
        // isDisabled={true}
        label='ButtonMontar'
      />
      <p className={josefinSans.className}>
        Beats Per Mint Site last updated November 2022
      </p>
    </Box>
  );
}
