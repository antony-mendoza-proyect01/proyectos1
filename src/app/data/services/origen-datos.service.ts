import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {OrigenDatos, ResponseOrigenDato, ResponseOrigenDatos} from "../models/origen-datos";


@Injectable({
  providedIn: 'root'
})
export class OrigenDatosService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `origenDatos`;
  }

  async getAll(): Promise<ResponseOrigenDatos> {
    const result$ = this.http.get<ResponseOrigenDatos>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseOrigenDato> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseOrigenDato>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: OrigenDatos): Promise<ResponseOrigenDato> {
    const result$ = this.http.post<ResponseOrigenDato>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: OrigenDatos): Promise<ResponseOrigenDato> {
    const result$ = this.http.put<ResponseOrigenDato>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: OrigenDatos): Promise<ResponseOrigenDato> {
    const action = `${this.action}/${body.codOrigen}`;
    const result$ = this.http.delete<ResponseOrigenDato>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

