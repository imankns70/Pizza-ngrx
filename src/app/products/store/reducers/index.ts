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

export const getPizzasEntities = createSelector(
    getPizzaState,
    fromPizzas.getPizzasEntities);

export const getAllPizzas = createSelector(
    getPizzasEntities,
    (entities) => {
        return Object.keys(entities).map(id => entities[parseInt(id,10)])
    }
)
export const getPizzasLoaded = createSelector(
    getPizzaState,
    fromPizzas.getPizzaLoaded);

export const getPizzasLoading = createSelector(
    getPizzaState,
    fromPizzas.getPizzaLoading
);