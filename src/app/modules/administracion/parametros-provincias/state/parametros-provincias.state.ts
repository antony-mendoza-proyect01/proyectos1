import { Provincias } from 'src/app/data/models/provincias';



export interface ParametrosProvinciasState {
  loading: boolean,
  action: boolean,
  error: string;
  provincias: Provincias[];
  provinciasFiltro: Provincias[];
  edit: Provincias;
  column: any;
  direction: any;
  paginator: number;
}
