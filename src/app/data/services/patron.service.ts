import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Patron, ResponsePatron, ResponsePatrones} from "../models/patron";

@Injectable({
  providedIn: 'root'
})
export class PatronService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `patrones`;
  }

  async getAll(): Promise<ResponsePatrones> {
    const result$ = this.http.get<ResponsePatrones>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponsePatron> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponsePatron>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Patron): Promise<ResponsePatron> {
    const result$ = this.http.post<ResponsePatron>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Patron): Promise<ResponsePatron> {
    const result$ = this.http.put<ResponsePatron>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Patron): Promise<ResponsePatron> {
    const action = `${this.action}/${body.codPatron}`;
    const result$ = this.http.delete<ResponsePatron>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

