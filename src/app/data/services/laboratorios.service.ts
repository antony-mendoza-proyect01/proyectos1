import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Areas, ResponseArea, ResponseAreas} from '../models/areas';
import {Laboratorios, ResponseLaboratorio, ResponseLaboratorios} from '../models/laboratorios';

@Injectable({
  providedIn: 'root'
})
export class LaboratoriosService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `laboratorios`;
  }

  async getAll(): Promise<ResponseLaboratorios> {
    const result$ = this.http.get<ResponseLaboratorios>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseLaboratorio> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseLaboratorio>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Laboratorios): Promise<ResponseLaboratorio> {
    const result$ = this.http.post<ResponseLaboratorio>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Laboratorios): Promise<ResponseLaboratorio> {
    const result$ = this.http.put<ResponseLaboratorio>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Laboratorios): Promise<ResponseLaboratorio> {
    const action = `${this.action}/${body.codLab}`;
    const result$ = this.http.delete<ResponseLaboratorio>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

