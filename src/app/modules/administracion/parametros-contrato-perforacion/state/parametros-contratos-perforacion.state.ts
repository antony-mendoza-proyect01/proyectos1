import {Contratos} from '../../../../data/models/contratos';

export interface ParametrosContratosPerforacionState {
  loading: boolean,
  action: boolean,
  error: string;
  contratosPerforacion: Contratos[];
  contratosPerforacionFiltro: Contratos[];
  edit: Contratos;
  column: any;
  direction: any;
  paginator: number;
  detailContratosPerforacion: Contratos;
  loadingDetail: boolean,
  errorDetail: string,
}
