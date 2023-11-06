import { SX_GLOBAL } from '../../constants/sx/sxGlobal';
import { SX_HOME } from '../../constants/sx/sxHome';
import { SX_YEARS_MODAL } from '../../constants/sx/sxYearsModal';
import { Dispatch, FC, SetStateAction } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import {
  Modal,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export const YearsModal: FC<{
  title: string;
  description: string;
  open: boolean;
  error: boolean;
  year: string;
  setYear: Dispatch<SetStateAction<string>>;
  yearOptions: number[];
  isFetching: boolean;
  loadingCSV: boolean;
  handleSubmit: () => Promise<void>;
  handleClose: () => void;
  mediaSM?: boolean;
}> = ({
  title,
  description,
  open,
  error,
  year,
  setYear,
  yearOptions,
  isFetching,
  loadingCSV,
  handleSubmit,
  handleClose,
  mediaSM,
}) => {
  return (
    <Modal
      open={open}
      onClose={loadingCSV ? () => null : handleClose}
      sx={SX_YEARS_MODAL.FIRST_CONTAINER}
    >
      <Stack sx={SX_YEARS_MODAL.SECOND_CONTAINER(mediaSM)}>
        <Typography variant='h1' sx={SX_GLOBAL.CENTER_TEXT}>
          {title}
        </Typography>
        <Typography
          variant='h3'
          sx={[
            SX_GLOBAL.CENTER_TEXT,
            {
              fontWeight: '400',
              marginY: '1rem',
            },
          ]}
        >
          {description}
        </Typography>
        <FormControl
          fullWidth
          variant='outlined'
          color='primary'
          disabled={loadingCSV}
          required
        >
          <InputLabel
            sx={SX_GLOBAL.FONT_SIZE_TEXT_DEFAULT}
            error={error && year === ''}
          >
            Selecciona un año
          </InputLabel>
          <Select
            label='Selecciona un año'
            value={year}
            onChange={(value) => setYear(value.target.value)}
            error={error && year === ''}
            sx={SX_GLOBAL.FONT_SIZE_TEXT_DEFAULT}
          >
            {isFetching ? (
              <MenuItem value='' disabled>
                <Stack gap='.5rem' direction='row'>
                  Cargando
                  <CircularProgress size={20} />
                </Stack>
              </MenuItem>
            ) : (
              yearOptions.map((year) => (
                <MenuItem
                  key={year}
                  value={year}
                  sx={SX_GLOBAL.FONT_SIZE_TEXT_DEFAULT}
                >
                  {year}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>
        {error && year === '' && (
          <Typography
            variant='h4'
            color='error'
            sx={{
              fontWeight: '400',
            }}
          >
            Por favor, necesitas seleccionar un año
          </Typography>
        )}
        <Button
          variant='contained'
          color='primary'
          startIcon={
            loadingCSV ? (
              <CircularProgress size={20} color='inherit' />
            ) : (
              <SearchRoundedIcon />
            )
          }
          onClick={handleSubmit}
          sx={[
            { margin: '1rem auto 0rem auto', width: '250px' },
            SX_HOME.BUTTON_LARGE,
            SX_HOME.BUTTON_BLUE,
          ]}
          disabled={loadingCSV}
        >
          Buscar
        </Button>
      </Stack>
    </Modal>
  );
};
