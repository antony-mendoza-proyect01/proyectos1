import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Areas, ResponseArea, ResponseAreas} from '../models/areas';
import {ResponseTipoPerforacion, ResponseTipoPerforaciones, TipoPerforaciones } from '../models/tipo-perforaciones';

@Injectable({
  providedIn: 'root'
})
export class TipoPerforacionesService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `tiposPerforaciones`;
  }

  async getAll(): Promise<ResponseTipoPerforaciones> {
    const result$ = this.http.get<ResponseTipoPerforaciones>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseTipoPerforacion> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseTipoPerforacion>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: TipoPerforaciones): Promise<ResponseTipoPerforacion> {
    const result$ = this.http.post<ResponseTipoPerforacion>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: TipoPerforaciones): Promise<ResponseTipoPerforacion> {
    const result$ = this.http.put<ResponseTipoPerforacion>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: TipoPerforaciones): Promise<ResponseTipoPerforacion> {
    const action = `${this.action}/${body.codTipoPerforacion}`;
    const result$ = this.http.delete<ResponseTipoPerforacion>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

