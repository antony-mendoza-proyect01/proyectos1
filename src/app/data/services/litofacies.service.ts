import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Litofacies, ResponseLitofacie, ResponseLitofacies} from '../models/Litofacies';

@Injectable({
  providedIn: 'root'
})
export class LitofaciesService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `litofacies`;
  }

  async getAll(): Promise<ResponseLitofacies> {
    const result$ = this.http.get<ResponseLitofacies>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseLitofacie> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseLitofacie>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Litofacies): Promise<ResponseLitofacie> {
    const result$ = this.http.post<ResponseLitofacie>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Litofacies): Promise<ResponseLitofacie> {
    const result$ = this.http.put<ResponseLitofacie>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Litofacies): Promise<ResponseLitofacie> {
    const action = `${this.action}/${body.codCar}`;
    const result$ = this.http.delete<ResponseLitofacie>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

