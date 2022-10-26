import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {
  ResponseSuperficiePozo, ResponseSuperficiePozoDetail,
  ResponseSuperficiePozoDetailRGB,
  ResponseSuperficiePozos,
  SuperficiePozo
} from '../models/superficie-pozo';
import {ResponseCategoriasAjustes} from "../models/categorias-ajuste";
import {ResponseNombreSuperficies} from "../models/nombre-superficies";

@Injectable({
  providedIn: 'root'
})
export class SuperficiePozoService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `datosCarbon/`;
    this.action = `superficiesPozo`;
  }

  async getByPozo(codPozo: string): Promise<ResponseSuperficiePozos> {
    const action = `${this.action}/${codPozo}`;
    const result$ = this.http.get<ResponseSuperficiePozos>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: SuperficiePozo): Promise<ResponseSuperficiePozoDetail> {
    const result$ = this.http.post<ResponseSuperficiePozoDetail>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: SuperficiePozo): Promise<ResponseSuperficiePozo> {
    const result$ = this.http.put<ResponseSuperficiePozo>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async delete(body: SuperficiePozo): Promise<ResponseSuperficiePozo> {
    const action = `${this.action}/${body.codSupPozo}`;
    const result$ = this.http.delete<ResponseSuperficiePozo>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

}

