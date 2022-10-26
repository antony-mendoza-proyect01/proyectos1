import {CalibracionSondaCabezaCable} from '../../../../data/models/calibracion-sonda-cabeza-cable';

export interface CalibracionSondaCabezaCableState {
  loading: boolean;
  action: boolean;
  error?: string | null;
  calibracionSondaCabezaCables: CalibracionSondaCabezaCable[];
  calibracionSondaCabezaCablesFiltro: CalibracionSondaCabezaCable[];
  edit: CalibracionSondaCabezaCable;
  column: any;
  direction: any;
  paginator: number;
}




