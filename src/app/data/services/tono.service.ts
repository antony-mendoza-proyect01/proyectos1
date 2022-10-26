import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {ResponseTono, ResponseTonos, Tonos } from '../models/tono';

@Injectable({
  providedIn: 'root'
})
export class TonosService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `tonos`;
  }

  async getAll(): Promise<ResponseTonos> {
    const result$ = this.http.get<ResponseTonos>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseTono> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseTono>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Tonos): Promise<ResponseTono> {
    const result$ = this.http.post<ResponseTono>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Tonos): Promise<ResponseTono> {
    const result$ = this.http.put<ResponseTono>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Tonos): Promise<ResponseTono> {
    const action = `${this.action}/${body.codTono}`;
    const result$ = this.http.delete<ResponseTono>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

