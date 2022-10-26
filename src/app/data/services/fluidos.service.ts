import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Caudales, ResponseCaudal, ResponseCaudales} from "../models/caudales";
import {Fluidos, ResponseFluido, ResponseFluidos} from '../models/fluidos';

@Injectable({
  providedIn: 'root'
})
export class FluidosService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/`;
    this.action = `fluidos`;
  }

  async getAll(): Promise<ResponseFluidos> {
    const result$ = this.http.get<ResponseFluidos>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseFluido> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseFluido>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Fluidos): Promise<ResponseFluido> {
    const result$ = this.http.post<ResponseFluido>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Fluidos): Promise<ResponseFluido> {
    const result$ = this.http.put<ResponseFluido>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Fluidos): Promise<ResponseFluido> {
    const action = `${this.action}/${body.codigo}`;
    const result$ = this.http.delete<ResponseFluido>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

