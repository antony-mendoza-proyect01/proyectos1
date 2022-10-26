import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Granos, ResponseGrano, ResponseGranos } from '../models/granos';

@Injectable({
  providedIn: 'root'
})
export class GranosService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `granos`;
  }

  async getAll(): Promise<ResponseGranos> {
    const result$ = this.http.get<ResponseGranos>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseGrano> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseGrano>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Granos): Promise<ResponseGrano> {
    const result$ = this.http.post<ResponseGrano>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Granos): Promise<ResponseGrano> {
    const result$ = this.http.put<ResponseGrano>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Granos): Promise<ResponseGrano> {
    const action = `${this.action}/${body.codGrano}`;
    const result$ = this.http.delete<ResponseGrano>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

