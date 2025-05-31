// src/services/platService.ts
import { Plat } from '@/models/plat';
import axios from 'axios';

const BASE_URL = 'http://192.168.1.121:9090/plats';

export const addPlat = async (data: FormData): Promise<Plat> => {
  const response = await axios.post<Plat>(`${BASE_URL}/AddPlats`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const updatePlat = async (id: number, data: any): Promise<Plat> => {
  const response = await axios.put<Plat>(`${BASE_URL}/${id}`, data);
  return response.data;
};

export const deletePlat = async (id: number): Promise<Plat> => {
  const response = await axios.delete<Plat>(`${BASE_URL}/${id}`);
  return response.data;
};

export const getPlatById = async (id: any): Promise<Plat> => {
  const response = await axios.get<Plat>(`${BASE_URL}/${id}`);
  return response.data;
};

export const getPlatsBySpeciality = async (specialityId: number): Promise<Plat[]> => {
  try {
    const response = await axios.get<Plat[]>(`${BASE_URL}/speicalite/${specialityId}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des plats :', error);
    return [];  // retourne tableau vide en cas d'erreur
  }
};

export const getPlatList = async (): Promise<Plat[]> => {
  const response = await axios.get<Plat[]>(BASE_URL + '/');
  return response.data;
};
