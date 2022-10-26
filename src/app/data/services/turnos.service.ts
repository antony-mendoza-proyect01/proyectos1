import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Areas, ResponseArea, ResponseAreas} from '../models/areas';
import {ResponseTurno, ResponseTurnos, Turnos } from '../models/turnos';

@Injectable({
  providedIn: 'root'
})
export class TurnosService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/`;
    this.action = `turnos`;
  }

  async getAll(): Promise<ResponseTurnos> {
    const result$ = this.http.get<ResponseTurnos>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseTurno> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseTurno>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Turnos): Promise<ResponseTurno> {
    const result$ = this.http.post<ResponseTurno>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Turnos): Promise<ResponseTurno> {
    const result$ = this.http.put<ResponseTurno>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Turnos): Promise<ResponseTurno> {
    const action = `${this.action}/${body.codigo}`;
    const result$ = this.http.delete<ResponseTurno>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

