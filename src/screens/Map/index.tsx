import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useMap } from './_hooks';
import { StatusBar } from 'expo-status-bar';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Text } from '@/components';
import { defaultColors } from '@/themes';
import { useSelector } from 'react-redux';

const statusBarHeight = getStatusBarHeight();

const Map = () => {
  const { mapViewRef, initialRegion } = useMap();

  const data = useSelector(({ authSlice }: any) => authSlice?.data);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View
        style={{
          backgroundColor: 'white',
          height: 45 + 16 + statusBarHeight,
          width: wp(100),
          paddingTop: statusBarHeight,
          paddingHorizontal: 16,
          justifyContent: 'flex-end',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text
          type="regular"
          size={20}
          color={defaultColors.text}
          align={'center'}
          style={{ marginRight: 8 }}>
          {data?.user?.name ? data?.user?.name : 'Pengguna'}
        </Text>
        <Image
          source={
            data?.user?.photo
              ? { uri: data?.user?.photo }
              : require('@/assets/images/img_propic_default.webp')
          }
          style={{
            height: 45,
            width: 45,
            borderRadius: 45 / 2,
          }}></Image>
      </View>
      <MapView
        ref={mapViewRef}
        provider={PROVIDER_GOOGLE}
        showsMyLocationButton
        showsUserLocation
        initialRegion={initialRegion}
        style={styles.container}
      />
    </View>
  );
};

export default Map;
