/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { BestStoresList } from '../../screens/bestStores';
import { StoreComponent } from '../../screens/store';
import { StoresList } from '../../screens/stores';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Stores" component={StoresList} />
        <Stack.Screen name="BestStoresList" component={BestStoresList} />
        <Stack.Screen name="Store" component={StoreComponent} />
      </Stack.Navigator>
    </>
  );
};
