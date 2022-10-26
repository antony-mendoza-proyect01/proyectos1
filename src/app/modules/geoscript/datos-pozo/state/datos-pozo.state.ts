import {DatosPozo, ResultDatosPozo, TiposRegistro} from "../../../../data/models/result-datos-pozo";


export interface DatosDelPozoState {
  loading: boolean,
  action: boolean,
  error?: string | null;
  datosPozo: ResultDatosPozo;
  edit : ResultDatosPozo;

}
