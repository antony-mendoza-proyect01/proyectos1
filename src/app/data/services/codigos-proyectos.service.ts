import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Areas, ResponseArea, ResponseAreas} from '../models/areas';
import {CodigosProyectos, ResponseCodigoProyecto, ResponseCodigosProyectos} from "../models/codigos-proyectos";

@Injectable({
  providedIn: 'root'
})
export class CodigosProyectosService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `descripcion/`;
    this.action = `codigosProyectos`;
  }

  async getAll(): Promise<ResponseCodigosProyectos> {
    const result$ = this.http.get<ResponseCodigosProyectos>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseCodigoProyecto> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseCodigoProyecto>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: CodigosProyectos): Promise<ResponseCodigoProyecto> {
    const result$ = this.http.post<ResponseCodigoProyecto>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: CodigosProyectos): Promise<ResponseCodigoProyecto> {
    const result$ = this.http.put<ResponseCodigoProyecto>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: CodigosProyectos): Promise<ResponseCodigoProyecto> {
    const action = `${this.action}/${body.codProyecto}`;
    const result$ = this.http.delete<ResponseCodigoProyecto>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

