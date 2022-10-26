import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {
  ContratoPerforacionAjustesRegistro,
  ResponseContratoPerforacionAjustesRegistro,
  ResponseContratoPerforacionAjustesRegistros
} from "../models/ajustes-porcentaje-verticalidad";

@Injectable({
  providedIn: 'root'
})
export class ContratosAjustesPorcentajeVerticalidadService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/contratosPerforacion/`;
    this.action = `bonifRegistro`;
  }

  async getAll(): Promise<ResponseContratoPerforacionAjustesRegistros> {
    const result$ = this.http.get<ResponseContratoPerforacionAjustesRegistros>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseContratoPerforacionAjustesRegistro> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseContratoPerforacionAjustesRegistro>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: ContratoPerforacionAjustesRegistro): Promise<ResponseContratoPerforacionAjustesRegistro> {
    const result$ = this.http.post<ResponseContratoPerforacionAjustesRegistro>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: ContratoPerforacionAjustesRegistro): Promise<ResponseContratoPerforacionAjustesRegistro> {
    const result$ = this.http.put<ResponseContratoPerforacionAjustesRegistro>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: ContratoPerforacionAjustesRegistro): Promise<ResponseContratoPerforacionAjustesRegistro> {
    const action = `${this.action}/${body.codigo}`;
    const result$ = this.http.delete<ResponseContratoPerforacionAjustesRegistro>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getByCodContratoTipoPozo(codContrato: string, tipoPozo: string): Promise<ResponseContratoPerforacionAjustesRegistros> {
    const action = `${this.action}/${codContrato}/${tipoPozo}`;
    const result$ = this.http.get<ResponseContratoPerforacionAjustesRegistros>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

