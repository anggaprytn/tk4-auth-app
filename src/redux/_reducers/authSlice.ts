import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isSignedIn: boolean;
  data: any;
}

const initialState: AuthState = {
  isSignedIn: false,
  data: null,
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
      state.data = null;
    },
  },
});

export const { setAuthTokens, clearTokens } = authSlice.actions;

export default authSlice.reducer;
