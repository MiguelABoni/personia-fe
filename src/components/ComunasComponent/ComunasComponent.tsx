import { CONTENT } from '../../constants/content';
import { useTables } from '../../containers/useTables/useTables';
import { getComunas } from '../../services/comunas/comunas.services';
import { ImageFetchComponent } from '../ImageFetchComponent/ImageFetchComponent';
import { SectionComponent } from '../SectionComponent/SectionComponent';
import { FC } from 'react';
import { Stack, useMediaQuery } from '@mui/material';

export const ComunasComponent: FC = () => {
  const mediaSM = useMediaQuery('(max-width: 768px)');

  const { data, isFetching } = useTables({
    queryKey: ['comunas'],
    queryFn: getComunas,
  });

  return (
    <>
      <Stack
        flexDirection='column'
        gap={5}
        padding={mediaSM ? '0 1rem' : '0 4rem'}
      >
        <SectionComponent
          title='Comunas'
          description={CONTENT.TABLES_DETAIL_DESCRIPTION}
        />
      </Stack>
      <ImageFetchComponent
        data={data}
        alt='Comunas'
        isFetching={isFetching}
        mediaSM={mediaSM}
      />
    </>
  );
};
