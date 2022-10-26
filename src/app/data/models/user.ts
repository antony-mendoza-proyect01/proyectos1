import {ApiResponse} from './api-response';

export class User {
  apellidos: string;
  estado: string;
  nombres: string;
  roles: string[];
  token: string;
  username: string;
  password: string;

  constructor(apellidos?: string, estado?: string, nombres?: string, roles?: string[], token?: string,
              username?: string, password?: string) {
    this.apellidos = apellidos || '';
    this.estado = estado || '';
    this.nombres = nombres || '';
    this.roles = roles || [];
    this.token = token || '';
    this.username = username || '';
    this.password = password || '';
  }
}
// responses
export class ResponseUser extends ApiResponse {
  data: User;

  constructor(data: User) {
    super(data);
  }
}
// responses
export class ResponseUsers extends ApiResponse {
  data: User[];

  constructor(data: User) {
    super(data);
  }
}
