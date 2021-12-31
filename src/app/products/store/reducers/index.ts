import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { from } from 'rxjs';

import * as fromPizzas from './Pizzas.reducer';
import * as fromToppings from './toppings.reducer';

export interface ProductsState {
    pizzas: fromPizzas.PizzaState,
    toppings:fromToppings.ToppingsState
}
 

export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer,
    toppings:fromToppings.reducer

};

export const getProductState = createFeatureSelector<ProductsState>('products');

 