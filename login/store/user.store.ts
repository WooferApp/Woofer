import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserState } from '../user.type';

const initialState: UserState = {
    value: null,
    error: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogin: (state, action: PayloadAction<Partial<User>>) => {
            if (Object.keys(action.payload).length === 0) {
                state.error = 'Erreur lors de la saisie de vos identifiants';
                state.value = null;
            } else {
                state.value = { ...action.payload };
                state.error = null;
            }
        },
        setLoginError: (state) => {
            state.error = 'Erreur dans la saisie de vos identifiants';
        },
    },
});

export const { userLogin, setLoginError } = userSlice.actions;

export default userSlice.reducer;
