import { createSelector } from "@ngrx/store";

import * as fromRoot from '../../../store/';
import { Pizza } from "../../models/pizza.model";
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/Pizzas.reducer';

export const getPizzaState = createSelector(
    fromFeature.getProductState,
    (state: fromFeature.ProductsState) => state.pizzas
);

export const getPizzasEntities = createSelector(
    getPizzaState,
    fromPizzas.getPizzasEntities);

//retrive selected pizza from entities and router state
export const getSelectedPizza = createSelector(
    getPizzasEntities,
    fromRoot.getRouterState,
    (entities, router): Pizza => {
        return router.state && entities[router.state.params.pizzaId];
    }

)

export const getAllPizzas = createSelector(
    getPizzasEntities,
    (entities) => {
        return Object.keys(entities).map(id => entities[parseInt(id, 10)])
    }
)
export const getPizzasLoaded = createSelector(
    getPizzaState,
    fromPizzas.getPizzaLoaded);

export const getPizzasLoading = createSelector(
    getPizzaState,
    fromPizzas.getPizzaLoading
); 