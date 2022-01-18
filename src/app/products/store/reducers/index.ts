import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
 

import * as fromPizzasReducer from './pizzas.reducer';
import * as fromToppings from './toppings.reducer';

export interface ProductsState {
    pizzas: fromPizzasReducer.PizzaState,
    toppings:fromToppings.ToppingsState
}
 

export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzasReducer.reducer,
    toppings:fromToppings.reducer

};

export const getProductState = createFeatureSelector<ProductsState>('products');

 