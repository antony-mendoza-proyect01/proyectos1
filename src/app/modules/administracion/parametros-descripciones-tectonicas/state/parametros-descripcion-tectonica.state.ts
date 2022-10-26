import {DescripcionTectonica} from '../../../../data/models/descripcion-tectonica';

export interface ParametrosDescripcionTectonicaState {
  loading: boolean,
  action: boolean,
  error: string;
  descripcionTectonicas: DescripcionTectonica[];
  descripcionTectonicasFiltro: DescripcionTectonica[];
  edit: DescripcionTectonica;
  column: any;
  direction: any;
  paginator: number;
}
