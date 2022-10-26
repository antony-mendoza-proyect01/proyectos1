import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {ResponseTarifa, ResponseTarifas, Tarifas} from '../models/tarifas';

@Injectable({
  providedIn: 'root'
})
export class ContratosTarifasService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/contratosPerforacion/`;
    this.action = `tarifas`;
  }

  async getAll(): Promise<ResponseTarifas> {
    const result$ = this.http.get<ResponseTarifas>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseTarifa> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseTarifa>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Tarifas): Promise<ResponseTarifa> {
    const result$ = this.http.post<ResponseTarifa>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Tarifas): Promise<ResponseTarifa> {
    const result$ = this.http.put<ResponseTarifa>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Tarifas): Promise<ResponseTarifa> {
    const action = `${this.action}/${body.codigoTarifa}`;
    const result$ = this.http.delete<ResponseTarifa>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getByCodContratoTipoPozo(codContrato: string, tipoPozo: string): Promise<ResponseTarifas> {
    const action = `${this.action}/${codContrato}/${tipoPozo}`;
    const result$ = this.http.get<ResponseTarifas>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

