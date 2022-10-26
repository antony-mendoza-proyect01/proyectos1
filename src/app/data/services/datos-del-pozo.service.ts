import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';

import {ResultDatosPozo, ResponseDatosDelPozo} from "../models/result-datos-pozo";
import {DatosPozoForm} from '../../modules/geoscript/datos-pozo/components/form/form.component';

@Injectable({
  providedIn: 'root'
})
export class DatosDelPozoService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `datosPozo`;

  }

  async getByPozo(codPozo: string): Promise<ResponseDatosDelPozo> {
    this.action = `/` + codPozo;
    const result$ = this.http.get<ResponseDatosDelPozo>(`${this.prefix}${this.controller}${this.action}`).pipe(map(r => r));
    return await lastValueFrom(result$);
  }

  async put(body: DatosPozoForm): Promise<ResponseDatosDelPozo> {
    const result$ = this.http.put<ResponseDatosDelPozo>(`${this.prefix}${this.controller}`, body).pipe(map(r => r));
    return await lastValueFrom(result$);
  }

}

