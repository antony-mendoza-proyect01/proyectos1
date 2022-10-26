import { PersonasRoles } from 'src/app/data/models/personas-roles';

export interface ParametrosGeologosState {
  loading: boolean,
  action: boolean,
  error: string;
  personasRoles: PersonasRoles[];
  personasRolesFiltro: PersonasRoles[];
  edit: PersonasRoles;
  column: any;
  direction: any;
  paginator: number;
}
