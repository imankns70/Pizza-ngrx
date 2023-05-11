import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { Pizza } from "../../models/pizza.model";


import * as fromRoot from '../../../store';
import * as pizzaActions from '../actions/pizzas.action';
import * as fromServices from "../../services";

@Injectable()
export class PizzasEffects {

    constructor(
        private action$: Actions,
        private pizzaService: fromServices.PizzasService
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

    createPizza$ = createEffect(() => this.action$.pipe(
        ofType(pizzaActions.CREATE_PIZZA),
        map((action: pizzaActions.CreatePizza) => action.payload),
        switchMap(pizza => {
            return this.pizzaService.createPizza(pizza).pipe(
                map(pizza => new pizzaActions.CreatePizzaSuccess(pizza)),
                catchError(error => of(new pizzaActions.CreatePizzaFail(error)))
            )
        })
    )
    );

    // createPizzaSuccess$ = createEffect(() => this.action$.pipe(
    //     ofType(pizzaActions.CREATE_PIZZA_SUCCESS),
    //     map((action: pizzaActions.CreatePizzaSuccess) => action.payload),
    //     map(pizza => new fromRoot.Go(
    //         {
    //             path: ['/products', pizza.id],
    //         }
    //     ))
    // ))

    updatePizza$ = createEffect(() => this.action$.pipe(
        ofType(pizzaActions.UPDATE_PIZZA),
        map((action: pizzaActions.UpdatePizza) => action.payload),
        switchMap(pizza => {
            return this.pizzaService.updatePizza(pizza).pipe(
                map(pizza => new pizzaActions.UpdatePizzaSuccess(pizza)),
                catchError(error => of(new pizzaActions.UpdatePizzaFail(error)))
            )
        })
    ))
    removePizza$ = createEffect(() => this.action$.pipe(
        ofType(pizzaActions.REMOVE_PIZZA),
        map((action: pizzaActions.RemovePizza) => action.payload),
        switchMap(pizza => {
            return this.pizzaService.removePizza(pizza).pipe(
                map(() => new pizzaActions.RemovePizzaSuccess(pizza)),
                catchError(error => of(new pizzaActions.RemovePizzaFail(error)))
            )
        })

    )
    )
    // handle create and update and remove the pizza
    handlePizzaSuccess$ = createEffect(() => this.action$.pipe(
        ofType(
            pizzaActions.CREATE_PIZZA_SUCCESS,
            pizzaActions.UPDATE_PIZZA_SUCCESS,
            pizzaActions.REMOVE_PIZZA_SUCCESS
        ),
        map(pizza => {
            return new fromRoot.Go(
                {
                    path: ['/products']
                }
            )
        })
    )) 
}
