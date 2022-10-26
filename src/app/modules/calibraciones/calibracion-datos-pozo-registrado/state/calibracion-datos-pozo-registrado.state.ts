import {CalibracionDatosPozoRegistrado} from "../../../../data/models/calibracion-datos-pozo-registrado";

export interface CalibracionDatosPozoRegistradoState {
  loading: boolean;
  action: boolean;
  error?: string | null;
  calibracionDatosPozoRegistrado: CalibracionDatosPozoRegistrado[];
  calibracionDatosPozoRegistradoFiltro: CalibracionDatosPozoRegistrado[];
  edit: CalibracionDatosPozoRegistrado;
  column: any;
  direction: any;
  paginator: number;
}




