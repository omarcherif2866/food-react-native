// src/services/specialiteService.ts
import { Specialite } from '@/models/specialite';
import axios from 'axios';

const BASE_URL = 'http://192.168.1.121:9090/specialites';

export const getSpecialiteList = async (): Promise<Specialite[]> => {
  const response = await axios.get(`${BASE_URL}/`);
  return response.data;
};

export const addSpecialite = async (data: any): Promise<Specialite> => {
  const response = await axios.post(`${BASE_URL}/AddSpecialite`, data);
  return response.data;
};

export const updateSpecialite = async (id: number, data: any): Promise<Specialite> => {
  const response = await axios.put(`${BASE_URL}/${id}`, data);
  return response.data;
};

export const deleteSpecialite = async (id: number): Promise<Specialite> => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
