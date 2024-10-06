import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch contacts
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/api/contacts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Add a new contact
export const addContact = createAsyncThunk('contacts/addContact', async (contactData, thunkAPI) => {
  try {
    const response = await axios.post('/api/contacts', contactData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Delete a contact
export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
    await axios.delete(`/api/contacts/${contactId}`);
    return contactId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
