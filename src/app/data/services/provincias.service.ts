import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Areas, ResponseArea, ResponseAreas} from '../models/areas';
import {ResponsePrograma} from "../models/programas";
import {Provincias, ResponseProvincia, ResponseProvincias} from "../models/provincias";

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `provincias`;
  }

  async getAll(): Promise<ResponseProvincias> {
    const result$ = this.http.get<ResponseProvincias>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseProvincia> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseProvincia>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Provincias): Promise<ResponseProvincia> {
    const result$ = this.http.post<ResponseProvincia>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Provincias): Promise<ResponseProvincia> {
    const result$ = this.http.put<ResponseProvincia>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Provincias): Promise<ResponseProvincia> {
    const action = `${this.action}/${body.codProv}`;
    const result$ = this.http.delete<ResponseProvincia>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

