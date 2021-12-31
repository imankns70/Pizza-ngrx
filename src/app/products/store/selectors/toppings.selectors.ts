import { createSelector } from "@ngrx/store";
import * as fromRoot from '../../../store/';
import * as fromFeature from '../reducers';
import * as fromtoppings from '../reducers/toppings.reducer';
import { Topping } from "../../models/topping.model";


export const getToppingsState = createSelector(
    fromFeature.getProductState,
    (state: fromFeature.ProductsState) => state.toppings
);


export const getToppingsEntities = createSelector(
    getToppingsState,
    fromtoppings.getToppingEntities
);

export const getSelectedToppings = createSelector(
    getToppingsState,
    fromtoppings.GetSelectedToppings
);

export const getAllToppings = createSelector(
    getToppingsEntities,
    entities => {
        return Object.keys(entities).map(id => entities[parseInt(id, 10)])
    }
);

export const getToppingsLoaded = createSelector(
    getToppingsState,
    fromtoppings.getToppingLoaded
);

export const getToppingsLoading = createSelector(
    getToppingsState,
    fromtoppings.getToppingLoading
);