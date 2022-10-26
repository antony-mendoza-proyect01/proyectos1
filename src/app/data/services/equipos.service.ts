import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Equipos, ResponseEquipo, ResponseEquipos} from "../models/equipos";

@Injectable({
  providedIn: 'root'
})
export class EquiposService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/`;
    this.action = `equipos`;
  }

  async getAll(): Promise<ResponseEquipos> {
    const result$ = this.http.get<ResponseEquipos>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseEquipo> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseEquipo>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Equipos): Promise<ResponseEquipo> {
    const result$ = this.http.post<ResponseEquipo>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Equipos): Promise<ResponseEquipo> {
    const result$ = this.http.put<ResponseEquipo>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Equipos): Promise<ResponseEquipo> {
    const action = `${this.action}/${body.codigo}`;
    const result$ = this.http.delete<ResponseEquipo>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

