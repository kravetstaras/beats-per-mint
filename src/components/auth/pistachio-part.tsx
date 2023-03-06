import React from 'react';
import Box from '@mui/material/Box';

import { pistachioPart } from '@/styles/auth';

export default function PistachioPart() {
  return (
    <Box component='div' sx={pistachioPart}>
      <h1>
        <span>Welcome</span> to Beats Per Mint
      </h1>
    </Box>
  );
}
