import {DescripcionSedimentaria} from '../../../../data/models/descripcion-sedimentaria';

export interface ParametrosDescripcionSedimentariaState {
  loading: boolean,
  action: boolean,
  error: string;
  descripcionSedimentarias: DescripcionSedimentaria[];
  descripcionSedimentariasFiltro: DescripcionSedimentaria[];
  edit: DescripcionSedimentaria;
  column: any;
  direction: any;
  paginator: number;
}
