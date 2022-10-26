import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {LitofacieColores, ResponseLitofacieColor, ResponseLitofacieColores } from '../models/litofacie-colores';
import {Litologias, ResponseLitologia, ResponseLitologias} from "../models/litologias";

@Injectable({
  providedIn: 'root'
})
export class LitologiasService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `litologias`;
  }

  async getAll(): Promise<ResponseLitologias> {
    const result$ = this.http.get<ResponseLitologias>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseLitologia> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseLitologia>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Litologias): Promise<ResponseLitologia> {
    const result$ = this.http.post<ResponseLitologia>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Litologias): Promise<ResponseLitologia> {
    const result$ = this.http.put<ResponseLitologia>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Litologias): Promise<ResponseLitologia> {
    const action = `${this.action}/${body.codLitologia}`;
    const result$ = this.http.delete<ResponseLitologia>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

