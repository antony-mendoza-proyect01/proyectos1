import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Areas, ResponseArea, ResponseAreas} from '../models/areas';

@Injectable({
  providedIn: 'root'
})
export class AreasService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/`;
    this.action = `areas`;
  }

  async getAll(): Promise<ResponseAreas> {
    const result$ = this.http.get<ResponseAreas>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseArea> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseArea>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Areas): Promise<ResponseArea> {
    const result$ = this.http.post<ResponseArea>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Areas): Promise<ResponseArea> {
    const result$ = this.http.put<ResponseArea>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Areas): Promise<ResponseArea> {
    const action = `${this.action}/${body.codigo}`;
    const result$ = this.http.delete<ResponseArea>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

