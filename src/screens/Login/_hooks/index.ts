import { useState, useCallback } from 'react';
import { setAuthTokens, setData } from '@/redux/_reducers/authSlice';
import { store } from '@/redux/_store';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

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

  const handleGoogleSignIn = useCallback(async () => {
    GoogleSignin.hasPlayServices()
      .then(async hasPlayService => {
        if (hasPlayService) {
          GoogleSignin.signIn()
            .then(userInfo => {
              console.log(JSON.stringify(userInfo));
              store.dispatch(setData(userInfo));
              store.dispatch(setAuthTokens());
            })
            .catch(e => {
              console.log('ERROR IS: ' + JSON.stringify(e));
            });
        }
      })
      .catch(error => {
        console.log('ERROR IS 2: ' + JSON.stringify(error));
      });
  }, []);

  return {
    handleGoogleSignIn,
    isPasswordVisible,
    setIsPasswordVisible,
    setUser,
    setPassword,
    visibleDialog,
    hideDialog,
    handleLogin,
  };
};
