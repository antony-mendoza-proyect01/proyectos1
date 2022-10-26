import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map, of} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {
  DescripcionesLitofacies,
  ResponseDescripcionesLitofacie,
  ResponseDescripcionesLitofacies
} from '../models/descripciones-litofacies';

@Injectable({
  providedIn: 'root'
})
export class DescripcionesLitofaciesService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/`;
    this.action = `descripcionesLitofacies`;
  }

  async getAll(): Promise<ResponseDescripcionesLitofacies> {
    //const result$ = this.http.get<ResponseDescripcionesLitofacies>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    // return await lastValueFrom(result$);
    console.log(RESPONSE);
    return await lastValueFrom( of(RESPONSE));
  }

  async getById(descripcionId: string): Promise<ResponseDescripcionesLitofacie> {
    const action = `${this.action}/${descripcionId}`;
    const result$ = this.http.get<ResponseDescripcionesLitofacie>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: DescripcionesLitofacies): Promise<ResponseDescripcionesLitofacie> {
    const result$ = this.http.post<ResponseDescripcionesLitofacie>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: DescripcionesLitofacies): Promise<ResponseDescripcionesLitofacie> {
    const result$ = this.http.put<ResponseDescripcionesLitofacie>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: DescripcionesLitofacies): Promise<ResponseDescripcionesLitofacie> {
    const action = `${this.action}/${body.id}`;
    const result$ = this.http.delete<ResponseDescripcionesLitofacie>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}


export const DATA_DESCRIPCIONESLITOFACIES: DescripcionesLitofacies[] = [
  {grupo: '2', caracteristicas: 'Laminas carbonosas'},
  {grupo: '3', caracteristicas: 'Laminas de siderita'},
  {grupo: '9', caracteristicas: 'Nodulos de siderita'},
  {grupo: '4', caracteristicas: 'Maciza'},
  {grupo: '8', caracteristicas: 'Bioturbada'},
  {grupo: '7', caracteristicas: 'Calcarea'},
  {grupo: '6', caracteristicas: 'Fragmentos de plantas'},
  {grupo: '1', caracteristicas: 'Micacea'},
  {grupo: '5', caracteristicas: 'Gris claro'},
  {grupo: '5', caracteristicas: 'Gris verdoso'},
  {grupo: '5', caracteristicas: 'Gris medio'},
];
export const RESPONSE = new ResponseDescripcionesLitofacies(DATA_DESCRIPCIONESLITOFACIES);

