/* eslint-disable prettier/prettier */
import { NavigationContainerRef, useNavigation } from '@react-navigation/native';
import React from 'react';

import { StoreList } from '../../components/storesList';
import { getBestStores } from '../../services';
import { RootStackParamList } from '../home';

export const BestStoresList = () => {
  const navigation =
    useNavigation<NavigationContainerRef<RootStackParamList>>();

  return <StoreList list={getBestStores(3.3)} navigation={navigation} />;
};
