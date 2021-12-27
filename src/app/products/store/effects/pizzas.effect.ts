import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { PizzasService } from "../../services";
@Injectable()
export class PizzasEffects {

    constructor(
        private action$: Actions,
        private pizzaService: PizzasService
    ) {

    }
}
