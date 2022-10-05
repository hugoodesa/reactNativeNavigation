/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList } from 'react-native';

import { Product } from '../../model/product';
import { Card } from '../card';

type Props = {
  list: Product[];
};

export const ProductList = ({list}: Props) => {
  return (
    <>
      <FlatList
        data={list}
        renderItem={({item}) => <Card produto={item} />}
        keyExtractor={item => item.name}
      />
    </>
  );
};
