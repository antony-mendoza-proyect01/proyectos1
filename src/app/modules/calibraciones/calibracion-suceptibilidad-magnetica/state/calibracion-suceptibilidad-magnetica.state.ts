import {
  CalibracionSondaSusceptibilidadMagnetica
} from "../../../../data/models/calibracion-sonda-susceptibilidad-magnetica";

export interface CalibracionSuceptibilidadMagneticaState {
  loading: boolean;
  action: boolean;
  error?: string | null;
  calibracionSondaSusceptibilidadMagneticas: CalibracionSondaSusceptibilidadMagnetica[];
  calibracionSondaSusceptibilidadMagneticasFiltro: CalibracionSondaSusceptibilidadMagnetica[];
  edit: CalibracionSondaSusceptibilidadMagnetica;
  column: any;
  direction: any;
  paginator: number;
}




