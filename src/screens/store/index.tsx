/* eslint-disable prettier/prettier */
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import BtnVoltar from '../../../assets/svg/arrowLeft.svg';
import { ProductList } from '../../components/productsList';
import { Store } from '../../model/store';
import { getProductByStore } from '../../services';

export const StoreComponent = () => {
  /* const BtnVoltar = require('../../../assets/svg/arrowLeft.svg'); */
  const navigation = useNavigation();
  const route = useRoute();
  const {params} = route;

  const voltar = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={style.header}>
        <TouchableOpacity onPress={voltar}>
          <BtnVoltar style={style.botaoVoltar} />
        </TouchableOpacity>
      </View>
      <Text style={style.title}>{(params as Store).name}</Text>

      <ProductList list={getProductByStore((params as Store).id)} />
    </>
  );
};

const style = StyleSheet.create({
  header: {
    height: 120,
    backgroundColor: '#2e2727',
    borderBottomWidth: 3,
    borderBottomColor: '#4db84b',
  },
  title: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#e4dcdc',
    alignSelf: 'center',
    marginVertical: 30,
  },
  botaoVoltar: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
});
