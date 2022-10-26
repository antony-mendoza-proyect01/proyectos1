import {DescripcionesLitofacies} from '../../../../data/models/descripciones-litofacies';

export interface ParametrosDescripcionLitofaciesState {
  loading: boolean,
  action: boolean,
  error: string;
  descripcionesLitofacies: DescripcionesLitofacies[];
  descripcionesLitofaciesFiltro: DescripcionesLitofacies[];
  edit: DescripcionesLitofacies;
  column: any;
  direction: any;
  paginator: number;
}
