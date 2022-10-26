import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {CalibracionDensidad, ResponseCalibracionDensidad, ResponseCalibracionDensidades} from "../models/calibracion-densidad";


@Injectable({
  providedIn: 'root'
})
export class CalibracionDensidadService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/`;
    this.action = `areas`;
  }

  async getAll(): Promise<ResponseCalibracionDensidades> {
    const result$ = this.http.get<ResponseCalibracionDensidades>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(id: string): Promise<ResponseCalibracionDensidad> {
    const action = `${this.action}/${id}`;
    const result$ = this.http.get<ResponseCalibracionDensidad>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: CalibracionDensidad): Promise<ResponseCalibracionDensidad> {
    const result$ = this.http.post<ResponseCalibracionDensidad>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: CalibracionDensidad): Promise<ResponseCalibracionDensidad> {
    const result$ = this.http.put<ResponseCalibracionDensidad>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: CalibracionDensidad): Promise<ResponseCalibracionDensidad> {
    const action = `${this.action}/${body.id}`;
    const result$ = this.http.delete<ResponseCalibracionDensidad>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

