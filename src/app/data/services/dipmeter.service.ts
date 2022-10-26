import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Dipmeter, ResponseDipmeter, ResponseDipmeters} from '../models/dipmeter';

@Injectable({
  providedIn: 'root'
})
export class DipmeterService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `dipmeter`;
  }

  async getByPozo(codPozo: string): Promise<ResponseDipmeters> {
    this.action = `/` + codPozo;
    const result$ = this.http.get<ResponseDipmeters>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Dipmeter): Promise<ResponseDipmeter> {
    const result$ = this.http.post<ResponseDipmeter>(`${this.prefix}${this.controller}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Dipmeter, codPozo: string, profundidadEdit: Dipmeter): Promise<ResponseDipmeter> {
    this.action = `/${codPozo}/${profundidadEdit.dipmeterPK.profundidad}`;
    const result$ = this.http.put<ResponseDipmeter>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async delete(body: Dipmeter): Promise<ResponseDipmeter> {
    const action = `${this.action}/${body.dipmeterPK.codPozo}`;
    const result$ = this.http.delete<ResponseDipmeter>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

