import { useState, useCallback } from 'react';
import { setAuthTokens } from '@/redux/_reducers/authSlice';
import { store } from '@/redux/_store';

export const useLoginScreen = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [visibleDialog, setVisibleDialog] = useState<boolean>(false);

  const hideDialog = () => setVisibleDialog(false);

  const handleLogin = useCallback(() => {
    const authSuccess = user === 'pengguna' && password === 'masuk';
    authSuccess ? store.dispatch(setAuthTokens()) : setVisibleDialog(true);
  }, [password, user]);

  return {
    isPasswordVisible,
    setIsPasswordVisible,
    setUser,
    setPassword,
    visibleDialog,
    hideDialog,
    handleLogin,
  };
};
