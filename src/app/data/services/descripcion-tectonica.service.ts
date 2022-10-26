import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map, of} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {
  DescripcionTectonica,
  ResponseDescipcionTectonica,
  ResponseDescipcionTectonicas
} from '../models/descripcion-tectonica';



@Injectable({
  providedIn: 'root'
})
export class DescipcionTectonicaService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `descripcionTectonica`;
  }

  async getAll(): Promise<ResponseDescipcionTectonicas> {
    const result$ = this.http.get<ResponseDescipcionTectonicas>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
    // console.log(RESPONSE);
    // return await lastValueFrom( of(RESPONSE));
  }

  async getById(descripcionId: string): Promise<ResponseDescipcionTectonica> {
    const action = `${this.action}/${descripcionId}`;
    const result$ = this.http.get<ResponseDescipcionTectonica>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: DescripcionTectonica): Promise<ResponseDescipcionTectonica> {
    const result$ = this.http.post<ResponseDescipcionTectonica>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: DescripcionTectonica): Promise<ResponseDescipcionTectonica> {
    const result$ = this.http.put<ResponseDescipcionTectonica>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async delete(body: DescripcionTectonica): Promise<ResponseDescipcionTectonica> {
    const action = `${this.action}/${body.codDesTec}`;
    const result$ = this.http.delete<ResponseDescipcionTectonica>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}


