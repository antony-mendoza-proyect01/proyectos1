import {Areas} from '../../../../data/models/areas';


export interface ParametrosAreasState {
  loading: boolean,
  action: boolean,
  error: string;
  areas: Areas[];
  areasFiltro: Areas[];
  edit: Areas;
  column: any;
  direction: any;
  paginator: number;
}
