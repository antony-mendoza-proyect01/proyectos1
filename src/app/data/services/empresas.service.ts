import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Empresas, ResponseEmpresa, ResponseEmpresas } from '../models/empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/`;
    this.action = `empresas`;
  }

  async getAll(): Promise<ResponseEmpresas> {
    const result$ = this.http.get<ResponseEmpresas>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseEmpresa> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseEmpresa>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Empresas): Promise<ResponseEmpresa> {
    const result$ = this.http.post<ResponseEmpresa>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Empresas): Promise<ResponseEmpresa> {
    const result$ = this.http.put<ResponseEmpresa>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Empresas): Promise<ResponseEmpresa> {
    const action = `${this.action}/${body.codigo}`;
    const result$ = this.http.delete<ResponseEmpresa>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

