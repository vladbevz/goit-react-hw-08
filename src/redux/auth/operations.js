import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Register user
export const register = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
  try {
    const response = await axios.post('https://connections-api.goit.global/users/signup', userData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Login user
export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    const response = await axios.post('https://connections-api.goit.global/users/login', userData);
    localStorage.setItem('token', response.data.token); 
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return thunkAPI.rejectWithValue('No token found');
  }
  try {
    await axios.post('https://connections-api.goit.global/users/logout', {}, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    localStorage.removeItem('token'); 
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Refresh user session
export const refreshUser = createAsyncThunk('auth/refreshUser', async (_, thunkAPI) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return thunkAPI.rejectWithValue('No token found');
  }
  try {
    const response = await axios.get('/users/current', {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
