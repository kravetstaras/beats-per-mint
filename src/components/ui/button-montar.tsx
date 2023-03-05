import React from 'react';
import { Button } from '@mui/material';

import capitalizeFirstLetter from '@/utils/capitalize-first-letter';
import { inter } from '@/fonts';

type TButtonMontar = {
  label: string;
  click: () => void;
  isDisabled?: boolean;
};

export default function ButtonMontar({
  label,
  click,
  isDisabled,
}: TButtonMontar) {
  const validLabel = capitalizeFirstLetter(label);
  return (
    <Button variant='btnMortar' onClick={click} disabled={isDisabled}>
      <span className={inter.className}>{validLabel}</span>
    </Button>
  );
}
