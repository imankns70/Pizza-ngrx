import * as fromPizzas from '../actions/pizzas.action'
import { Pizza } from "../../models/pizza.model";

export interface PizzaState {
    data: Pizza[],
    loaded: boolean,
    loading: boolean,

}

export const initialState: PizzaState = {

    data: [
        {
            "name": "Blazin' Inferno",
            "toppings": [
              {
                "id": 10,
                "name": "pepperoni"
              },
              {
                "id": 9,
                "name": "pepper"
              },
              {
                "id": 3,
                "name": "basil"
              },
              {
                "id": 4,
                "name": "chili"
              },
              {
                "id": 7,
                "name": "olive"
              },
              {
                "id": 2,
                "name": "bacon"
              }
            ],
            "id": 1
          }
    ],
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

            return {
                ...state,
                loaded: true,
                loading: false
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

export const getPizzaLoading= (state:PizzaState) => state.loading;
export const getPizzaLoaded= (state:PizzaState) => state.loaded;
export const getPizzas= (state:PizzaState) => state.data;

 