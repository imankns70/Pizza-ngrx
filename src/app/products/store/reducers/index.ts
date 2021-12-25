import { ActionReducerMap } from '@ngrx/store';

import * as fromPizzas from './Pizzas.reducer';

export interface ProductsState {
    pizzas: fromPizzas.PizzaState
}


export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer
}