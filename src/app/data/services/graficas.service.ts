import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map, of} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {ResponseGraficaDescripcionNucleo} from '../models/grafica-descripcion-nucleos';
import {ResponseGraficaDatosCarbone} from '../models/grafica-datos-carbones';
import {GraficaDescipcionRipios, ResponseGraficaDescipcionRipio} from '../models/grafica-descripcion-ripios';

@Injectable({
  providedIn: 'root'
})
export class GraficasService  extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = 'grafica/';
  }

  async getAllByPozoDescripcionNucleos(codPozo: string): Promise<ResponseGraficaDescripcionNucleo> {
    const action = `descripcionNucleosModulo/${codPozo}`;
    const result$ = this.http.get<ResponseGraficaDescripcionNucleo>(`${this.prefix}${this.controller}${action}`).pipe(map(r => r));
    return await lastValueFrom(result$);
  }

  async getAllByPozoDescripcionRipios(codPozo: string): Promise<ResponseGraficaDescipcionRipio> {
    const action = `descripcionRipiosModulo/${codPozo}`;
    const result$ = this.http.get<ResponseGraficaDescipcionRipio>(`${this.prefix}${this.controller}${action}`).pipe(map(r => r));
    return await lastValueFrom(result$);
  }

  async getAllByPozoDatosCarbones(codPozo: string, tipoPozo: string): Promise<ResponseGraficaDatosCarbone> {
    const action = `datosCarbonesModulo/${tipoPozo}/${codPozo}`;
    const result$ = this.http.get<ResponseGraficaDatosCarbone>(`${this.prefix}${this.controller}${action}`).pipe(map(r => r));
    return await lastValueFrom(result$);
  }
}
