/* eslint-disable prettier/prettier */
import { atom } from 'recoil';

import { Product } from './../model/product';

export const cart = atom<Product[]>({
  key: 'cart',
  default: [],
});
