import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {
  CalibracionSondaSusceptibilidadMagnetica,
  ResponseCalibracionSondaSusceptibilidadMagnetica,
  ResponseCalibracionSondaSusceptibilidadMagneticas
} from "../models/calibracion-sonda-susceptibilidad-magnetica";

@Injectable({
  providedIn: 'root'
})
export class CalibracionSondaSusceptibilidadMagneticaService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/`;
    this.action = `areas`;
  }

  async getAll(): Promise<ResponseCalibracionSondaSusceptibilidadMagneticas> {
    const result$ = this.http.get<ResponseCalibracionSondaSusceptibilidadMagneticas>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(id: string): Promise<ResponseCalibracionSondaSusceptibilidadMagnetica> {
    const action = `${this.action}/${id}`;
    const result$ = this.http.get<ResponseCalibracionSondaSusceptibilidadMagnetica>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: CalibracionSondaSusceptibilidadMagnetica): Promise<ResponseCalibracionSondaSusceptibilidadMagnetica> {
    const result$ = this.http.post<ResponseCalibracionSondaSusceptibilidadMagnetica>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: CalibracionSondaSusceptibilidadMagnetica): Promise<ResponseCalibracionSondaSusceptibilidadMagnetica> {
    const result$ = this.http.put<ResponseCalibracionSondaSusceptibilidadMagnetica>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: CalibracionSondaSusceptibilidadMagnetica): Promise<ResponseCalibracionSondaSusceptibilidadMagnetica> {
    const action = `${this.action}/${body.id}`;
    const result$ = this.http.delete<ResponseCalibracionSondaSusceptibilidadMagnetica>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

