import { theme } from '../../theme/theme';
import { FC } from 'react';
import { Stack, Typography } from '@mui/material';

export const TitleFlag: FC<{ title: string }> = ({ title }) => {
  return (
    <Stack
      sx={{
        minWidth: '250px',
        height: '60px',
        padding: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        backgroundColor: theme.palette.blueLight.main,
      }}
    >
      <Typography variant='h1' sx={{ color: theme.palette.black.main }}>
        {title}
      </Typography>
    </Stack>
  );
};
