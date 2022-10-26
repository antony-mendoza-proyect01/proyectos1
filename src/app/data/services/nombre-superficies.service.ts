import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {NombreSuperficies, ResponseNombreSuperficie, ResponseNombreSuperficies } from '../models/nombre-superficies';

@Injectable({
  providedIn: 'root'
})
export class NombreSuperficiesService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `nombresSuperficies`;
  }

  async getAll(): Promise<ResponseNombreSuperficies> {
    const result$ = this.http.get<ResponseNombreSuperficies>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseNombreSuperficie> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseNombreSuperficie>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: NombreSuperficies): Promise<ResponseNombreSuperficie> {
    const result$ = this.http.post<ResponseNombreSuperficie>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: NombreSuperficies): Promise<ResponseNombreSuperficie> {
    const result$ = this.http.put<ResponseNombreSuperficie>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: NombreSuperficies): Promise<ResponseNombreSuperficie> {
    const action = `${this.action}/${body.codigo}`;
    const result$ = this.http.delete<ResponseNombreSuperficie>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

