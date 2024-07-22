import axios from 'axios';
import {
  fetchingContactsInProgress,
  fetchingContactsSuccess,
  fetchingContactsError,
} from './contactsSlice.js';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://669e623c9a1bda368006745e.mockapi.io/api';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingContactsInProgress());

    const response = await axios.get('/contacts');

    dispatch(fetchingContactsSuccess(response.data));
  } catch (e) {
    dispatch(fetchingContactsError(e.message));
  }
};
