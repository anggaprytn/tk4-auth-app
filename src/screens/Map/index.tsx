import React, { useMemo } from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useMap } from './_hooks';
import { StatusBar } from 'expo-status-bar';
import { Text } from '@/components';
import { defaultColors } from '@/themes';

const Map = () => {
  const { data, mapViewRef, initialRegion } = useMap();

  const renderHeader = useMemo(() => {
    return (
      <View style={styles.header}>
        <Text
          type="regular"
          size={20}
          color={defaultColors.text}
          align={'center'}
          style={styles.mr8}>
          {data?.user?.name ? data?.user?.name : 'Pengguna'}
        </Text>
        <Image
          source={
            data?.user?.photo
              ? { uri: data?.user?.photo }
              : require('@/assets/images/img_propic_default.webp')
          }
          style={styles.img}
        />
      </View>
    );
  }, [data?.user?.name, data?.user?.photo]);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {renderHeader}
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
