import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {
  CalibracionSondaCabezaCable,
  ResponseCalibracionSondaCabezaCable,
  ResponseCalibracionSondaCabezaCables
} from '../models/calibracion-sonda-cabeza-cable';


@Injectable({
  providedIn: 'root'
})
export class CalibracionSondaCabezaCableService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/`;
    this.action = `areas`;
  }

  async getAll(): Promise<ResponseCalibracionSondaCabezaCables> {
    const result$ = this.http.get<ResponseCalibracionSondaCabezaCables>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(id: string): Promise<ResponseCalibracionSondaCabezaCable> {
    const action = `${this.action}/${id}`;
    const result$ = this.http.get<ResponseCalibracionSondaCabezaCable>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: CalibracionSondaCabezaCable): Promise<ResponseCalibracionSondaCabezaCable> {
    const result$ = this.http.post<ResponseCalibracionSondaCabezaCable>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: CalibracionSondaCabezaCable): Promise<ResponseCalibracionSondaCabezaCable> {
    const result$ = this.http.put<ResponseCalibracionSondaCabezaCable>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: CalibracionSondaCabezaCable): Promise<ResponseCalibracionSondaCabezaCable> {
    const action = `${this.action}/${body.id}`;
    const result$ = this.http.delete<ResponseCalibracionSondaCabezaCable>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

