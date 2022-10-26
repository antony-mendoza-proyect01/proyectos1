import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {ResponseTarifasRegistro, ResponseTarifasRegistros, TarifasRegistro} from '../models/tarifas-registro';


@Injectable({
  providedIn: 'root'
})
export class TarifasRegistroService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/`;
    this.action = `tarifasRegistro`;
  }

  async getAll(): Promise<ResponseTarifasRegistros> {
    const result$ = this.http.get<ResponseTarifasRegistros>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(id: string): Promise<ResponseTarifasRegistro> {
    const action = `${this.action}/${id}`;
    const result$ = this.http.get<ResponseTarifasRegistro>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: TarifasRegistro): Promise<ResponseTarifasRegistro> {
    const result$ = this.http.post<ResponseTarifasRegistro>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: TarifasRegistro): Promise<ResponseTarifasRegistro> {
    const result$ = this.http.put<ResponseTarifasRegistro>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: TarifasRegistro): Promise<ResponseTarifasRegistro> {
    const action = `${this.action}/${body.tarifaRegistroPK.contrato}/${body.tarifaRegistroPK.sonda}`;
    const result$ = this.http.delete<ResponseTarifasRegistro>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getByCodContrato(codContrato: string): Promise<ResponseTarifasRegistros> {
    const action = `${this.action}/${codContrato}`;
    const result$ = this.http.get<ResponseTarifasRegistros>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

}

