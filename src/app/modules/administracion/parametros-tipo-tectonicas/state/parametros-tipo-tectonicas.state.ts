import {TipoTectonicas} from "../../../../data/models/tipo-tectonica";


export interface ParametrosTipoTectonicasState {
  loading: boolean,
  action: boolean,
  error: string;
  tipoTectonicas: TipoTectonicas[];
  tipoTectonicasFiltro: TipoTectonicas[];
  edit: TipoTectonicas;
  column: any;
  direction: any;
  paginator: number;
}
