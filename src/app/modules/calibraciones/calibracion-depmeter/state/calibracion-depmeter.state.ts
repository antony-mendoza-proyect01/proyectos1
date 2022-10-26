import {CalibracionDipmeter} from "../../../../data/models/calibraciom-dipmeter";

export interface CalibracionDepmeterState {
  loading: boolean;
  action: boolean;
  error?: string | null;
  calibracionDipmeter: CalibracionDipmeter[];
  calibracionDipmeterFiltro: CalibracionDipmeter[];
  edit: CalibracionDipmeter;
  column: any;
  direction: any;
  paginator: number;
}




