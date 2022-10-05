/* eslint-disable prettier/prettier */
import { NavigationContainerRef, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRecoilState } from 'recoil';

import { cart } from '../../atom';
import { Product } from '../../model/product';
import { RootStackParamList } from '../../screens/home';

type Props = {
  produto: Product;
};

export const Card: React.FC<Props> = ({produto}): JSX.Element => {
  const navigation =
    useNavigation<NavigationContainerRef<RootStackParamList>>();

  const [cartState, setCartState] = useRecoilState(cart);

  const navegarHome = () => {
    setCartState([...cartState, produto]);

    navigation.navigate('Stores', {...produto});
  };

  return (
    <View style={style.container}>
      <View style={style.upperDescription}>
        <Text style={style.text}>Descrição : {produto.name}</Text>
        <Text style={style.text}>R$ {produto.price}</Text>
      </View>
      <View style={style.lowerDescription}>
        <Text style={style.text}>qtd :{produto.qtd}</Text>

        <TouchableOpacity onPress={navegarHome}>
          <Text style={style.button}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    padding: 5,
  },
  upperDescription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
  lowerDescription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  text: {
    color: '#525050',
    margin: 5,
  },
  button: {
    color: '#d3cece',
    margin: 5,
    fontWeight: 'bold',
    backgroundColor: '#538548',
    padding: 10,
    borderRadius: 5,
    elevation: 0.5,
  },
});
