import {
  WORD_CLOUD_GENERATED_SUCCESSFULLY,
  WORD_CLOUD_GENERATED_UNSUCCESFULLY,
} from '../../constants/messages';
import {
  getStopWords,
  getWordCloud,
} from '../../services/wordCloud/wordCloud.services';
import { useTables } from '../useTables/useTables';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';

export const useWordCloud = () => {
  const [inputValue, setInputValue] = useState('');
  const [loadingStopWords, setLoadingStopWords] = useState(false);
  const [error, setError] = useState(false);
  const [image, setImage] = useState('');

  const { data, isFetching } = useTables({
    queryKey: ['word-cloud'],
    queryFn: getWordCloud,
  });

  const handleGenerateStopWords = async () => {
    if (inputValue.trim() === '') {
      setError(true);
    } else {
      setError(false);
      setLoadingStopWords(true);
      const response = await getStopWords(inputValue);
      setLoadingStopWords(false);

      if (response) {
        toast.success(WORD_CLOUD_GENERATED_SUCCESSFULLY);
        setImage(response);
      } else {
        toast.error(WORD_CLOUD_GENERATED_UNSUCCESFULLY);
      }
      setInputValue('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setError(false);
  };

  useEffect(() => {
    if (data) {
      setImage(data);
    }
  }, [data]);

  return {
    image,
    isFetching,
    inputValue,
    error,
    handleGenerateStopWords,
    handleChange,
    loadingStopWords,
  };
};
