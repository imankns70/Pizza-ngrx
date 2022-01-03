import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";

import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { tap, filter, take, switchMap, catchError } from "rxjs/operators";

import * as fromStore from '../store';

@Injectable()

export class ToppingsGuard implements CanActivate {

    constructor(private store: Store<fromStore.ProductsState>) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.checkStore().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        )
    }


    checkStore(): Observable<boolean> {
        return this.store.select(fromStore.getToppingsLoaded)
            .pipe(
                tap(loaded => {
             
                    if (!loaded) {

                        this.store.dispatch(new fromStore.LoadToppings())
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
