import { CONTENT } from '../../constants/content';
import { useTables } from '../../containers/useTables/useTables';
import { getMunicipios } from '../../services/municipios/municipios.services';
import { ImageFetchComponent } from '../ImageFetchComponent/ImageFetchComponent';
import { SectionComponent } from '../SectionComponent/SectionComponent';
import { FC } from 'react';
import { Stack, useMediaQuery } from '@mui/material';

export const MunicipiosComponent: FC = () => {
  const mediaSM = useMediaQuery('(max-width: 768px)');

  const { data, isFetching } = useTables({
    queryKey: ['municipios'],
    queryFn: getMunicipios,
  });

  return (
    <>
      <Stack
        flexDirection='column'
        gap={5}
        padding={mediaSM ? '0 1rem' : '0 4rem'}
      >
        <SectionComponent
          title='Municipios'
          description={CONTENT.TABLES_DETAIL_DESCRIPTION}
        />
      </Stack>
      <ImageFetchComponent
        data={data}
        alt='Municipios'
        isFetching={isFetching}
        mediaSM={mediaSM}
      />
    </>
  );
};
