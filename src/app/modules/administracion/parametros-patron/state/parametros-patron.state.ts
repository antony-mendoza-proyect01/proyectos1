import { Patron } from 'src/app/data/models/patron';

export interface ParametrosPatronState {
  loading: boolean,
  action: boolean,
  error: string;
  patrones: Patron[];
  patronesFiltro: Patron[];
  edit: Patron;
  column: any;
  direction: any;
  paginator: number;
}
