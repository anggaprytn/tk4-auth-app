import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isSignedIn: boolean;
}

const initialState: AuthState = {
  isSignedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthTokens: state => {
      state.isSignedIn = true;
    },
    clearTokens: state => {
      state.isSignedIn = false;
    },
  },
});

export const { setAuthTokens, clearTokens } = authSlice.actions;

export default authSlice.reducer;
