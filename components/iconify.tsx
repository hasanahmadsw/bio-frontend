import React, { PropsWithChildren } from 'react';
import { Icon, IconProps } from '@iconify/react';
import { Box, BoxProps } from '@mui/material';

export interface IconifyProps extends Pick<IconProps, 'icon'>, BoxProps {}

export const Iconify: React.FC<PropsWithChildren<IconifyProps>> = ({
  icon,
  sx,
  ...other
}) => {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
};

export default Iconify;
