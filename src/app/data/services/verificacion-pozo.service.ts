import { Injectable } from '@angular/core';
import {lastValueFrom, map, Observable} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ResponsePozo} from '../models/pozos';

@Injectable({
  providedIn: 'root'
})
export class VerificacionPozoService extends ApiCustomer {

  constructor(private http: HttpClient,) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `pozo/`;
  }

  async getByPozo(pozo: string): Promise<ResponsePozo> {
    const action = `${pozo}`;
    const result$ = this.http.get<ResponsePozo>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

}

