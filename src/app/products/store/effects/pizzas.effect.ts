import { Injectable } from "@angular/core";
import { Effect, Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { ApiResult } from "../../models/api-result";
import { Pizza } from "../../models/pizza.model";
import { PizzasService } from "../../services";
import * as pizzaActions from '../actions/pizzas.action'
@Injectable()
export class PizzasEffects {

    constructor(
        private action$: Actions,
        private pizzaService: PizzasService
    ) {

    }

    loadPizzas$ = createEffect(() => this.action$.pipe(
        ofType(pizzaActions.LOAD_PIZZAS),
        switchMap(() => {
            return this.pizzaService.getPizzas().pipe(
                map((pizzas: Pizza[]) => new pizzaActions.LoadPizzasSuccess(pizzas)),
                catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
            )
        })
    )

    )
}
