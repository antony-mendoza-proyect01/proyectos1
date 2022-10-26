import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Areas, ResponseArea, ResponseAreas} from '../models/areas';
import {ResponseSonda, ResponseSondas, Sondas} from "../models/sondas";

@Injectable({
  providedIn: 'root'
})
export class SondasService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/`;
    this.action = `sondas`;
  }

  async getAll(): Promise<ResponseSondas> {
    const result$ = this.http.get<ResponseSondas>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseSonda> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseSonda>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Sondas): Promise<ResponseSonda> {
    const result$ = this.http.post<ResponseSonda>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Sondas): Promise<ResponseSonda> {
    const result$ = this.http.put<ResponseSonda>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Sondas): Promise<ResponseSonda> {
    const action = `${this.action}/${body.id}`;
    const result$ = this.http.delete<ResponseSonda>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

