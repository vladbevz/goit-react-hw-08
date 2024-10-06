import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://connections-api.goit.global/contacts';

// Функція для отримання контактів
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const token = thunkAPI.getState().auth.token; 
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return response.data;
  }
);

// Функція для створення нового контакту
export const createContact = createAsyncThunk(
  'contacts/createContact',
  async (contact, thunkAPI) => {
    const token = thunkAPI.getState().auth.token; 
    try {
      const response = await axios.post(API_URL, contact, {
        headers: {
          Authorization: `Bearer ${token}`, // Додаємо токен до заголовка
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data); // Обробка помилок
    }
  }
);

// Функція для видалення контакту
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId) => {
    const token = thunkAPI.getState().auth.token; 
    await axios.delete(`${API_URL}/${contactId}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Додаємо токен до заголовка
      },
    });
    return contactId;
  }
);
