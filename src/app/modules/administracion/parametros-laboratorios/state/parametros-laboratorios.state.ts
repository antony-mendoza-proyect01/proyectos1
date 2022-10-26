import { Laboratorios } from 'src/app/data/models/laboratorios';

export interface ParametrosLaboratoriosState {
  loading: boolean,
  action: boolean,
  error: string;
  laboratorios: Laboratorios[];
  laboratoriosFiltro: Laboratorios[];
  edit: Laboratorios;
  column: any;
  direction: any;
  paginator: number;
}
