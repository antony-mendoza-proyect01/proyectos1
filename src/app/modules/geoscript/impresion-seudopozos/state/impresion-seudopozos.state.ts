import {ReglaLength} from '../../../../data/models/descripcion-nucleos';
import {Seudopozo, SeudopozoInfo} from '../../../../data/models/seudopozos';

export interface ImpresionSeudopozosState {
  loading: boolean;
  error?: string | null;
  seudopozoList: Seudopozo[];
  seudopozoEdit: Seudopozo;
  reglaLength: ReglaLength[];
  seudopozoInfo: SeudopozoInfo;
  finalSeudopozo: number;
  longuitudRegla: number;

}




