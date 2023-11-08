import {
  NGRAMAS_GENERATED_SUCCESSFULLY,
  NGRAMAS_GENERATED_UNSUCCESFULLY,
} from '../../constants/messages';
import { getNgramas } from '../../services/ngramas/ngramas.services';
import { toast } from 'sonner';
import { useState } from 'react';

export const useNgramas = () => {
  const [inputValue, setInputValue] = useState('');
  const [loadingNgramas, setLoadingNgramas] = useState(false);
  const [error, setError] = useState(false);
  const [image, setImage] = useState('');

  const handleGenerateNgramas = async () => {
    if (inputValue.trim() === '' || Number(inputValue) <= 0) {
      setError(true);
    } else {
      setError(false);
      setLoadingNgramas(true);
      const response = await getNgramas(inputValue);
      setLoadingNgramas(false);

      if (response) {
        toast.success(NGRAMAS_GENERATED_SUCCESSFULLY);
        setImage(response);
      } else {
        toast.error(NGRAMAS_GENERATED_UNSUCCESFULLY);
      }
      setInputValue('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setError(false);
  };

  return {
    inputValue,
    loadingNgramas,
    error,
    image,
    handleGenerateNgramas,
    handleChange,
  };
};
