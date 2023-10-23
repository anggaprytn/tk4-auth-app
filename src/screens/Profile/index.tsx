import { StatusBar } from 'expo-status-bar';
import { View, Image } from 'react-native';
import { Divider } from 'react-native-paper';
import { clearTokens } from '@/redux/_reducers/authSlice';
import { store } from '@/redux/_store';
import { useCallback, useMemo } from 'react';
import { styles } from './styles';
import React from 'react';
import { Text, Pressable } from '@/components';
import { defaultColors } from '@/themes';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useSelector } from 'react-redux';

const Home = () => {
  const data = useSelector(({ authSlice }: any) => authSlice?.data);

  const handleLogout = useCallback(() => {
    store.dispatch(clearTokens());
    GoogleSignin.signOut();
  }, []);

  const renderBtn = useMemo(() => {
    return (
      <Pressable onPress={handleLogout} style={styles.btn}>
        <Text type={'medium'} color={defaultColors.white} size={18}>
          Logout
        </Text>
      </Pressable>
    );
  }, [handleLogout]);

  const renderProfileInfo = useMemo(() => {
    return (
      <>
        <Image
          source={
            data?.user?.photo
              ? { uri: data?.user?.photo }
              : require('@/assets/images/img_propic_default.webp')
          }
          style={styles.img}
        />
        <Text
          type="medium"
          size={24}
          color={defaultColors.text}
          align={'center'}
          style={styles.mt8}>
          {data?.user?.name ? data?.user?.name : 'Pengguna'}
        </Text>
      </>
    );
  }, [data?.user?.name, data?.user?.photo]);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {renderProfileInfo}
      <Divider style={styles.divider} />
      {renderBtn}
    </View>
  );
};

export default Home;
