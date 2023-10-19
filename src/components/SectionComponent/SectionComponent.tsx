import { SX_GLOBAL } from '../../constants/sx/sxGlobal';
import { SX_SECTION_COMPONENT } from '../../constants/sx/sxSectionComponent';
import { TitleFlag } from '../TitleFlag/TitleFlag';
import { $SectionComponentProps } from './SectionComponent.types';
import { FC } from 'react';
import { Stack, Typography, useMediaQuery } from '@mui/material';

export const SectionComponent: FC<$SectionComponentProps> = (props) => {
  const { title, description } = props;
  const mediaSM = useMediaQuery('(max-width: 768px)');

  return (
    <Stack sx={SX_SECTION_COMPONENT.CONTAINER(mediaSM)}>
      <TitleFlag title={title} />
      <Typography
        variant='h1'
        sx={[SX_GLOBAL.JUSTIFY_TEXT, SX_SECTION_COMPONENT.TEXT]}
      >
        {description}
      </Typography>
    </Stack>
  );
};
