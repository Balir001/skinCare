import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    currentUser: undefined,
    isLoading: false,
};

export const register = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
    try {
        const response = await axios.post("http://api.realworld.io/api/user", { user: userData });
        return response.data.user;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.errors); // fixed 'responce' to 'response'
    }
});

export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
    try {
        const response = await axios.post("http://api.realworld.io/api/user/login", { user: userData });
        return response.data.user;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.errors); // fixed 'responce' to 'response'
    }
});

export const getCurrentUser = createAsyncThunk('auth/getCurrentUser', async (_, thunkAPI) => {
    try {
        const token = localStorage.getItem('accessToken') ?? '';
        const response = await axios.get("http://api.realworld.io/api/user", {
            headers: {
                Authorization: `Token ${token}`,
            },
        });
        return response.data.user;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.errors); // fixed 'responce' to 'response'
    }
});

export const logout = createAsyncThunk('auth/logout', async () => {
    localStorage.removeItem("accessToken");
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => { // fixed 'extrareducers' to 'extraReducers'
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => { // fixed 'fullfilled' to 'fulfilled'
                state.isLoading = false;
                state.currentUser = action.payload;
            })
            .addCase(register.rejected, (state) => {
                state.isLoading = false;
            })
            
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => { // fixed 'fullfilled' to 'fulfilled'
                state.isLoading = false;
                state.currentUser = action.payload;
            })
            .addCase(login.rejected, (state) => {
                state.isLoading = false;
            })

            .addCase(getCurrentUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCurrentUser.fulfilled, (state, action) => { // fixed 'fullfilled' to 'fulfilled'
                state.isLoading = false;
                state.currentUser = action.payload;
            })
            .addCase(getCurrentUser.rejected, (state) => {
                state.isLoading = false;
                state.currentUser = null;
            })

            .addCase(logout.fulfilled, (state) => { // fixed 'fullfilled' to 'fulfilled'
                state.isLoading = false;
                state.currentUser = null;
            });
    },
});

export default authSlice.reducer;
