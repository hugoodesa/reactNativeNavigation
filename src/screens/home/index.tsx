/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { StoreList } from '../../components/storesList';
import { getStores } from '../../services';

import type {NavigationContainerRef} from '@react-navigation/native';

export type RootStackParamList = {
  Home: any;
  List: any;
  Profile: any;
  Store: any;
  Stores: any;
  Cart: any;
};

export const Home = () => {
  const navigation =
    useNavigation<NavigationContainerRef<RootStackParamList>>();
  return (
    <>
      <StoreList list={getStores()} navigation={navigation} />

      <TouchableOpacity
        style={style.container}
        onPress={() => {
          navigation.navigate('List');
        }}>
        <Text style={style.text}>Go to List</Text>
      </TouchableOpacity>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#475fb6',
    borderRadius: 5,
    padding: 10,
    width: 80,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    color: '#fff',
  },
});
