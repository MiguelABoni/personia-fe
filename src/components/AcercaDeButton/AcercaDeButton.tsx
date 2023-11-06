import { PATHS } from '../../constants/paths';
import { SX_ACERCA_DE } from '../../constants/sx/sxAcercaDe';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import { Box, Fab, useMediaQuery } from '@mui/material';

export const AcercaDeButton: FC = () => {
  const mediaSM = useMediaQuery('(max-width: 768px)');

  return (
    <Box sx={SX_ACERCA_DE.BUTTON(mediaSM)}>
      <Link to={PATHS.ABOUT}>
        <Fab color='error' size='large'>
          <QuestionMarkRoundedIcon fontSize='large' />
        </Fab>
      </Link>
    </Box>
  );
};
