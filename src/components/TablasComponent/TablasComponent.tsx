import { CONTENT } from '../../constants/content';
import { SX_GLOBAL } from '../../constants/sx/sxGlobal';
import { SX_TABLES } from '../../constants/sx/sxTables';
import { TABLE_SECTIONS } from '../../constants/tableSections';
import { SectionCard } from '../SectionCard/SectionCard';
import { FC } from 'react';
import { Stack, Typography, useMediaQuery } from '@mui/material';

export const TablasComponent: FC = () => {
  const mediaSM = useMediaQuery('(max-width: 768px)');
  const mediaMD = useMediaQuery('(max-width: 1100px)');

  return (
    <>
      <Stack
        flexDirection='column'
        gap={5}
        padding={mediaSM ? '0 1rem' : '0 4rem'}
      >
        <Typography variant='h1' sx={SX_GLOBAL.CENTER_TEXT}>
          {CONTENT.TABLES_TITLE}
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
          {CONTENT.TABLES_DESCRIPTION}
        </Typography>
      </Stack>
      <Stack sx={SX_TABLES.CONTAINER(mediaMD)}>
        {TABLE_SECTIONS.map((section) => (
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
