import { ENDPOINTS } from '../../constants/endpoints';
import { api } from '../../layers/axios/api';
import { $CSV } from '../../types/apiTypes/csv';

export const getCSV = async (year: string) => {
  const response = await api.get(`${ENDPOINTS.CSV}?anio=${year}`);
  return (response.data as Promise<$CSV>) || null;
};
