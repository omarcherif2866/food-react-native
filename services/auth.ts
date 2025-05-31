// src/services/authService.ts
import axios from 'axios';
import { User } from '../models/user';

const AUTH_API = 'http://192.168.1.121:9090/api'; // Attention : remplace avec l'IP de ta machine dans l'émulateur

// Connexion utilisateur
export const signin = async (username: string, password: string): Promise<User> => {
  const response = await axios.post<User>(`${AUTH_API}/signin`, { username, password });
  return response.data;
};

// Inscription utilisateur
export const signup = async (username: string, email: string, password: string): Promise<any> => {
  const response = await axios.post(`${AUTH_API}/signup`, { username, email, password });
  return response.data;
};

// Mot de passe oublié
export const forget = async (email: string): Promise<User> => {
  const response = await axios.post<User>(`${AUTH_API}/forgotPassword`, { email });
  return response.data;
};

// Déconnexion utilisateur
export const signout = async (): Promise<User> => {
  try {
    const response = await axios.post<User>(`${AUTH_API}/signout`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
