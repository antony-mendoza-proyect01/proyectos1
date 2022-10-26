import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {ContratoPerforacionAjustesDesviacion,
  ResponseContratoPerforacionAjustesDesviacion, ResponseContratoPerforacionAjustesDesviaciones} from "../models/ajustes-desviacion";
import {ResponseCategoriasAjustes} from '../models/categorias-ajuste';

@Injectable({
  providedIn: 'root'
})
export class ContratosAjustesDesviacionService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/contratosPerforacion/`;
    this.action = `factoresAjustes`;
  }

  async getAll(): Promise<ResponseContratoPerforacionAjustesDesviaciones> {
    const result$ = this.http.get<ResponseContratoPerforacionAjustesDesviaciones>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(categoriasAjuste: string): Promise<ResponseContratoPerforacionAjustesDesviacion> {
    const action = `${this.action}/${categoriasAjuste}`;
    const result$ = this.http.get<ResponseContratoPerforacionAjustesDesviacion>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: ContratoPerforacionAjustesDesviacion): Promise<ResponseContratoPerforacionAjustesDesviacion> {
    const result$ = this.http.post<ResponseContratoPerforacionAjustesDesviacion>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: ContratoPerforacionAjustesDesviacion): Promise<ResponseContratoPerforacionAjustesDesviacion> {
    const result$ = this.http.put<ResponseContratoPerforacionAjustesDesviacion>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: ContratoPerforacionAjustesDesviacion): Promise<ResponseContratoPerforacionAjustesDesviacion> {
    const action = `${this.action}/${body.codigo}`;
    const result$ = this.http.delete<ResponseContratoPerforacionAjustesDesviacion>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getByCodContratoTipoPozo(codContrato: string, tipoPozo: string): Promise<ResponseContratoPerforacionAjustesDesviaciones> {
    const action = `${this.action}/${codContrato}/${tipoPozo}`;
    const result$ = this.http.get<ResponseContratoPerforacionAjustesDesviaciones>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getByCategoriaAjuste(): Promise<ResponseCategoriasAjustes> {
    const action = `${this.action}/categoriasAjuste`;
    const result$ = this.http.get<ResponseCategoriasAjustes>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

