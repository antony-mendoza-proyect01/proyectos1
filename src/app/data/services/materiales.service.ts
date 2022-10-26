import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Materiales, ResponseMaterial, ResponseMateriales} from "../models/materiales";

@Injectable({
  providedIn: 'root'
})
export class MaterialesService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/`;
    this.action = `materiales`;
  }

  async getAll(): Promise<ResponseMateriales> {
    const result$ = this.http.get<ResponseMateriales>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseMaterial> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseMaterial>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Materiales): Promise<ResponseMaterial> {
    const result$ = this.http.post<ResponseMaterial>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Materiales): Promise<ResponseMaterial> {
    const result$ = this.http.put<ResponseMaterial>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Materiales): Promise<ResponseMaterial> {
    const action = `${this.action}/${body.codigo}`;
    const result$ = this.http.delete<ResponseMaterial>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

