import { PizzasEffects } from './pizzas.effect';
import { ToppingsEffect } from './toopings.effects';


export const effects: any[] = [
    PizzasEffects,
    ToppingsEffect
] 

export * from './pizzas.effect';
export * from './toopings.effects'