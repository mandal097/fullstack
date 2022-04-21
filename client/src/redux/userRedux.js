import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: true
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSuccesst: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = null
        }
    },
});

export const { loginStart, loginSuccesst, loginFailure, logout } = userSlice.actions
export default userSlice.reducer;