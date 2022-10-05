/* eslint-disable prettier/prettier */
import { produtos } from '../mock/list';
import { stores } from './../mock/list';
import { Product } from './../model/product';
import { Store } from './../model/store';

export const getProducts = (): Product[] => {
  return produtos;
};

export const getStores = (): Store[] => {
  return stores.sort((a, b) => b.starsNumber - a.starsNumber);
};

export const getBestStores = (criterion: number = 0): Store[] => {
  return stores
    .filter(store => store.starsNumber >= criterion)
    .sort((a, b) => b.starsNumber - a.starsNumber);
};

export const getProductByStore = (idLoja: number) => {
  return produtos.filter(p => p.idLoja === idLoja);
};
