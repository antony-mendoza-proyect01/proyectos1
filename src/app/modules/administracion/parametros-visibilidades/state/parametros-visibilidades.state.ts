import { Visibilidades } from "src/app/data/models/visibilidades";



export interface ParametrosVisibilidadesState {
  loading: boolean,
  action: boolean,
  error: string;
  visibilidades: Visibilidades[];
  visibilidadesFiltro: Visibilidades[];
  edit: Visibilidades;
  column: any;
  direction: any;
  paginator: number;
}
