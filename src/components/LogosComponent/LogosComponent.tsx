import { LOGOS } from '../../constants/logos';
import { FC } from 'react';
import { Button, Stack, SxProps, Theme, Tooltip } from '@mui/material';

export const LogosComponent: FC<{ sx: SxProps<Theme> }> = ({ sx }) => {
  return (
    <Stack sx={sx}>
      {LOGOS.map((logo) => (
        <Button
          key={logo.id}
          data-testid={`logo-${logo.title}`}
          href={logo.href}
          target='_blank'
        >
          <Tooltip title={logo.title}>
            <img src={logo.src} alt={logo.alt} style={{ width: 50 }} />
          </Tooltip>
        </Button>
      ))}
    </Stack>
  );
};
