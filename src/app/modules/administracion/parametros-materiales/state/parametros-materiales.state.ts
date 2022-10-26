import { Materiales } from 'src/app/data/models/materiales';

export interface ParametrosMaterialesState {
  loading: boolean,
  action: boolean,
  error: string;
  materiales: Materiales[];
  materialesFiltro: Materiales[];
  edit: Materiales;
  column: any;
  direction: any;
  paginator: number;
}
