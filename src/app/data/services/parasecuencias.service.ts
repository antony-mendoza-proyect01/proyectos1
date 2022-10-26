import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Parasecuencias, ResponseParasecuencia, ResponseParasecuencias} from '../models/parasecuencias';

@Injectable({
  providedIn: 'root'
})
export class ParasecuenciasService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `parasecuencias`;
  }

  async getAll(): Promise<ResponseParasecuencias> {
    const result$ = this.http.get<ResponseParasecuencias>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseParasecuencia> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseParasecuencia>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Parasecuencias): Promise<ResponseParasecuencia> {
    const result$ = this.http.post<ResponseParasecuencia>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Parasecuencias): Promise<ResponseParasecuencia> {
    const result$ = this.http.put<ResponseParasecuencia>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Parasecuencias): Promise<ResponseParasecuencia> {
    const action = `${this.action}/${body.codParasec}`;
    const result$ = this.http.delete<ResponseParasecuencia>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

