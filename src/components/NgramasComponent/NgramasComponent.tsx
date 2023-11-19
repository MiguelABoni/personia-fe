import { CONTENT } from '../../constants/content';
import { SX_HOME } from '../../constants/sx/sxHome';
import { useNgramas } from '../../containers/useNgramas/useNgramas';
import { theme } from '../../theme/theme';
import { ImageFetchComponent } from '../ImageFetchComponent/ImageFetchComponent';
import { SectionComponent } from '../SectionComponent/SectionComponent';
import { FC } from 'react';
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';
import {
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';

export const NgramasComponent: FC = () => {
  const mediaSM = useMediaQuery('(max-width: 768px)');

  const {
    inputValue,
    loadingNgramas,
    error,
    image,
    handleGenerateNgramas,
    handleChange,
  } = useNgramas();

  return (
    <>
      <Stack
        flexDirection='column'
        gap={5}
        padding={mediaSM ? '0 1rem' : '0 4rem'}
      >
        <SectionComponent
          title='Ngramas'
          description={CONTENT.N_GRAMAS_DESCRIPTION}
        />
      </Stack>
      <Stack
        margin={mediaSM ? '3rem 1rem 2rem 1rem' : '3rem 4rem 2rem 4rem'}
        gap={1}
      >
        <Typography variant='h4' sx={{ color: theme.palette.black.main }}>
          {CONTENT.DESCRIPTION_NGRAMAS}
        </Typography>
        <Stack direction='row' gap={2} flexWrap='wrap' alignItems='flex-start'>
          <TextField
            type='number'
            label='Ingresa un número'
            variant='outlined'
            required
            value={inputValue}
            onChange={handleChange}
            error={error}
            disabled={loadingNgramas}
            helperText={
              error
                ? 'Por favor ingresa un número válido para generar los ngramas'
                : ''
            }
            FormHelperTextProps={{
              sx: { fontSize: '0.875rem' },
            }}
            InputLabelProps={{
              sx: { fontSize: '0.875rem' },
            }}
            InputProps={{
              sx: { fontSize: '0.875rem' },
            }}
            sx={{ margin: '.5rem 0', minWidth: mediaSM ? '350px' : '500px' }}
          />
          <Button
            data-testid='generate-ngramas-button'
            variant='contained'
            color='primary'
            startIcon={
              loadingNgramas ? (
                <CircularProgress size={20} color='inherit' />
              ) : (
                <ExtensionRoundedIcon />
              )
            }
            onClick={handleGenerateNgramas}
            sx={[
              { minWidth: '200px', height: '53px', marginTop: '.5rem' },
              SX_HOME.BUTTON_LARGE,
              SX_HOME.BUTTON_BLUE,
            ]}
            disabled={loadingNgramas}
          >
            Generar Ngramas
          </Button>
        </Stack>
      </Stack>
      <ImageFetchComponent
        data={image}
        alt='Ngramas'
        isFetching={loadingNgramas && !image}
        mediaSM={mediaSM}
        minHeight='200px'
      />
    </>
  );
};
