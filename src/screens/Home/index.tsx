import { StatusBar } from 'expo-status-bar';
import { View, Image } from 'react-native';
import { Pressable } from '@/components';
import { styles } from './styles';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View></View>
    </View>
  );
};

export default Home;
