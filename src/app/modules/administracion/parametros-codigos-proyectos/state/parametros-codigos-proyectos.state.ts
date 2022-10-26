import { CodigosProyectos } from "src/app/data/models/codigos-proyectos";


export interface ParametrosCodigosProyectosState {
  loading: boolean,
  action: boolean,
  error: string;
  codigosproyectos: CodigosProyectos[];
  codigosproyectosFiltro: CodigosProyectos[];
  edit: CodigosProyectos;
  column: any;
  direction: any;
  paginator: number;
}
