// interface de las variables
import { SuperficiePozo } from 'src/app/data/models/superficie-pozo';
import {NombreSuperficies} from "../../../../../data/models/nombre-superficies";
import {CategoriasAjuste} from "../../../../../data/models/categorias-ajuste";

export interface SuperficiePozoState {
  loading: boolean;
  action: boolean;
  error?: string | null;
  superficiePozos: SuperficiePozo[];
  edit: SuperficiePozo;
  // nombreSuperficie: NombreSuperficies[];
}




