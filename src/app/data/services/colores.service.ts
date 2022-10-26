import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Caudales, ResponseCaudal, ResponseCaudales} from "../models/caudales";
import {Colores, ResponseColor, ResponseColores} from '../models/colores';

@Injectable({
  providedIn: 'root'
})
export class ColoresService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `colores`;
  }

  async getAll(): Promise<ResponseColores> {
    const result$ = this.http.get<ResponseColores>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseColor> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseColor>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Colores): Promise<ResponseColor> {
    const result$ = this.http.post<ResponseColor>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Colores): Promise<ResponseColor> {
    const result$ = this.http.put<ResponseColor>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Colores): Promise<ResponseColor> {
    const action = `${this.action}/${body.codColor}`;
    const result$ = this.http.delete<ResponseColor>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

