import {ApiResponse} from './api-response';
// model
export class Litofacies {
  codCar: number;
  litofacie: string;
  grupo: string;
  caracteristica: string;


  constructor(codCar?: number, litofacie?: string, grupo?: string, caracteristica?: string) {
    this.codCar = codCar || null;
    this.litofacie = litofacie || '';
    this.grupo = grupo || '';
    this.caracteristica = caracteristica || '';

  }
}
// responses
export class ResponseLitofacie extends ApiResponse {
  data: Litofacies;

  constructor(data: Litofacies) {
    super(data);
  }
}
export class ResponseLitofacies extends ApiResponse {
  data: Litofacies[];

  constructor(data: Litofacies[]) {
    super(data);
  }
}
