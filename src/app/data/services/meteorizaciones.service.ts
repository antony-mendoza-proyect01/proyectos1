import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Caudales, ResponseCaudal, ResponseCaudales} from "../models/caudales";
import {Meteorizaciones, ResponseMeteorizacion, ResponseMeteorizaciones} from "../models/meterorizaciones";

@Injectable({
  providedIn: 'root'
})
export class MeteorizacionesService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `meteorizaciones`;
  }

  async getAll(): Promise<ResponseMeteorizaciones> {
    const result$ = this.http.get<ResponseMeteorizaciones>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseMeteorizacion> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseMeteorizacion>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Meteorizaciones): Promise<ResponseMeteorizacion> {
    const result$ = this.http.post<ResponseMeteorizacion>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Meteorizaciones): Promise<ResponseMeteorizacion> {
    const result$ = this.http.put<ResponseMeteorizacion>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Meteorizaciones): Promise<ResponseMeteorizacion> {
    const action = `${this.action}/${body.codMeteorizacion}`;
    const result$ = this.http.delete<ResponseMeteorizacion>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

