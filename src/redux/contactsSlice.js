import { createSlice } from '@reduxjs/toolkit';

const initialContactsState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,

  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return { payload: { id: nanoid(), name, number } };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload
        );
        if (index !== -1) {
          state.contacts.splice(index, 1);
        }
      },
    },
    fetchingContactsInProgress: {
      reducer(state) {
        state.isLoading = true;
      },
    },
    fetchingContactsSuccess: {
      reducer(state, action) {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      },
    },
    fetchingContactsError: {
      reducer(state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
    },
  },
});

export const {
  addContact,
  deleteContact,
  fetchingContactsInProgress,
  fetchingContactsSuccess,
  fetchingContactsError,
} = contactsSlice.actions;
