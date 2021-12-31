import { Injectable } from "@angular/core";


import { createEffect, ofType, Actions } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { Topping } from "../../models/topping.model";
import { ToppingsService } from "../../services/";
import * as toppingsAction from '../actions/toppings.action';

@Injectable()

export class ToppingsEffect {

    constructor(
        private action$: Actions,
        private toppingService: ToppingsService
    ) { }

    loadToppings$ = createEffect(() => this.action$.pipe(
        ofType(toppingsAction.LOAD_TOPPINGS),
        switchMap(() => {
            return this.toppingService.getToppings().pipe(
                map((toppings: Topping[]) => new toppingsAction.LoadToppingsSuccess(toppings)),
                catchError(error => of(new toppingsAction.LoadToppingsFail(error)))
            )
        })
    ))
}
