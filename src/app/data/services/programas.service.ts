import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';

import {Programas, ResponsePrograma, ResponseProgramas} from "../models/programas";

@Injectable({
  providedIn: 'root'
})
export class ProgramasService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/`;
    this.action = `programas`;
  }

  async getAll(): Promise<ResponseProgramas> {
    const result$ = this.http.get<ResponseProgramas>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponsePrograma> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponsePrograma>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Programas): Promise<ResponsePrograma> {
    const result$ = this.http.post<ResponsePrograma>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Programas): Promise<ResponsePrograma> {
    const result$ = this.http.put<ResponsePrograma>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Programas): Promise<ResponsePrograma> {
    const action = `${this.action}/${body.codigo}`;
    const result$ = this.http.delete<ResponsePrograma>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

