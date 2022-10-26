import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {CalibracionSondaRuedaContadora, ResponseCalibracionSondaRuedaContadora, ResponseCalibracionSondaRuedaContadoras} from "../models/calibracion-sonda-rueda-contadora";

@Injectable({
  providedIn: 'root'
})
export class CalibracionSondaRuedaContadoraService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/`;
    this.action = `areas`;
  }

  async getAll(): Promise<ResponseCalibracionSondaRuedaContadoras> {
    const result$ = this.http.get<ResponseCalibracionSondaRuedaContadoras>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(id: string): Promise<ResponseCalibracionSondaRuedaContadora> {
    const action = `${this.action}/${id}`;
    const result$ = this.http.get<ResponseCalibracionSondaRuedaContadora>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: CalibracionSondaRuedaContadora): Promise<ResponseCalibracionSondaRuedaContadora> {
    const result$ = this.http.post<ResponseCalibracionSondaRuedaContadora>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: CalibracionSondaRuedaContadora): Promise<ResponseCalibracionSondaRuedaContadora> {
    const result$ = this.http.put<ResponseCalibracionSondaRuedaContadora>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: CalibracionSondaRuedaContadora): Promise<ResponseCalibracionSondaRuedaContadora> {
    const action = `${this.action}/${body.id}`;
    const result$ = this.http.delete<ResponseCalibracionSondaRuedaContadora>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

