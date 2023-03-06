import React from 'react';
import Box from '@mui/material/Box';

import AuthForm from '@/components/auth/auth-form';
import PistachioPart from '@/components/auth/pistachio-part';

import { authSection } from '@/styles/auth';

export default function Auth() {
  return (
    <Box component='section' sx={authSection}>
      <PistachioPart />
      <AuthForm />
    </Box>
  );
}
