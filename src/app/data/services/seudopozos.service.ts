import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map, of} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {ResponseGraficaDescripcionNucleo} from '../models/grafica-descripcion-nucleos';
import {ResponseGraficaDatosCarbone} from '../models/grafica-datos-carbones';
import {SeudoPozoResponse} from '../models/seudopozos';

@Injectable({
  providedIn: 'root'
})
export class SeudopozosService  extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = 'seudopozo';
  }

  async getAllByPozo(codPozo: string): Promise<SeudoPozoResponse> {
    const action = `/${codPozo}`;
    const result$ = this.http.get<SeudoPozoResponse>(`${this.prefix}${this.controller}${action}`).pipe(map(r => r));
    return await lastValueFrom(result$);
  }

}
