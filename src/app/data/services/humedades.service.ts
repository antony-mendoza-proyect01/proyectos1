import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Humedades, ResponseHumedad, ResponseHumedades} from "../models/humedades";

@Injectable({
  providedIn: 'root'
})
export class HumedadesService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `humedades`;
  }

  async getAll(): Promise<ResponseHumedades> {
    const result$ = this.http.get<ResponseHumedades>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseHumedad> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseHumedad>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Humedades): Promise<ResponseHumedad> {
    const result$ = this.http.post<ResponseHumedad>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Humedades): Promise<ResponseHumedad> {
    const result$ = this.http.put<ResponseHumedad>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Humedades): Promise<ResponseHumedad> {
    const action = `${this.action}/${body.codHumedad}`;
    const result$ = this.http.delete<ResponseHumedad>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

