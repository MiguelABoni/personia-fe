import { ENDPOINTS } from '../../constants/endpoints';
import { api } from '../../layers/axios/api';

export const getNgramas = async (qty: string) => {
  const response = await api.get(`${ENDPOINTS.NGRAMAS}?qty=${qty}`, {
    responseType: 'arraybuffer',
  });

  const contentType = response.headers['content-type'];
  const data = new Blob([response.data], { type: contentType });

  if (contentType.includes('image')) {
    const imageUrl = URL.createObjectURL(data);
    return imageUrl;
  } else {
    return null;
  }
};
