/* eslint-disable prettier/prettier */
import { NavigationContainerRef, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import { StoreList } from '../../components/storesList';
import { Product } from '../../model/product';
import { getBestStores } from '../../services';
import { RootStackParamList } from '../home';

export const StoresList = () => {
  const {params} = useRoute();

  const [exibirMensagemCompra, setExibirMensagemCompra] =
    useState<boolean>(false);

  const navigation =
    useNavigation<NavigationContainerRef<RootStackParamList>>();

  const produto = params as Product;

  useEffect(() => {
    setExibirMensagemCompra(true);

    setTimeout(() => {
      setExibirMensagemCompra(false);
    }, 3000);
  }, [produto]);

  return (
    <>
      {produto && exibirMensagemCompra && (
        <Text style={style.container}>
          {`Produto ${produto?.name} foi adicionado ao carrinho de compras`}
        </Text>
      )}
      <StoreList list={getBestStores()} navigation={navigation} />
    </>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#73a669',
    marginHorizontal: 5,
    color: '#fff',
    fontWeight: 'bold',
  },
});
