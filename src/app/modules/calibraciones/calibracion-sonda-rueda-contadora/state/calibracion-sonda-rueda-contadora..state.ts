import {CalibracionSondaRuedaContadora} from "../../../../data/models/calibracion-sonda-rueda-contadora";

export interface CalibracionSondaRuedaContadoraState {
  loading: boolean;
  action: boolean;
  error?: string | null;
  calibracionSondaRuedaContadoras: CalibracionSondaRuedaContadora[];
  calibracionSondaRuedaContadorasFiltro: CalibracionSondaRuedaContadora[];
  edit: CalibracionSondaRuedaContadora;
  column: any;
  direction: any;
  paginator: number;
}




