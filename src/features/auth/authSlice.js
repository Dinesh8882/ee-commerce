import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, registerThunk, updateThunk } from './authThunk'

const userDataFromStorage = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : null;

const tokenFromStorage = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;

const initialState = {
    user: userDataFromStorage,
    token: tokenFromStorage,
    isAuthenticated: false,
    loading: false,
    error: null,
    success: false,
    message: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false
            state.user = null
            state.token = null
            state.message = "Logged out successfully"
            localStorage.removeItem("token")
        },
        resetAuthState: (state) => {
            state.loading = false;
            state.error = null;
            state.success = false;
            state.message = null;
        },
        setToken: (state, action) => {
            state.isAuthenticated = true
            state.token = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            }).addCase(loginThunk.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload.data
                state.token = action.payload.token
                state.isAuthenticated = true
                state.success = true
                state.message = "Login successful"

                localStorage.setItem("userData", JSON.stringify(action.payload.data));
                localStorage.setItem("token", action.payload.token);
            }).addCase(loginThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
                state.isAuthenticated = false;
            })
            .addCase(registerThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            }).addCase(registerThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.data;
                state.token = action.payload.token;
                state.isAuthenticated = true;
                state.success = true;
                state.message = 'Registration successful';
                localStorage.setItem("token", action.payload.token);
            }).addCase(registerThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
                state.isAuthenticated = false;
            })

            .addCase(updateThunk.pending, (state) => {
                state.loading = true
                state.error = null
                state.success = false
            }).addCase(updateThunk.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload.data
                state.success = true
                state.message = "User updated successfully"
                localStorage.setItem("token", action.payload.token);
            }).addCase(updateThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.success = false
            })
    }
})


export const { logout, resetAuthState, setToken } = authSlice.actions;
export default authSlice.reducer;