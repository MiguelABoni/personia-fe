import { SX_GLOBAL } from '../../constants/sx/sxGlobal';
import { SX_SECTION_COMPONENT } from '../../constants/sx/sxSectionComponent';
import { TitleFlag } from '../TitleFlag/TitleFlag';
import { $SectionComponentProps } from './SectionComponent.types';
import { FC } from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { Button, Stack, Typography, useMediaQuery } from '@mui/material';

export const SectionComponent: FC<$SectionComponentProps> = (props) => {
  const { title, description } = props;
  const mediaSM = useMediaQuery('(max-width: 768px)');

  const goBack = () => {
    window.history.back();
  };

  return (
    <Stack sx={SX_SECTION_COMPONENT.CONTAINER(mediaSM)}>
      <Stack direction='row' gap='20px'>
        <Button sx={{ borderRadius: '10px' }} onClick={goBack}>
          <ArrowBackRoundedIcon
            sx={{
              fontSize: '50px',
            }}
          />
        </Button>
        <TitleFlag title={title} />
      </Stack>
      <Typography
        variant='h1'
        sx={[SX_GLOBAL.JUSTIFY_TEXT, SX_SECTION_COMPONENT.TEXT]}
      >
        {description}
      </Typography>
    </Stack>
  );
};
