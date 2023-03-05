import React from 'react';
import { Button } from '@mui/material';

type TButtonSulu = {
  icon: JSX.Element;
  link: string;
};

export default function ButtonSulu({ icon, link }: TButtonSulu) {
  return (
    <Button variant='btnSulu'>
      <a href={link}>{icon}</a>
    </Button>
  );
}
