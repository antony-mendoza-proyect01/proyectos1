import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Caudales, ResponseCaudal, ResponseCaudales} from "../models/caudales";

@Injectable({
  providedIn: 'root'
})
export class CaudalesService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/`;
    this.action = `caudales`;
  }

  async getAll(): Promise<ResponseCaudales> {
    const result$ = this.http.get<ResponseCaudales>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseCaudal> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseCaudal>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Caudales): Promise<ResponseCaudal> {
    const result$ = this.http.post<ResponseCaudal>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Caudales): Promise<ResponseCaudal> {
    const result$ = this.http.put<ResponseCaudal>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Caudales): Promise<ResponseCaudal> {
    const action = `${this.action}/${body.codigo}`;
    const result$ = this.http.delete<ResponseCaudal>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

