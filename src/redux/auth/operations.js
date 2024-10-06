import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Register user
export const register = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
  try {
    const response = await axios.post('/api/register', userData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Login user
export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    const response = await axios.post('/api/login', userData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Logout user
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/api/logout');
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Refresh user session
export const refreshUser = createAsyncThunk('auth/refreshUser', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/api/refresh');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
