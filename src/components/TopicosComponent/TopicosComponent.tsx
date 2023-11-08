import { CONTENT } from '../../constants/content';
import { useTables } from '../../containers/useTables/useTables';
import { getTopicos } from '../../services/Topicos/topicos.services';
import { ImageFetchComponent } from '../ImageFetchComponent/ImageFetchComponent';
import { SectionComponent } from '../SectionComponent/SectionComponent';
import { FC } from 'react';
import { Stack, useMediaQuery } from '@mui/material';

export const TopicosComponent: FC = () => {
  const mediaSM = useMediaQuery('(max-width: 768px)');

  const { data, isFetching } = useTables({
    queryKey: ['topicos'],
    queryFn: getTopicos,
  });

  return (
    <>
      <Stack
        flexDirection='column'
        gap={5}
        padding={mediaSM ? '0 1rem' : '0 4rem'}
      >
        <SectionComponent
          title='Topicos'
          description={CONTENT.TOPICS_DESCRIPTION}
        />
      </Stack>
      <ImageFetchComponent
        data={data}
        alt='Topicos'
        isFetching={isFetching}
        mediaSM={mediaSM}
      />
    </>
  );
};
