import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


import { Topping } from '../models/topping.model';
import { ApiResult } from '../models/api-result';

@Injectable()
export class ToppingsService {
  apiUrl = 'https://localhost:44341/api/pizza';
  //apiUrl = 'https://localhost:44395/api/pizza';

  constructor(private http: HttpClient) { }

  getToppings(): Observable<Topping[]> {
    return this.http
      .get<ApiResult>(`${this.apiUrl}/GetToppings`)
      .pipe(
        map((apiResult: ApiResult) => apiResult.data),
        map((toppings: Topping[]) => toppings),
      )
        //catchError((error: any) => throwError(error.json())));
  }



}
