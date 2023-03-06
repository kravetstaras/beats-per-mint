import React from 'react';
import Button from '@mui/material/Button';

import { NextFont } from 'next/dist/compiled/@next/font';

import capitalizeFirstLetter from '@/utils/capitalize-first-letter';

type TButtonBPM = {
  icon?: JSX.Element;
  label?: string;
  link?: string;
  click?: () => void;
  isDisabled?: boolean;
  variantType: 'btnMallard' | 'btnMortar' | 'btnAlto' | 'btnSulu';
  font?: NextFont;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

export default function ButtonBPM({
  icon,
  label,
  link,
  click,
  isDisabled,
  variantType,
  font,
  type,
}: TButtonBPM) {
  let validLabel;

  if (label) {
    validLabel = capitalizeFirstLetter(label);
  }

  return (
    <Button
      type={type && type}
      variant={variantType}
      onClick={click && click}
      disabled={isDisabled}>
      {label && <span className={font && font.className}>{validLabel}</span>}
      {link && <a href={link}>{icon}</a>}
      {icon && !link && <span>{icon}</span>}
    </Button>
  );
}
