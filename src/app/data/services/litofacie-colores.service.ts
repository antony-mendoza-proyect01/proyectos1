import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {LitofacieColores, ResponseLitofacieColor, ResponseLitofacieColores } from '../models/litofacie-colores';

@Injectable({
  providedIn: 'root'
})
export class LitofacieColoresService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `litofaciesColores`;
  }

  async getAll(): Promise<ResponseLitofacieColores> {
    const result$ = this.http.get<ResponseLitofacieColores>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseLitofacieColor> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseLitofacieColor>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: LitofacieColores): Promise<ResponseLitofacieColor> {
    const result$ = this.http.post<ResponseLitofacieColor>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: LitofacieColores): Promise<ResponseLitofacieColor> {
    const result$ = this.http.put<ResponseLitofacieColor>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: LitofacieColores): Promise<ResponseLitofacieColor> {
    const action = `${this.action}/${body.litofacie}`;
    const result$ = this.http.delete<ResponseLitofacieColor>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

