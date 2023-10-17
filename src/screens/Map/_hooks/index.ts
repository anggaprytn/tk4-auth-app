import { useRef, useCallback } from 'react';
import MapView from 'react-native-maps';
import { useFocusEffect } from '@react-navigation/native';
import * as Location from 'expo-location';

const initialRegion = {
  latitude: -6.1753924,
  longitude: 106.8271528,
  latitudeDelta: 0.0025,
  longitudeDelta: 0.0025,
};

export const useMap = () => {
  const mapViewRef: any = useRef<MapView>(null);

  const fetchLocation = useCallback(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});

      if (mapViewRef.current) {
        mapViewRef.current.animateToRegion(
          {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0025,
            longitudeDelta: 0.0025,
          },
          500,
        );
      }
    })();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchLocation();
    }, [fetchLocation]),
  );

  return {
    mapViewRef,
    initialRegion,
  };
};
