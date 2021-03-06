import { Action } from "@ngrx/store";


import { Topping } from "../../models/topping.model";


export const LOAD_TOPPINGS = '[Products] load Toppings';
export const LOAD_TOPPINGS_SUCCESS = '[Products] load Toppings Success';
export const LOAD_TOPPINGS_FAIL = '[Products] load Toppings Fail';

export const VISAULISE_TOPPINGS = '[Products] Visualise Toppings';


export class LoadToppings implements Action {
    readonly type = LOAD_TOPPINGS;
    constructor() { }
}

export class LoadToppingsFail implements Action {
    readonly type = LOAD_TOPPINGS_FAIL;
    constructor(public payload: any) { }
}

export class LoadToppingsSuccess implements Action {
    readonly type = LOAD_TOPPINGS_SUCCESS;
    constructor(public payload: Topping[]) { }
}
export class VisualiseToppings implements Action {
    readonly type = VISAULISE_TOPPINGS;
    constructor(public payload: number[]) { }
}

export type ToppingsAction =
    | LoadToppings
    | LoadToppingsFail
    | LoadToppingsSuccess
    | VisualiseToppings
    