import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Areas, ResponseArea, ResponseAreas} from '../models/areas';
import {Calificadores, ResponseCalificador, ResponseCalificadores} from '../models/calificadores';

@Injectable({
  providedIn: 'root'
})
export class CalificadoresService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `calificador`;
  }

  async getAll(): Promise<ResponseCalificadores> {
    const result$ = this.http.get<ResponseCalificadores>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseCalificador> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseCalificador>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Calificadores): Promise<ResponseCalificador> {
    const result$ = this.http.post<ResponseCalificador>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Calificadores): Promise<ResponseCalificador> {
    const result$ = this.http.put<ResponseCalificador>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Calificadores): Promise<ResponseCalificador> {
    const action = `${this.action}/${body.codCalificador}`;
    const result$ = this.http.delete<ResponseCalificador>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

