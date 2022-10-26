import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {PersonasRoles, PersonasRolesPut, ResponsepersonasRol, ResponsepersonasRoles} from '../models/personas-roles';

@Injectable({
  providedIn: 'root'
})
export class PersonasRolesService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `facturacion/`;
    this.action = `personasRoles`;
  }

  async getAll(rolId: string ): Promise<ResponsepersonasRoles> {
    const action = `${this.action}/${rolId}`;
    const result$ = this.http.get<ResponsepersonasRoles>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(id: string): Promise<ResponsepersonasRol> {
    const action = `${this.action}/${id}`;
    const result$ = this.http.get<ResponsepersonasRol>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: PersonasRoles): Promise<ResponsepersonasRol> {
    const result$ = this.http.post<ResponsepersonasRol>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
  async put(body: PersonasRoles, edit: PersonasRoles, codigoRol: string): Promise<ResponsepersonasRol> {
    const bodyService = new PersonasRolesPut(edit.personaRolPK.personaCodigo, body.personaRolPK.personaCodigo, codigoRol);
    const result$ = this.http.put<ResponsepersonasRol>(`${this.prefix}${this.controller}${this.action}`, bodyService).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async delete(body: PersonasRoles): Promise<ResponsepersonasRol> {
    const action = `${this.action}/${body.personaRolPK.personaCodigo}/${body.personaRolPK.rolCodigo}`;
    const result$ = this.http.delete<ResponsepersonasRol>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

