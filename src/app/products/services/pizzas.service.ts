import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs/';
import { catchError, map, pluck, tap } from 'rxjs/operators';


import { Pizza } from '../models/pizza.model';
import { ApiResult } from '../models/api-result';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {
  constructor(private http: HttpClient) { }
  //apiUrl = 'https://localhost:44395/api/pizza';
  apiUrl = 'https://localhost:44341/api/pizza';

  getPizzas(): Observable<Pizza[]> {

    return this.http
      .get<ApiResult>(`${this.apiUrl}`)
      .pipe(
        map((apiResult: ApiResult) => apiResult.data),
        map((pizzas: Pizza[]) => pizzas),
        //catchError((error: any) => throwError(error.json()))
      );
  }

  createPizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .post<ApiResult>(`${this.apiUrl}`, payload)
      .pipe(
        map((apiResult: ApiResult) => apiResult.data),
        map((pizza: Pizza) => pizza)
      )
    //catchError((error: any) => throwError(error.json())));
  }

  updatePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .put<ApiResult>(`${this.apiUrl}`, payload)
      .pipe(
        map((apiResult: ApiResult) => {

          if (apiResult.isSuccess) {
            return apiResult.data;
          } else {
            return console.log(apiResult.message)
          }
        }),
        map(apiResult => payload)
      )
    //catchError((error: any) => throwError(error.json())));
  }

  removePizza(payload: Pizza) {
    
    return this.http
      //.put<ApiResult>(`${this.apiUrl}`, payload)
      .delete<ApiResult>(`${this.apiUrl}/${payload.id}`)
      .pipe(
        tap((apiResult: ApiResult) => {
          if (apiResult.isSuccess) {
            console.log(`sucess::${apiResult.isSuccess}`, apiResult.message.join(','))
          } else {
            console.log(`sucess::${apiResult.isSuccess}`, apiResult.message.join(','))

          }
        }),
        map(()=> payload)
      )
    //catchError((error: any) => throwError(error.json())));
  }
}
