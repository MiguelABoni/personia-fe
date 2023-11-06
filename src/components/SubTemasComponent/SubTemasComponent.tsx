import { CONTENT } from '../../constants/content';
import { useTables } from '../../containers/useTables/useTables';
import { getSubTemas } from '../../services/subTemas/subTemas.services';
import { ImageFetchComponent } from '../ImageFetchComponent/ImageFetchComponent';
import { SectionComponent } from '../SectionComponent/SectionComponent';
import { FC } from 'react';
import { Stack, useMediaQuery } from '@mui/material';

export const SubTemasComponent: FC = () => {
  const mediaSM = useMediaQuery('(max-width: 768px)');

  const { data, isFetching } = useTables({
    queryKey: ['sub_temas'],
    queryFn: getSubTemas,
  });

  return (
    <>
      <Stack
        flexDirection='column'
        gap={5}
        padding={mediaSM ? '0 1rem' : '0 4rem'}
      >
        <SectionComponent
          title='Subtemas'
          description={CONTENT.TABLES_DETAIL_DESCRIPTION}
        />
      </Stack>
      <ImageFetchComponent
        data={data}
        alt='Sub Temas'
        isFetching={isFetching}
        mediaSM={mediaSM}
      />
    </>
  );
};
