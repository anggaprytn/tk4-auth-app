import { StatusBar } from 'expo-status-bar';
import { View, Image } from 'react-native';
import { Divider } from 'react-native-paper';
import { clearTokens } from '@/redux/_reducers/authSlice';
import { store } from '@/redux/_store';
import { useMemo } from 'react';
import { styles } from './styles';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Text, Pressable } from '@/components';
import { defaultColors } from '@/themes';

const Home = () => {
  const renderBtn = useMemo(() => {
    return (
      <Pressable
        onPress={() => store.dispatch(clearTokens())}
        style={styles.btn}>
        <Text type={'medium'} color={defaultColors.white} size={18}>
          Logout
        </Text>
      </Pressable>
    );
  }, []);

  const renderProfileInfo = useMemo(() => {
    return (
      <>
        <Image
          source={require('@/assets/images/img_propic_default.webp')}
          style={{
            marginTop: hp(10),
            width: wp(30),
            height: wp(30),
            borderRadius: wp(30 / 2),
          }}
        />
        <Text
          type="medium"
          size={24}
          color={defaultColors.text}
          align={'center'}
          style={styles.mt8}>
          Pengguna
        </Text>
      </>
    );
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {renderProfileInfo}
      <Divider style={styles.divider} />
      {renderBtn}
    </View>
  );
};

export default Home;
