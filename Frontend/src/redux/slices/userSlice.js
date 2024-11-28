import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: '',
        lastName: '',
    },
    reducers: {
        setUser: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
        clearUser: () => ({
            firstName: '',
            lastName: '',
        }),
    },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
