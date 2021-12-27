import * as fromPizzas from '../actions/pizzas.action'
import { Pizza } from "../../models/pizza.model";

export interface PizzaState {
  entities: { [id: number]: Pizza },
  loaded: boolean,
  loading: boolean,

}

export const initialState: PizzaState = {

  entities: {},
  loaded: false,
  loading: false
}

export function reducer(state = initialState, action: fromPizzas.PizzasAction): PizzaState {

  switch (action.type) {
    case fromPizzas.LOAD_PIZZAS:
      {
        return {
          ...state,
          loading: true
        }
      }


    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      const pizzas = action.payload;
      const entities = pizzas.reduce((entities: { [id: number]: Pizza }, pizza) => {
        return {
          ...entities,
          [pizza.id]: pizza
        }
      },
        {
          ...state.entities
        }
      )
      return {
        ...state,
        loaded: true,
        loading: false,
        entities
      }
    }

    case fromPizzas.LOAD_PIZZAS_FAIL: {

      return {
        ...state,
        loading: false,
        loaded: false
      }
    }

    default:
      return state;
  }



}

export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzaLoading = (state: PizzaState) => state.loading;
export const getPizzaLoaded = (state: PizzaState) => state.loaded;

