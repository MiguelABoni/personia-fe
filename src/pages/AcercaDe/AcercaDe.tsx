import { TitleFlag } from '../../components/TitleFlag/TitleFlag';
import { ACERCA_DE_IMAGES } from '../../constants/images';
import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { theme } from '../../theme/theme';
import { Helmet } from 'react-helmet';
import {
  Box,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from '@mui/material';

export const AcercaDe = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - Acerca De</title>
        <meta name='description' content='PersonIA - Acerca De' />
      </Helmet>
      <SectionLayout>
        <Box sx={{ padding: '0 2rem' }}>
          <Stack alignItems='flex-start' gap={5}>
            <TitleFlag title='Acerca De' />
            <Stack flexDirection='row' flexWrap='wrap' gap={5}>
              <ImageList
                sx={{
                  maxWidth: 500,
                }}
                cols={1}
              >
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
              <Stack flex={1} minWidth='250px'>
                <Typography sx={{ color: theme.palette.black.main }}>
                  Lorem Ipsum es simplemente el texto
                </Typography>
                <Typography sx={{ color: theme.palette.black.main }}>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                  relleno estándar de las industrias desde el año 1500, cuando
                  un impresor (N. del T. persona que se dedica a la imprenta)
                  desconocido usó una galería de textos y los mezcló de tal
                  manera que logró hacerLorem Ipsum es simplemente el texto de
                  relleno de las imprentas y archivos de texto. Lorem Ipsum ha
                  sido el texto de relleno estándar de las industrias desde el
                  año 1500, cuando un impresor (N. del T. persona que se dedica
                  a la imprenta) desconocido usó una galería de textos y los
                  mezcló de tal manera que logró hacer
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </SectionLayout>
    </>
  );
};
