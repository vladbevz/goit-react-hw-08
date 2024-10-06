import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://connections-api.goit.global/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async (contact) => {
    const response = await axios.post(API_URL, contact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId) => {
    await axios.delete(`${API_URL}/${contactId}`);
    return contactId;
  }
);
