import {ContratosRegistro} from '../../../../data/models/contratos-registro';
import {TarifasRegistro} from '../../../../data/models/tarifas-registro';


export interface ParametrosContratosRegistroState {
  loading: boolean,
  action: boolean,
  error: string;
  contratosRegistro: ContratosRegistro[];
  contratosRegistroFiltro: ContratosRegistro[];
  edit: ContratosRegistro;
  column: any;
  direction: any;
  paginator: number;
  editContratosRegistroTarifasRegistro: ContratosRegistro;
  loadingTarifasRegistro: boolean,
  errorTarifasRegistro: string,
  tarifasRegistro: TarifasRegistro[];
  editTarifasRegistro: TarifasRegistro,
}
