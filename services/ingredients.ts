// src/services/IngredientService.ts
import { Ingredient } from '@/models/ingredients';
import axios from 'axios';

const BASE_URL = 'http://192.168.1.121:9090/ingredients';

export const getIngredientList = async (): Promise<Ingredient[]> => {
  const response = await axios.get(`${BASE_URL}/`);
  return response.data;
};

export const addIngredient = async (data: FormData): Promise<any> => {
  const response = await axios.post<any>(`${BASE_URL}/AddIngredients`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};


export const updateIngredient = async (id: number, data: any): Promise<Ingredient> => {
  const response = await axios.put(`${BASE_URL}/${id}`, data);
  return response.data;
};

export const deleteIngredient = async (id: number): Promise<Ingredient> => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
