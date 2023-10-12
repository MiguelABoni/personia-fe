import { ENDPOINTS } from '../../constants/endpoints';
import { api } from '../../layers/axios/api';
import { $Characters } from 'src/types/apiTypes';

export const getCharacters = async () => {
  const response = await api.get(ENDPOINTS.CHARACTERS);
  return (response.data as Promise<$Characters>) || null;
};