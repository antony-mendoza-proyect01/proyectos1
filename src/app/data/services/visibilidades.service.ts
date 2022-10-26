import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {ResponseVisibilidad, ResponseVisibilidades, Visibilidades } from '../models/visibilidades';

@Injectable({
  providedIn: 'root'
})
export class VisibilidadesService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `visibilidades`;
  }

  async getAll(): Promise<ResponseVisibilidades> {
    const result$ = this.http.get<ResponseVisibilidades>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseVisibilidad> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseVisibilidad>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Visibilidades): Promise<ResponseVisibilidad> {
    const result$ = this.http.post<ResponseVisibilidad>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Visibilidades): Promise<ResponseVisibilidad> {
    const result$ = this.http.put<ResponseVisibilidad>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Visibilidades): Promise<ResponseVisibilidad> {
    const action = `${this.action}/${body.codVisibilidad}`;
    const result$ = this.http.delete<ResponseVisibilidad>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

