import { Empresas } from "src/app/data/models/empresas";


export interface ParametrosEmpresasState {
  loading: boolean,
  action: boolean,
  error: string;
  empresas: Empresas[];
  empresasFiltro: Empresas[];
  edit: Empresas;
  column: any;
  direction: any;
  paginator: number;
}
