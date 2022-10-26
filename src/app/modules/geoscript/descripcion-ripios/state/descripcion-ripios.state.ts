// interface de las variables
import {ReglaLength} from '../../../../data/models/descripcion-nucleos';
import {Superficies} from '../../../../data/models/superficie';
import {GraficaDescipcionRipios} from '../../../../data/models/grafica-descripcion-ripios';
import {DescripcionRipios} from '../../../../data/models/descripcion-ripios';

export interface DescripcionRipiosState {
  loading: boolean;
  error?: string | null;
  grafica: GraficaDescipcionRipios;
  descripcionRipiosEdit: DescripcionRipios;
  reglaLength: ReglaLength[];
  ripios: DescripcionRipios[];
  superficies: Superficies[];
  profundidadRegistro: number;
}




