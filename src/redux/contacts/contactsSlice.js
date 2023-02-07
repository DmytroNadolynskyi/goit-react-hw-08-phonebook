import { createSlice } from '@reduxjs/toolkit';
import { requestContacts, addContact, deleteContact } from '../operations/operations';

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [requestContacts.pending]: handlePending,
    [requestContacts.rejected]: handleRejected,
    [requestContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },

    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleRejected,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
  },
});


export const contactsReducer = contactsSlice.reducer;