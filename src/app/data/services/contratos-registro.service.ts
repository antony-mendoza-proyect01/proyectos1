import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {ContratosRegistro, ResponseContratosRegistro, ResponseContratosRegistros} from '../models/contratos-registro';

@Injectable({
  providedIn: 'root'
})
export class ContratosRegistroService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/`;
    this.action = `contratosRegistro`;
  }

  async getAll(): Promise<ResponseContratosRegistros> {
    const result$ = this.http.get<ResponseContratosRegistros>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(id: string): Promise<ResponseContratosRegistro> {
    const action = `${this.action}/${id}`;
    const result$ = this.http.get<ResponseContratosRegistro>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: ContratosRegistro): Promise<ResponseContratosRegistro> {
    const result$ = this.http.post<ResponseContratosRegistro>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: ContratosRegistro): Promise<ResponseContratosRegistro> {
    const result$ = this.http.put<ResponseContratosRegistro>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async delete(body: ContratosRegistro): Promise<ResponseContratosRegistro> {
    const action = `${this.action}/${body.codigo}`;
    const result$ = this.http.delete<ResponseContratosRegistro>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

}

