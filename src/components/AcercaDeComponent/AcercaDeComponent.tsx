import { CONTENT } from '../../constants/content';
import { ACERCA_DE_IMAGES } from '../../constants/images';
import { SX_ACERCA_DE } from '../../constants/sx/sxAcercaDe';
import { SX_GLOBAL } from '../../constants/sx/sxGlobal';
import { TitleFlag } from '../TitleFlag/TitleFlag';
import { FC } from 'react';
import {
  ImageList,
  ImageListItem,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';

export const AcercaDeComponent: FC = () => {
  const mediaSM = useMediaQuery('(max-width: 768px)');

  return (
    <Stack sx={SX_ACERCA_DE.FIRST_CONTAINER(mediaSM)}>
      <Stack flexDirection='column' gap={5}>
        <Stack alignItems='flex-start'>
          <TitleFlag title='Acerca De' />
        </Stack>
        <Stack sx={SX_ACERCA_DE.SECOND_CONTAINER}>
          <ImageList sx={SX_ACERCA_DE.IMAGE_CONTAINER} cols={1}>
            {ACERCA_DE_IMAGES.map((item) => (
              <ImageListItem key={item.src}>
                <img
                  srcSet={`${item.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading='lazy'
                />
              </ImageListItem>
            ))}
          </ImageList>
          <Stack sx={SX_ACERCA_DE.THIRD_CONTAINER}>
            <Typography variant='superTitle' sx={SX_GLOBAL.CENTER_TEXT}>
              {CONTENT.ACERCA_DE_TITLE}
            </Typography>
            <Typography variant='superText' sx={SX_GLOBAL.JUSTIFY_TEXT}>
              {CONTENT.ACERCA_DE_DESCRIPTION}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
