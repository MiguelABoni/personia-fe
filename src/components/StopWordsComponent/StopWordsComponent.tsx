import { CONTENT } from '../../constants/content';
import { SX_HOME } from '../../constants/sx/sxHome';
import { theme } from '../../theme/theme';
import { ChangeEvent, FC } from 'react';
import WbCloudyRoundedIcon from '@mui/icons-material/WbCloudyRounded';
import {
  Typography,
  TextField,
  Button,
  Stack,
  CircularProgress,
  useMediaQuery,
} from '@mui/material';

export const StopWordsComponent: FC<{
  inputValue: string;
  error: boolean;
  handleGenerate: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  loadingStopWords: boolean;
  disabled: boolean;
}> = ({
  inputValue,
  error,
  handleGenerate,
  handleChange,
  loadingStopWords,
  disabled,
}) => {
  const mediaSM = useMediaQuery('(max-width: 768px)');

  return (
    <Stack
      margin={mediaSM ? '3rem 1rem 2rem 1rem' : '3rem 4rem 2rem 4rem'}
      gap={1}
    >
      <Typography variant='h3' sx={{ color: theme.palette.black.main }}>
        {CONTENT.TITLE_STOP_WORDS}
      </Typography>
      <Typography variant='h4' sx={{ color: theme.palette.black.main }}>
        {CONTENT.DESCRIPTION_STOP_WORDS}
      </Typography>
      <Stack direction='row' gap={2} flexWrap='wrap' alignItems='flex-start'>
        <TextField
          label='Ingresa una palabra'
          variant='outlined'
          required
          value={inputValue}
          onChange={handleChange}
          error={error}
          disabled={disabled || loadingStopWords}
          helperText={
            error
              ? 'Por favor ingresa una palabra para generar la nube de palabras'
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
          variant='contained'
          color='primary'
          startIcon={
            loadingStopWords ? (
              <CircularProgress size={20} color='inherit' />
            ) : (
              <WbCloudyRoundedIcon />
            )
          }
          onClick={handleGenerate}
          sx={[
            { minWidth: '300px', height: '53px', marginTop: '.5rem' },
            SX_HOME.BUTTON_LARGE,
            SX_HOME.BUTTON_BLUE,
          ]}
          disabled={disabled || loadingStopWords}
        >
          Generar Nube De Palabras
        </Button>
      </Stack>
    </Stack>
  );
};
