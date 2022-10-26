import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {
  DescripcionSedimentaria,
  ResponseDescipcionSedimentaria,
  ResponseDescipcionSedimentarias
} from "../models/descripcion-sedimentaria";

@Injectable({
  providedIn: 'root'
})
export class DescripcionSedimentariaService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `descripcionesSedimentarias`;
  }

  async getAll(): Promise<ResponseDescipcionSedimentarias> {
    const result$ = this.http.get<ResponseDescipcionSedimentarias>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseDescipcionSedimentaria> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseDescipcionSedimentaria>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: DescripcionSedimentaria): Promise<ResponseDescipcionSedimentaria> {
    const result$ = this.http.post<ResponseDescipcionSedimentaria>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: DescripcionSedimentaria): Promise<ResponseDescipcionSedimentaria> {
    const result$ = this.http.put<ResponseDescipcionSedimentaria>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: DescripcionSedimentaria): Promise<ResponseDescipcionSedimentaria> {
    const action = `${this.action}/${body.codDesSed}`;
    const result$ = this.http.delete<ResponseDescipcionSedimentaria>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

