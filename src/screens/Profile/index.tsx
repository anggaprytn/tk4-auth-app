import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { clearTokens } from '@/redux/_reducers/authSlice';
import { store } from '@/redux/_store';
import { useMemo } from 'react';
import { styles } from './styles';
import React from 'react';

const Home = () => {
  const renderBtn = useMemo(() => {
    return (
      <Button
        mode="contained"
        onPress={() => store.dispatch(clearTokens())}
        style={styles.btn}>
        Logout
      </Button>
    );
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {renderBtn}
    </View>
  );
};

export default Home;
