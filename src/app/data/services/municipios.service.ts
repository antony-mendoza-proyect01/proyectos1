import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Municipios, ResponseMunicipio, ResponseMunicipios} from "../models/municipios";

@Injectable({
  providedIn: 'root'
})
export class MunicipiosService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/`;
    this.action = `municipios`;
  }

  async getAll(): Promise<ResponseMunicipios> {
    const result$ = this.http.get<ResponseMunicipios>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseMunicipio> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseMunicipio>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Municipios): Promise<ResponseMunicipio> {
    const result$ = this.http.post<ResponseMunicipio>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Municipios): Promise<ResponseMunicipio> {
    const result$ = this.http.put<ResponseMunicipio>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Municipios): Promise<ResponseMunicipio> {
    const action = `${this.action}/${body.codigo}`;
    const result$ = this.http.delete<ResponseMunicipio>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

