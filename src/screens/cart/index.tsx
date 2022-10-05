/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, Text } from 'react-native';
import { useRecoilState } from 'recoil';

import { cart } from '../../atom';

export const Cart: React.FC = (): JSX.Element => {
  const [cartState] = useRecoilState(cart);

  const EmptyCart = (): JSX.Element => {
    return <Text>O carrinho está vazio</Text>;
  };

  const ListaDeProdutos = (): JSX.Element => {
    return (
      <FlatList
        data={cartState}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={item => item.name}
      />
    );
  };

  return cartState.length > 0 ? <ListaDeProdutos /> : <EmptyCart />;
};
