import { useCallback } from 'react';
import { setAuthTokens, setData } from '@/redux/_reducers/authSlice';
import { store } from '@/redux/_store';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const useLoginScreen = () => {
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
              console.log('error' + JSON.stringify(e));
            });
        }
      })
      .catch(error => {
        console.log('error: ' + JSON.stringify(error));
      });
  }, []);

  return {
    handleGoogleSignIn,
  };
};
