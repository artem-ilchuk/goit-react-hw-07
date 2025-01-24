import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://678f9acb49875e5a1a9298a5.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  `contacts/deleteContact`,
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      thunkAPI.dispatch(fetchContacts());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkAPI) => {
    try {
      await axios.post("contacts", body);
      thunkAPI.dispatch(fetchContacts());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
