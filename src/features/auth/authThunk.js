import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, registerUser, updateUser } from '../../api/authAPI';

export const loginThunk = createAsyncThunk(
  'user/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await loginUser(credentials);
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || 'Login failed';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const registerThunk = createAsyncThunk(
  'user/register',
  async (formData, thunkAPI) => {
    try {
      const response = await registerUser(formData);
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || 'Registration failed';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateThunk = createAsyncThunk(
  'user/update',
  async ({data,token}, thunkAPI) => {
    try {
      const response = await updateUser(data,token);
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || 'Update failed';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

