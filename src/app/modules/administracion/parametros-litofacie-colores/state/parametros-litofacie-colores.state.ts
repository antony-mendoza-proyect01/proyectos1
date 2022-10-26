import {LitofacieColores} from "../../../../data/models/litofacie-colores";


export interface ParametrosLitofacieColoresState {
  loading: boolean,
  action: boolean,
  error: string;
  litofacies: LitofacieColores[];
  litofaciesFiltro: LitofacieColores[];
  edit: LitofacieColores;
  column: any;
  direction: any;
  paginator: number;
}
