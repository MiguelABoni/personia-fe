import { CONTENT } from '../../constants/content';
import { GRAPHIC_SECTIONS } from '../../constants/graphicSections';
import { SX_GLOBAL } from '../../constants/sx/sxGlobal';
import { SX_GRAPHICS } from '../../constants/sx/sxGraphics';
import { SectionCard } from '../SectionCard/SectionCard';
import { FC } from 'react';
import { Stack, Typography, useMediaQuery } from '@mui/material';

export const GraficosComponent: FC = () => {
  const mediaSM = useMediaQuery('(max-width: 768px)');
  const mediaTablet = useMediaQuery('(max-width: 1300px)');

  return (
    <>
      <Stack
        flexDirection='column'
        gap={5}
        padding={mediaSM ? '0 1rem' : '0 4rem'}
      >
        <Typography variant='h1' sx={SX_GLOBAL.CENTER_TEXT}>
          {CONTENT.GRAPHICS_TITLE}
        </Typography>
        <Typography
          variant='h2'
          sx={[
            SX_GLOBAL.CENTER_TEXT,
            {
              fontWeight: '400',
            },
          ]}
        >
          {CONTENT.GRAPHICS_DESCRIPTION}
        </Typography>
      </Stack>
      <Stack sx={SX_GRAPHICS.CONTAINER(mediaTablet)}>
        {GRAPHIC_SECTIONS.map((section) => (
          <SectionCard
            key={section.id}
            title={section.title}
            description={section.description}
            path={section.path}
            imageUrl={section.imageUrl}
          />
        ))}
      </Stack>
    </>
  );
};
