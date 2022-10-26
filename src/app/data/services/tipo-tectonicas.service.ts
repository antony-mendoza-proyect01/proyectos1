import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {ResponseTipoTectonica, ResponseTipoTectonicas, TipoTectonicas} from "../models/tipo-tectonica";

@Injectable({
  providedIn: 'root'
})
export class TipoTectonicasService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `tiposTectonicas`;
  }

  async getAll(): Promise<ResponseTipoTectonicas> {
    const result$ = this.http.get<ResponseTipoTectonicas>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(tipoTectonicasId: string): Promise<ResponseTipoTectonica> {
    const action = `${this.action}/${tipoTectonicasId}`;
    const result$ = this.http.get<ResponseTipoTectonica>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: TipoTectonicas): Promise<ResponseTipoTectonica> {
    const result$ = this.http.post<ResponseTipoTectonica>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: TipoTectonicas): Promise<ResponseTipoTectonica> {
    const result$ = this.http.put<ResponseTipoTectonica>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: TipoTectonicas): Promise<ResponseTipoTectonica> {
    const action = `${this.action}/${body.codTecTipo}`;
    const result$ = this.http.delete<ResponseTipoTectonica>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

