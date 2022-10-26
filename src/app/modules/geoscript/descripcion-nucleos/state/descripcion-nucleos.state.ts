// interface de las variables
import {DescripcionNucleos, ReglaLength} from '../../../../data/models/descripcion-nucleos';
import {GraficasDescripcionNucleos, IntervalosDescripcionNucleos} from '../../../../data/models/grafica-descripcion-nucleos';
import {Superficies} from '../../../../data/models/superficie';

export interface DescripcionNucleosState {
  loading: boolean;
  error?: string | null;
  grafica: GraficasDescripcionNucleos;
  descripcionNucleosEdit: DescripcionNucleos;
  reglaLength: ReglaLength[];
  nucleos: DescripcionNucleos[];
  intervalos: IntervalosDescripcionNucleos[];
  superficies: Superficies[];
  finalDelPozo: number;
  profundidadRegistro: number;
}




