import {Litofacies} from "../../../../data/models/litofacies";


export interface ParametrosLitofaciesState {
  loading: boolean,
  action: boolean,
  error: string;
  litofacies: Litofacies[];
  litofaciesFiltro: Litofacies[];
  edit: Litofacies;
  column: any;
  direction: any;
  paginator: number;
}
