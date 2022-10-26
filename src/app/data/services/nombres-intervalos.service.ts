import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {NombresIntervalos, ResponseNombresIntervalo, ResponseNombresIntervalos} from '../models/nombres-intervalos';

@Injectable({
  providedIn: 'root'
})
export class NombresIntervalosService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `nombresIntervalos`;
  }

  async getAllPaginado(pageNo: number): Promise<ResponseNombresIntervalos> {
    const action = `${this.action}?pageSize=10&pageNo=${pageNo}`;
    const result$ = this.http.get<ResponseNombresIntervalos>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getAll(): Promise<ResponseNombresIntervalos> {
    const result$ = this.http.get<ResponseNombresIntervalos>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseNombresIntervalo> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseNombresIntervalo>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: NombresIntervalos): Promise<ResponseNombresIntervalo> {
    const result$ = this.http.post<ResponseNombresIntervalo>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: NombresIntervalos, edit: NombresIntervalos): Promise<ResponseNombresIntervalo> {
    const result$ = this.http.put<ResponseNombresIntervalo>(`${this.prefix}${this.controller}${this.action}/${edit.nombre}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async delete(body: NombresIntervalos): Promise<ResponseNombresIntervalo> {
    const action = `${this.action}/${body.nombre}`;
    const result$ = this.http.delete<ResponseNombresIntervalo>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getByNombre(nombre: string): Promise<ResponseNombresIntervalo> {
    const action = `${this.action}/${nombre}`;
    const result$ = this.http.get<ResponseNombresIntervalo>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

}

