import React, { useMemo, useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image, Alert } from 'react-native';
import { Button, TextInput, Dialog, Portal, Divider } from 'react-native-paper';
import { styles } from './styles';
import { useLoginScreen } from './_hooks';
import { Text, Pressable } from '@/components';
import { defaultColors } from '@/themes';
import { IconGoogle } from '@/assets/icons';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Login = () => {
  const {
    isPasswordVisible,
    setIsPasswordVisible,
    setUser,
    setPassword,
    visibleDialog,
    hideDialog,
    handleLogin,
  } = useLoginScreen();

  const handleGoogleSignIn = useCallback(async () => {
    GoogleSignin.hasPlayServices()
      .then(async hasPlayService => {
        if (hasPlayService) {
          GoogleSignin.signIn()
            .then(userInfo => {
              console.log(JSON.stringify(userInfo));
              Alert.alert('Google Signin Success');
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

  const renderDialog = useMemo(() => {
    return (
      <Portal>
        <Dialog visible={visibleDialog} onDismiss={hideDialog}>
          <Dialog.Content>
            <Text type="regular" size={18} color={defaultColors.text}>
              Invalid password. Please try again.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    );
  }, [hideDialog, visibleDialog]);

  const renderHeader = useMemo(() => {
    return (
      <>
        <Image
          source={require('@/assets/images/bg.webp')}
          style={styles.image}
        />
        <View style={styles.containerTextImage}>
          <Text type={'medium'} color={defaultColors.white} size={35}>
            Google Sign-in
          </Text>
        </View>
      </>
    );
  }, []);

  const renderButton = useMemo(() => {
    return (
      <Pressable onPress={handleLogin} style={styles.btn}>
        <Text type={'medium'} color={defaultColors.white} size={18}>
          Login
        </Text>
      </Pressable>
    );
  }, [handleLogin]);

  const renderInput = useMemo(() => {
    return (
      <>
        <TextInput
          style={styles.inputUser}
          label="User"
          onChange={e => setUser(e.nativeEvent.text)}
        />
        <TextInput
          style={styles.inputPassword}
          label="Password"
          secureTextEntry={!isPasswordVisible}
          onChange={e => setPassword(e.nativeEvent.text)}
          right={
            <TextInput.Icon
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              icon={isPasswordVisible ? 'eye-off' : 'eye'}
            />
          }
        />
      </>
    );
  }, [isPasswordVisible, setIsPasswordVisible, setPassword, setUser]);

  const renderBtnGoogle = useMemo(() => {
    return (
      <Pressable onPress={handleGoogleSignIn} style={styles.btnGoogle}>
        <View style={styles.containerIcon}>
          <IconGoogle height={26} />
        </View>
        <Text type={'medium'} color={defaultColors.text} size={18}>
          Lanjutkan dengan Google
        </Text>
      </Pressable>
    );
  }, [handleGoogleSignIn]);

  const renderDivider = useMemo(() => {
    return (
      <View style={styles.centerr}>
        <Divider style={styles.divider} />
        <Text
          type={'regular'}
          color={defaultColors.grayText}
          size={18}
          style={styles.orText}>
          atau masuk dengan
        </Text>
      </View>
    );
  }, []);

  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.center}>
          {renderHeader}
          {renderInput}
          {renderButton}
          {renderDivider}
          {renderBtnGoogle}
        </View>
      </View>
      {renderDialog}
    </>
  );
};

export default Login;
