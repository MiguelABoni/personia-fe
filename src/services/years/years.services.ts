import { ENDPOINTS } from '../../constants/endpoints';
import { INITIAL_YEARS } from '../../constants/initialYears';
import { api } from '../../layers/axios/api';
import { $Years } from '../../types/apiTypes/years';

export const getYears = async () => {
  const response = await api.get(ENDPOINTS.YEARS);
  return (response.data as Promise<$Years>) || INITIAL_YEARS;
};
