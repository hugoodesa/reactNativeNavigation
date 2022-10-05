/* eslint-disable prettier/prettier */
import { Product } from '../model/product';
import { Store } from './../model/store';

export const produtos: Product[] = [
  {idLoja: 1, name: 'Notebok', price: 3800.0, qtd: 3},
  {idLoja: 1, name: 'Teclado', price: 550.0, qtd: 2},
  {idLoja: 1, name: 'Caneca', price: 30.0, qtd: 1},
  {idLoja: 2, name: 'Nintendo Switch', price: 3000.0, qtd: 3},
  {idLoja: 2, name: 'Controle ps4', price: 120.0, qtd: 2},
  {idLoja: 2, name: 'Garrafa dagua', price: 10.0, qtd: 1},
  {idLoja: 3, name: 'TV', price: 3154.55, qtd: 3},
  {idLoja: 4, name: 'Cadeira', price: 1100.11, qtd: 2},
  {idLoja: 2, name: 'Mesa', price: 420, qtd: 1},
];

export const stores: Store[] = [
  {id: 1, distance: 45, name: 'Kabum', starsNumber: 4.1},
  {id: 2, distance: 20, name: 'Pichau', starsNumber: 4.4},
  {id: 3, distance: 22, name: 'Intel', starsNumber: 3.3},
  {id: 4, distance: 32, name: 'Nvidia', starsNumber: 5},
  {id: 5, distance: 54, name: 'Lenovo', starsNumber: 3},
];
