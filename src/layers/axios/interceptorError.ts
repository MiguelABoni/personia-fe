import { SOMETHING_WENT_WRONG } from '../../constants/messages';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

export const interceptorError = (error: AxiosError) => {
  const { message = false } =
    (error.response?.data as { message: string }) || {};
  const msg = message || SOMETHING_WENT_WRONG;
  if (typeof window === 'undefined') throw new Error(msg);

  toast.error(msg);
  return error;
};
