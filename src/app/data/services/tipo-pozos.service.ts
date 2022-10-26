import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Caudales, ResponseCaudal, ResponseCaudales} from "../models/caudales";
import {ResponseTipopozo, ResponseTipopozos, TipoPozos } from '../models/tipo-pozos';

@Injectable({
  providedIn: 'root'
})
export class TipoPozosService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/`;
    this.action = `tiposPozo`;
  }

  async getAll(): Promise<ResponseTipopozos> {
    const result$ = this.http.get<ResponseTipopozos>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseTipopozo> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseTipopozo>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: TipoPozos): Promise<ResponseTipopozo> {
    const result$ = this.http.post<ResponseTipopozo>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: TipoPozos): Promise<ResponseTipopozo> {
    const result$ = this.http.put<ResponseTipopozo>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: TipoPozos): Promise<ResponseTipopozo> {
    const action = `${this.action}/${body.codigo}`;
    const result$ = this.http.delete<ResponseTipopozo>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

