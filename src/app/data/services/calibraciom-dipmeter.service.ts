import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {CalibracionDipmeter, ResponseCalibracionDipmeter, ResponseCalibracionDipmetes} from "../models/calibraciom-dipmeter";
import {ResponseCategoriasAjustes} from "../models/categorias-ajuste";


@Injectable({
  providedIn: 'root'
})
export class CalibraciomDipmeterService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/`;
    this.action = `areas`;
  }

  async getAll(): Promise<ResponseCalibracionDipmetes> {
    const result$ = this.http.get<ResponseCalibracionDipmetes>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(id: string): Promise<ResponseCalibracionDipmeter> {
    const action = `${this.action}/${id}`;
    const result$ = this.http.get<ResponseCalibracionDipmeter>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: CalibracionDipmeter): Promise<ResponseCalibracionDipmeter> {
    const result$ = this.http.post<ResponseCalibracionDipmeter>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: CalibracionDipmeter): Promise<ResponseCalibracionDipmeter> {
    const result$ = this.http.put<ResponseCalibracionDipmeter>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: CalibracionDipmeter): Promise<ResponseCalibracionDipmeter> {
    const action = `${this.action}/${body.id}`;
    const result$ = this.http.delete<ResponseCalibracionDipmeter>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

}

