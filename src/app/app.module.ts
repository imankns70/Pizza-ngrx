import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

//import { reducers, effects, customSerializer } from './store';
import * as fromStore from './store';


// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

// this would be done dynamically with webpack for builds
 
export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];


// bootstrap
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  {
    path: 'products',
    loadChildren: () => import('../app/products/products.module').then(r => r.ProductsModule)
    // loadChildren: '../products/products.module#ProductsModule',
  },
];
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(fromStore.reducers, { metaReducers }),
    EffectsModule.forRoot(fromStore.effects),
    StoreRouterConnectingModule.forRoot({
      serializer: fromStore.customSerializer
    }),
    environment.development ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [{ provide: RouterStateSerializer, useClass: fromStore.customSerializer }],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
