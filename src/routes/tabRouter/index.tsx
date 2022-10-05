/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import CartTab from '../../../assets/svg/cart.svg';
import Heart from '../../../assets/svg/heart.svg';
import Home from '../../../assets/svg/home.svg';
import { BestStoresList } from '../../screens/bestStores';
import { Cart } from '../../screens/cart';
import { Navigation } from '../stackRouter';

/* eslint-disable prettier/prettier */
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        return {
          headerShown: false,
          tabBarActiveTintColor: '#27a039',
          tabBarInactiveTintColor: '#575252',
          tabBarIcon: ({color}) => {
            if (route.name === 'Home') {
              return <Home fill={color} />;
            } else if (route.name === 'Best stores') {
              return <Heart fill={color} />;
            } else {
              return <CartTab fill={color} />;
            }
          },
        };
      }}>
      <Tab.Screen name="Home" component={Navigation} />
      <Tab.Screen name="Best stores" component={BestStoresList} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
}
