import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Header } from '@/components';
import { useMap } from './_hooks';

const Map = () => {
  const { mapViewRef, initialRegion } = useMap();

  return (
    <View style={styles.container}>
      <Header />
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
