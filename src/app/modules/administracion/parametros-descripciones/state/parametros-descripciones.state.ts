import { Descripciones } from "src/app/data/models/descripciones";



export interface ParametrosDescripcionesState {
  loading: boolean,
  action: boolean,
  error: string;
  descripciones: Descripciones[];
  descripcionesFiltro: Descripciones[];
  edit: Descripciones;
  column: any;
  direction: any;
  paginator: number;
}
