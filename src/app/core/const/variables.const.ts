
import {Estados} from '../../data/models/estados';
import {ISelect} from '../../data/interfaces/iSelect';

export const ERROR_APP = 'ERROR';
export const NOMBRE_APP = 'Factpozos';
export const PERSONAL_ROL__SUPERVISOR = 'SUP';
export const PERSONAL_ROL__SUPERVISOR_URL = 'supervisores';
export const PERSONAL_ROL__GEOLOGO = 'GEO';
export const PERSONAL_ROL__GEOLOGO_URL = 'geologos';
export const ESTADOS: Estados[] = [
  {
    id: 'A',
    titulo: 'Activo',
  },
  {
    id: 'I',
    titulo: 'Inactivo',
  }];
export const CONFIRMACION:  ISelect[] = [
  {
    id: 'SI',
    titulo: 'SI',
  },
  {
    id: 'NO',
    titulo: 'NO',
  }
];

export const RESTAURACION:  ISelect[] = [
  {
    id: '1',
    titulo: 'SI',
  },
  {
    id: '0',
    titulo: 'NO',
  }
];

export const SUPERFICIE_POZO:  ISelect[] = [
  {
    id: 'Inundacion',
    titulo: 'Inundacion',
  },
  {
    id: 'Oxidacion',
    titulo: 'Oxidacion',
  },
  {
    id: 'Bhwe',
    titulo: 'Bhwe',
  }
];
