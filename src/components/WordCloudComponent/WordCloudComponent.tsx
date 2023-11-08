import { CONTENT } from '../../constants/content';
import { useWordCloud } from '../../containers/useWordCloud/useWordCloud';
import { ImageFetchComponent } from '../ImageFetchComponent/ImageFetchComponent';
import { SectionComponent } from '../SectionComponent/SectionComponent';
import { StopWordsComponent } from '../StopWordsComponent/StopWordsComponent';
import { FC } from 'react';
import { Stack, useMediaQuery } from '@mui/material';

export const WordCloudComponent: FC = () => {
  const mediaSM = useMediaQuery('(max-width: 768px)');

  const {
    image,
    isFetching,
    inputValue,
    error,
    handleGenerateStopWords,
    handleChange,
    loadingStopWords,
  } = useWordCloud();

  return (
    <>
      <Stack
        flexDirection='column'
        gap={5}
        padding={mediaSM ? '0 1rem' : '0 4rem'}
      >
        <SectionComponent
          title='WordCloud'
          description={CONTENT.WORD_CLOUD_DESCRIPTION}
        />
      </Stack>
      <StopWordsComponent
        inputValue={inputValue}
        error={error}
        handleGenerate={handleGenerateStopWords}
        handleChange={handleChange}
        loadingStopWords={loadingStopWords}
        disabled={isFetching}
      />
      <ImageFetchComponent
        data={image}
        alt='Word Cloud'
        isFetching={isFetching}
        mediaSM={mediaSM}
      />
    </>
  );
};
