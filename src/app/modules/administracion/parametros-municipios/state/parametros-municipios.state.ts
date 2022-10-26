import { Municipios } from "src/app/data/models/municipios";


export interface ParametrosMunicipiosState {
  loading: boolean,
  action: boolean,
  error: string;
  municipios: Municipios[];
  municipiosFiltro: Municipios[];
  edit: Municipios;
  column: any;
  direction: any;
  paginator: number;
}
