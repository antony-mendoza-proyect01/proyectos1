import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {ContratoPerforacionAjustesRecuperacion,
  ResponseContratoPerforacionAjustesRecuperacion, ResponseContratoPerforacionAjustesRecuperaciones} from "../models/ajustes-porcentaje-recuperacion";

@Injectable({
  providedIn: 'root'
})
export class ContratoRecuperacionService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/contratosPerforacion/`;
    this.action = `bonifRecuperacion`;
  }

  async getAll(): Promise<ResponseContratoPerforacionAjustesRecuperaciones> {
    const result$ = this.http.get<ResponseContratoPerforacionAjustesRecuperaciones>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseContratoPerforacionAjustesRecuperacion> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseContratoPerforacionAjustesRecuperacion>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: ContratoPerforacionAjustesRecuperacion): Promise<ResponseContratoPerforacionAjustesRecuperacion> {
    const result$ = this.http.post<ResponseContratoPerforacionAjustesRecuperacion>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: ContratoPerforacionAjustesRecuperacion): Promise<ResponseContratoPerforacionAjustesRecuperacion> {
    const result$ = this.http.put<ResponseContratoPerforacionAjustesRecuperacion>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: ContratoPerforacionAjustesRecuperacion): Promise<ResponseContratoPerforacionAjustesRecuperacion> {
    const action = `${this.action}/${body.codigo}`;
    const result$ = this.http.delete<ResponseContratoPerforacionAjustesRecuperacion>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getByCodContratoTipoPozo(codContrato: string, tipoPozo: string): Promise<ResponseContratoPerforacionAjustesRecuperaciones> {
    const action = `${this.action}/${codContrato}/${tipoPozo}`;
    const result$ = this.http.get<ResponseContratoPerforacionAjustesRecuperaciones>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

