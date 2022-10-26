import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Login} from '../models/login';
import {ResponseUser, ResponseUsers, User} from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `user`;
  }

  async login(login: Login): Promise<ResponseUser> {
    this.action = `/login`;
    const result$ = this.http.post<ResponseUser>(`${this.prefix}${this.controller}${this.action}`, login).pipe(map( response => response));
    return await lastValueFrom(result$);
  }

  async getAll(): Promise<ResponseUsers> {
    const result$ = this.http.get<ResponseUsers>(`${this.prefix}${this.controller}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(areaId: string): Promise<ResponseUser> {
    const action = `${this.action}/${areaId}`;
    const result$ = this.http.get<ResponseUser>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: User): Promise<ResponseUser> {
    const result$ = this.http.post<ResponseUser>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: User): Promise<ResponseUser> {
    const result$ = this.http.put<ResponseUser>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async delete(body: User): Promise<ResponseUser> {
    const action = `${this.action}/${body.username}`;
    const result$ = this.http.delete<ResponseUser>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

