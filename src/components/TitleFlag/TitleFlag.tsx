import { SX_TITLE_FLAG } from '../../constants/sx/sxTitleFlag';
import { theme } from '../../theme/theme';
import { $TitleFlagProps } from './TitleFlag.types';
import { FC } from 'react';
import { Stack, Typography } from '@mui/material';

export const TitleFlag: FC<$TitleFlagProps> = ({ title }) => {
  return (
    <Stack sx={SX_TITLE_FLAG.CONTAINER}>
      <Typography variant='h1' sx={{ color: theme.palette.black.main }}>
        {title}
      </Typography>
    </Stack>
  );
};
