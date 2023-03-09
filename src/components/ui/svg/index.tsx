import React, { ReactElement } from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

type TIconBPM = SvgIconProps & {
  icon: ReactElement;
};

export default function MUIsvg({ icon, ...props }: TIconBPM) {
  return <SvgIcon {...props}>{icon}</SvgIcon>;
}
