import React from 'react';
import FooterNavigation from '@/components/layout/footer/footer-navigation';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';

import ButtonAlto from '@/components/ui/button-alto';

import { josefinSans } from '@/fonts';
import ButtonMontar from '@/components/ui/button-montar';
import { footer } from '@/styles/footer';
import ButtonMallard from '@/components/ui/button-mallard';

export default function Footer() {
  return (
    <Box sx={footer} component='footer'>
      <FooterNavigation />
      {/* <ButtonAlto
        click={() => console.log('ButtonAlto')}
        label='ButtonAlto'
        icon={<EditIcon fontSize='small' />}
      />
      <ButtonMontar
        click={() => console.log('ButtonAlto')}
        // isDisabled={true}
        label='ButtonMontar'
      />
      <ButtonMallard click={() => console.log('ButtonAlto')} label='log in' /> */}
      <Box component='p' className={josefinSans.className}>
        <span>Beats Per Mint Site</span>
        <span>last updated November 2022</span>
      </Box>
    </Box>
  );
}
