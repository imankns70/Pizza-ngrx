import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { from } from 'rxjs';

import * as fromPizzas from './Pizzas.reducer';

export interface ProductsState {
    pizzas: fromPizzas.PizzaState
}


export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer
}

export const getProductState = createFeatureSelector<ProductsState>('products');

// pizzas state

export const getPizzaState = createSelector(
    getProductState,
    (state: ProductsState) => state.pizzas
);

export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);

export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzaLoaded);

export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzaLoading);