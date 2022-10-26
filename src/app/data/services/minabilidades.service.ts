import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Minabilidades, ResponseMinabilidad, ResponseMinabilidades } from '../models/minabilidades';

@Injectable({
  providedIn: 'root'
})
export class MinabilidadesService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `minabilidades`;
  }

  async getAll(): Promise<ResponseMinabilidades> {
    const result$ = this.http.get<ResponseMinabilidades>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseMinabilidad> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseMinabilidad>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Minabilidades): Promise<ResponseMinabilidad> {
    const result$ = this.http.post<ResponseMinabilidad>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Minabilidades): Promise<ResponseMinabilidad> {
    const result$ = this.http.put<ResponseMinabilidad>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Minabilidades): Promise<ResponseMinabilidad> {
    const action = `${this.action}/${body.codMinabilidad}`;
    const result$ = this.http.delete<ResponseMinabilidad>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

