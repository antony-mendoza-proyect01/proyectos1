import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Areas, ResponseArea, ResponseAreas} from '../models/areas';
import {Distritos, ResponseDistrito, ResponseDistritos} from "../models/distritos";

@Injectable({
  providedIn: 'root'
})
export class DistritosService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `distritos`;
  }

  async getAll(): Promise<ResponseDistritos> {
    const result$ = this.http.get<ResponseDistritos>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseDistrito> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseDistrito>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Distritos): Promise<ResponseDistrito> {
    const result$ = this.http.post<ResponseDistrito>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Distritos): Promise<ResponseDistrito> {
    const result$ = this.http.put<ResponseDistrito>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Distritos): Promise<ResponseDistrito> {
    const action = `${this.action}/${body.codDto}`;
    const result$ = this.http.delete<ResponseDistrito>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

