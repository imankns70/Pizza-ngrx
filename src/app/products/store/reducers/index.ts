import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { from } from 'rxjs';

import * as fromPizzas from './Pizzas.reducer';

export interface ProductsState {
    pizzas: fromPizzas.PizzaState
}
 

export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer
}

export const getProductState = createFeatureSelector<ProductsState>('products');

 