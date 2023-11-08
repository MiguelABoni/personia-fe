import { CONTENT } from '../../constants/content';
import { INITIAL_YEARS } from '../../constants/initialYears';
import {
  CSV_GENERATED_SUCCESSFULLY,
  CSV_GENERATED_UNSUCCESFULLY,
} from '../../constants/messages';
import { PATHS } from '../../constants/paths';
import { getCSV } from '../../services/csv/csv.services';
import { getYears } from '../../services/years/years.services';
import { $Years } from '../../types/apiTypes/years';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useYearsModal = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [year, setYear] = useState('');
  const [yearOptions, setYearOptions] = useState<number[]>([]);
  const [error, setError] = useState(false);
  const [loadingCSV, setLoadingCSV] = useState(false);
  const [path, setPath] = useState('');

  const { data, isFetching } = useQuery<$Years, Error>({
    queryKey: ['years'],
    queryFn: () => getYears(),
    initialData: INITIAL_YEARS,
  });

  useEffect(() => {
    if (data && data.years) {
      setYearOptions(data.years);
    }
  }, [data]);

  const handleClose = () => {
    setOpen(false);
    setError(false);
    setYear('');
  };

  const handleSubmit = async () => {
    if (year === '') {
      setError(true);
    } else {
      setError(false);
      setLoadingCSV(true);
      const response = await getCSV(year);
      setLoadingCSV(false);

      if (response.message === 'CSV generated successfully') {
        handleClose();
        toast.success(CSV_GENERATED_SUCCESSFULLY);
        if (path !== '') navigate(path);
      } else {
        toast.error(CSV_GENERATED_UNSUCCESFULLY);
      }
    }
  };

  return {
    open,
    setOpen,
    year,
    setYear,
    yearOptions,
    error,
    isFetching,
    loadingCSV,
    handleSubmit,
    handleClose,
    setPath,
    title:
      path === PATHS.GRAPHICS
        ? CONTENT.TITLE_GRAPHICS_MODAL
        : CONTENT.TITLE_TABLES_MODAL,
    description:
      path === PATHS.GRAPHICS
        ? CONTENT.DESCRIPTION_GRAPHICS_MODAL
        : CONTENT.DESCRIPTION_TABLES_MODAL,
  };
};
