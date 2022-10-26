import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {
  CalibracionDatosPozoRegistrado,
  ResponseCalibracionDatosPozoRegistrado,
  ResponseCalibracionDatosPozoRegistrados
} from "../models/calibracion-datos-pozo-registrado";


@Injectable({
  providedIn: 'root'
})
export class CalibracionDatosPozoRegistradoService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/`;
    this.action = `areas`;
  }

  async getAll(): Promise<ResponseCalibracionDatosPozoRegistrados> {
    const result$ = this.http.get<ResponseCalibracionDatosPozoRegistrados>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(id: string): Promise<ResponseCalibracionDatosPozoRegistrado> {
    const action = `${this.action}/${id}`;
    const result$ = this.http.get<ResponseCalibracionDatosPozoRegistrado>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: CalibracionDatosPozoRegistrado): Promise<ResponseCalibracionDatosPozoRegistrado> {
    const result$ = this.http.post<ResponseCalibracionDatosPozoRegistrado>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: CalibracionDatosPozoRegistrado): Promise<ResponseCalibracionDatosPozoRegistrado> {
    const result$ = this.http.put<ResponseCalibracionDatosPozoRegistrado>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: CalibracionDatosPozoRegistrado): Promise<ResponseCalibracionDatosPozoRegistrado> {
    const action = `${this.action}/${body.id}`;
    const result$ = this.http.delete<ResponseCalibracionDatosPozoRegistrado>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

