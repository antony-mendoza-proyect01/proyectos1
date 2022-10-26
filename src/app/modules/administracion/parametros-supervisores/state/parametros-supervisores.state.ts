import { PersonasRoles } from 'src/app/data/models/personas-roles';

export interface ParametrosSupervisoresState {
  loading: boolean,
  action: boolean,
  error: string;
  supervisores: PersonasRoles[];
  supervisoresFiltro: PersonasRoles[];
  edit: PersonasRoles;
  column: any;
  direction: any;
  paginator: number;
}
