import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Areas, ResponseArea, ResponseAreas} from '../models/areas';
import {Durezas, ResponseDureza, ResponseDurezas} from "../models/durezas";

@Injectable({
  providedIn: 'root'
})
export class DurezasService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `durezas`;
  }

  async getAll(): Promise<ResponseDurezas> {
    const result$ = this.http.get<ResponseDurezas>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseDureza> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseDureza>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Durezas): Promise<ResponseDureza> {
    const result$ = this.http.post<ResponseDureza>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Durezas): Promise<ResponseDureza> {
    const result$ = this.http.put<ResponseDureza>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Durezas): Promise<ResponseDureza> {
    const action = `${this.action}/${body.codDureza}`;
    const result$ = this.http.delete<ResponseDureza>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

