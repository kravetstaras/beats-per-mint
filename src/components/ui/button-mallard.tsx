import React from 'react';
import { Button } from '@mui/material';

import capitalizeFirstLetter from '@/utils/capitalize-first-letter';
import { baskervville } from '@/fonts';

type TButtonMallard = {
  label: string;
  click: () => void;
};

export default function ButtonMallard({ label, click }: TButtonMallard) {
  const validLabel = capitalizeFirstLetter(label);
  return (
    <Button variant='btnMallard' onClick={click}>
      <span className={baskervville.className}>{validLabel}</span>
    </Button>
  );
}
