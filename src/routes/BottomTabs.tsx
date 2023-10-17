import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/screens/Map';
import Profile from '@/screens/Profile';
import IconFeather from 'react-native-vector-icons/Feather';
import { Text } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({ color, name, label }) => (
  <>
    <IconFeather name={name} color={color} size={24} />
    <Text variant="labelSmall" style={{ color }}>
      {label}
    </Text>
  </>
);

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Catalog"
        component={Home}
        options={{
          tabBarShowLabel: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => (
            <TabBarIcon color={color} name="home" label="Catalog" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => (
            <TabBarIcon color={color} name="user" label="Profile" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
