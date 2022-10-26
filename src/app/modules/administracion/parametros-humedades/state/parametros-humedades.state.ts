import { Humedades } from 'src/app/data/models/humedades';

export interface ParametrosHumedadesState {
  loading: boolean,
  action: boolean,
  error: string;
  humedades: Humedades[];
  humedadesFiltro: Humedades[];
  edit: Humedades;
  column: any;
  direction: any;
  paginator: number;
}
