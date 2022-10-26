// interface de las variables
import {ReglaLength} from '../../../../data/models/descripcion-nucleos';
import {
  GraficaDatosCarbones,
  NucleosDatosCarbones
} from '../../../../data/models/grafica-datos-carbones';
import {DatosCarbon} from '../../../../data/models/datos-carbon';
import {Superficies} from '../../../../data/models/superficie';

export interface DatosCarbonState {
  loading: boolean;
  error?: string | null;
  grafica: GraficaDatosCarbones;
  datosCarbonEdit: DatosCarbon;
  reglaLength: ReglaLength[];
  ripios: NucleosDatosCarbones[];
  nucleos: NucleosDatosCarbones[];
  intervalos: DatosCarbon[];
  superficies: Superficies[];
  profundidadRegistro: number;
}




