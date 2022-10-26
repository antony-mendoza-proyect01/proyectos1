import {CalibracionDensidad} from "../../../../data/models/calibracion-densidad";

export interface CalibracionDensidadState {
  loading: boolean;
  action: boolean;
  error?: string | null;
  calibracionDensidades: CalibracionDensidad[];
  calibracionDensidadesFiltro: CalibracionDensidad[];
  edit: CalibracionDensidad;
  column: any;
  direction: any;
  paginator: number;
}




