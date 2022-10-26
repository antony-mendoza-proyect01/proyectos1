import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Contratos, ResponseContrato, ResponseContratos} from '../models/contratos';

@Injectable({
  providedIn: 'root'
})
export class ContratosService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/`;
    this.action = `contratos`;
  }

  async getAll(): Promise<ResponseContratos> {
    const result$ = this.http.get<ResponseContratos>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseContrato> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseContrato>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Contratos): Promise<ResponseContrato> {
    const result$ = this.http.post<ResponseContrato>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Contratos): Promise<ResponseContrato> {
    const result$ = this.http.put<ResponseContrato>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async delete(body: Contratos): Promise<ResponseContrato> {
    const action = `${this.action}/${body.codigo}`;
    const result$ = this.http.delete<ResponseContrato>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

