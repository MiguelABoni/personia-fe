import { SX_IMAGE_FETCH_COMPONENT } from '../../constants/sx/sxImageFetchComponent';
import { FC } from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

export const ImageFetchComponent: FC<{
  data: string | null | undefined;
  alt: string;
  isFetching?: boolean;
  mediaSM?: boolean;
}> = ({ data, alt, isFetching, mediaSM }) => {
  return (
    <>
      {isFetching ? (
        <Stack
          m='2rem 0'
          justifyContent='center'
          alignItems='center'
          minHeight='250px'
        >
          <CircularProgress size={40} />
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
