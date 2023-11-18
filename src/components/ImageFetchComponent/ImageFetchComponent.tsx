import { CONTENT } from '../../constants/content';
import { SX_IMAGE_FETCH_COMPONENT } from '../../constants/sx/sxImageFetchComponent';
import { SX_YEARS_MODAL } from '../../constants/sx/sxYearsModal';
import { theme } from '../../theme/theme';
import { FC } from 'react';
import EmojiObjectsRoundedIcon from '@mui/icons-material/EmojiObjectsRounded';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';

export const ImageFetchComponent: FC<{
  data: string | null | undefined;
  alt: string;
  isFetching?: boolean;
  mediaSM?: boolean;
  minHeight?: string;
}> = ({ data, alt, isFetching, mediaSM, minHeight }) => {
  return (
    <>
      {isFetching ? (
        <Stack
          m='2rem 0'
          padding='0 1rem'
          justifyContent='center'
          alignItems='center'
          gap={5}
          minHeight={minHeight || '400px'}
        >
          <CircularProgress size={40} />
          <Stack sx={[SX_YEARS_MODAL.WAIT_CONTAINER, { gap: '2rem' }]}>
            <EmojiObjectsRoundedIcon color='primary' fontSize='large' />
            <Stack flexDirection='column' gap={1}>
              <Typography variant='h4' color={theme.palette.black.main}>
                {CONTENT.WAIT_MESSAGE}
              </Typography>
              <Typography variant='h4' color={theme.palette.black.main}>
                Apreciamos tu paciencia 😊
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      ) : (
        data && (
          <Box sx={SX_IMAGE_FETCH_COMPONENT.CONTAINER(mediaSM)}>
            <img
              src={data}
              alt={alt}
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
        )
      )}
    </>
  );
};
