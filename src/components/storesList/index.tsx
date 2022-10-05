/* eslint-disable prettier/prettier */
import { NavigationContainerRef } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Store } from '../../model/store';
import { RootStackParamList } from '../../screens/home';

type PropsStoreElement = {
  store: Store;
  navigation: NavigationContainerRef<RootStackParamList>;
};

const StoreElement = ({store, navigation}: PropsStoreElement) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Store', store);
      }}>
      <View style={style.container}>
        <View style={style.details}>
          <Text style={style.text}>{store.name}</Text>
          <Text style={style.text}>{store.distance} km</Text>
        </View>
        <View>
          <Text style={style.text}>Estrelas : {store.starsNumber}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

type Props = {
  list: Store[];
  navigation: NavigationContainerRef<RootStackParamList>;
};

export const StoreList: React.FC<Props> = ({list, navigation}): JSX.Element => {
  return (
    <FlatList
      data={list}
      renderItem={({item}) => {
        return <StoreElement store={item} navigation={navigation} />;
      }}
      keyExtractor={item => item.name}
    />
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#203444',
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    padding: 10,
    elevation: 5,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  stars: {
    flexDirection: 'column',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});
