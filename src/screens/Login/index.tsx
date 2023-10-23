import React, { useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';
import { styles } from './styles';
import { useLoginScreen } from './_hooks';
import { Text, Pressable } from '@/components';
import { defaultColors } from '@/themes';
import { IconGoogle } from '@/assets/icons';

const Login = () => {
  const { handleGoogleSignIn } = useLoginScreen();

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

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.center}>
        {renderHeader}
        {renderBtnGoogle}
      </View>
    </View>
  );
};

export default Login;
