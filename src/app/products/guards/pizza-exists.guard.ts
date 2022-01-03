import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { tap, map, filter, take, switchMap } from "rxjs/operators";
import * as fromStore from '../store';
import { Pizza } from "../models/pizza.model";

@Injectable()
export class PizzaExistsGuard implements CanActivate {
    constructor(private store: Store<fromStore.ProductsState>) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        return this.checkStore().pipe(
            switchMap(() => {
                const id = parseInt(route.params.pizzaId, 10);
                return this.hashPizza(id);
            })
        )

    }
    hashPizza(id: number): Observable<boolean> {
        return this.store
            .select(fromStore.getPizzasEntities).pipe(
                map((entities: { [id: number]: Pizza }) => !!entities[id]),
                take(1)
            )
    }
    checkStore(): Observable<boolean> {
        return this.store.select(fromStore.getPizzasLoaded)
            .pipe(
                tap(loaded => {
 
                    if (!loaded) {

                        this.store.dispatch(new fromStore.LoadPizzas())
                    }
                }),
                // if loaded is false then the filter prevents to continue the stream 
                // filter make it sure 100 precent to load pizzas  to continue the stream 
                filter(loaded => loaded),
                // the take makes the stream to be done 
                // do the same subscribtion does
                take(1)

            )
    }
}