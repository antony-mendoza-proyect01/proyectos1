import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Espaciamiento, ResponseEspaciamiento, ResponseEspaciamientos} from '../models/espaciamiento';

@Injectable({
  providedIn: 'root'
})
export class EspaciamientoService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `espaciamientos`;
  }

  async getAll(): Promise<ResponseEspaciamientos> {
    const result$ = this.http.get<ResponseEspaciamientos>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseEspaciamiento> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseEspaciamiento>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Espaciamiento): Promise<ResponseEspaciamiento> {
    const result$ = this.http.post<ResponseEspaciamiento>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Espaciamiento): Promise<ResponseEspaciamiento> {
    const result$ = this.http.put<ResponseEspaciamiento>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Espaciamiento): Promise<ResponseEspaciamiento> {
    const action = `${this.action}/${body.codEspaciamiento}`;
    const result$ = this.http.delete<ResponseEspaciamiento>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

