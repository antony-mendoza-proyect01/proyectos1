import {User} from '../../../../data/models/user';


export interface AdministracionUsuariosState {
  loading: boolean,
  action: boolean,
  error: string;
  usuarios: User[];
  usuariosFiltro: User[];
  edit: User;
  column: any;
  direction: any;
  paginator: number;
}
