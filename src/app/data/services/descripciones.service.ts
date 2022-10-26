import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Descripciones, ResponseDescripcion, ResponseDescripciones} from "../models/descripciones";

@Injectable({
  providedIn: 'root'
})
export class DescripcionesService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/`;
    this.action = `descripciones`;
  }

  async getAll(): Promise<ResponseDescripciones> {
    const result$ = this.http.get<ResponseDescripciones>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseDescripcion> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseDescripcion>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Descripciones): Promise<ResponseDescripcion> {
    const result$ = this.http.post<ResponseDescripcion>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Descripciones): Promise<ResponseDescripcion> {
    const result$ = this.http.put<ResponseDescripcion>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Descripciones): Promise<ResponseDescripcion> {
    const action = `${this.action}/${body.codigo}`;
    const result$ = this.http.delete<ResponseDescripcion>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

