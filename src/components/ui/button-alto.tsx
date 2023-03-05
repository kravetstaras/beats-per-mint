import React from 'react';
import { Button } from '@mui/material';

import capitalizeFirstLetter from '@/utils/capitalize-first-letter';
import { helvetica } from '@/fonts';

type TButtonAlto = {
  icon: JSX.Element;
  label: string;
  click: () => void;
};

export default function ButtonAlto({ icon, label, click }: TButtonAlto) {
  const validLabel = capitalizeFirstLetter(label);
  return (
    <Button variant='btnAlto' onClick={click}>
      <span>{icon}</span>
      <span className={helvetica.className}>{validLabel}</span>
    </Button>
  );
}
