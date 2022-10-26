import {createAction, props} from '@ngrx/store';
import {Municipios} from '../../../../data/models/Municipios';
import {ApiResponse} from '../../../../data/models/api-response';

export enum ParametrosMunicipiosActionsNames {
  Init = '[ParametrosMunicipios] Init',
  GetAllParametrosMunicipios = '[ParametrosMunicipios] [Api] Get all',
  GetAllParametrosMunicipiosSuccess = '[ParametrosMunicipios] [Api] Get all Success',
  GetAllParametrosMunicipiosFailure = '[ParametrosMunicipios] [Api] Get all Failure',

  CreateModalParametrosMunicipios = '[ParametrosMunicipios] [Action] create modal',
  CreateModalParametrosMunicipiosSuccess = '[ParametrosMunicipios] [Action] create modal Success',
  CreateModalParametrosMunicipiosFailure = '[ParametrosMunicipios] [Action] create modal Failure',
  PostModalParametrosMunicipiosSuccess = '[ParametrosMunicipios] [Action] [Api] create Success',
  PostModalParametrosMunicipiosFailure = '[ParametrosMunicipios] [Action] [Api] create Failure',

  EditModalParametrosMunicipios = '[ParametrosMunicipios] [Action] Edit modal',
  EditModalParametrosMunicipiosSuccess = '[ParametrosMunicipios] [Action] Edit modal Success',
  EditModalParametrosMunicipiosFailure = '[ParametrosMunicipios] [Action] Edit modal Failure',
  PutModalParametrosMunicipiosSuccess = '[ParametrosMunicipios] [Action] [Api] Put Success',
  PutModalParametrosMunicipiosFailure = '[ParametrosMunicipios] [Action] [Api] Put Failure',

  DeleteParametrosMunicipios = '[ParametrosMunicipios] [Action] Delete',
  DeleteParametrosMunicipiosSuccess = '[ParametrosMunicipios] [Action] [Api] Delete Success',
  DeleteParametrosMunicipiosFailure = '[ParametrosMunicipios] [Action] [Api] Delete Failure',

  SortParametrosMunicipios = '[ParametrosMunicipios] [Action] Sort',
  FilterParametrosMunicipios = '[ParametrosMunicipios] [Action] Filter',
  PaginatorParametrosMunicipios = '[ParametrosMunicipios] [Action] Paginator',
}

export const initParametrosMunicipios = createAction( ParametrosMunicipiosActionsNames.Init);

export const getAllParametrosMunicipios = createAction(ParametrosMunicipiosActionsNames.GetAllParametrosMunicipios);

export const getAllParametrosMunicipiosSuccess = createAction(
  ParametrosMunicipiosActionsNames.GetAllParametrosMunicipiosSuccess,
  props<{ municipios: Municipios[] , municipiosFiltro: Municipios[] }>()
);

export const getAllParametrosMunicipiosFailure = createAction(
  ParametrosMunicipiosActionsNames.GetAllParametrosMunicipiosFailure,
  props<{  error: string   }>()
);

export const createModalParametrosMunicipios = createAction(
  ParametrosMunicipiosActionsNames.CreateModalParametrosMunicipios,
  props<{  edit: Municipios }>()
);

export const createModalParametrosMunicipiosSuccess = createAction(
  ParametrosMunicipiosActionsNames.CreateModalParametrosMunicipiosSuccess,
  props<{ edit: Municipios}>()
);

export const createModalParametrosMunicipiosFailure = createAction(
  ParametrosMunicipiosActionsNames.CreateModalParametrosMunicipiosFailure,
  props<{  edit: Municipios, error: string }>()
);

export const postModalParametrosMunicipiosSuccess = createAction(
  ParametrosMunicipiosActionsNames.PostModalParametrosMunicipiosSuccess,
  props<{ edit: Municipios, apiResponse: ApiResponse}>()
);

export const postModalParametrosMunicipiosFailure = createAction(
  ParametrosMunicipiosActionsNames.PostModalParametrosMunicipiosFailure,
  props<{  edit: Municipios, error: string }>()
);

export const editModalParametrosMunicipios = createAction(
  ParametrosMunicipiosActionsNames.EditModalParametrosMunicipios,
  props<{ edit: Municipios }>()
);

export const editModalParametrosMunicipiosSuccess = createAction(
  ParametrosMunicipiosActionsNames.EditModalParametrosMunicipiosSuccess,
  props<{ edit: Municipios}>()
);

export const editModalParametrosMunicipiosFailure = createAction(
  ParametrosMunicipiosActionsNames.EditModalParametrosMunicipiosFailure,
  props<{ error: string }>()
);

export const putModalParametrosMunicipiosSuccess= createAction(
  ParametrosMunicipiosActionsNames.PutModalParametrosMunicipiosSuccess,
  props<{ edit: Municipios, apiResponse: ApiResponse}>()
);

export const putModalParametrosMunicipiosFailure = createAction(
  ParametrosMunicipiosActionsNames.PutModalParametrosMunicipiosFailure,
  props<{  edit: Municipios, error: string }>()
);

export const deleteParametrosMunicipios = createAction(
  ParametrosMunicipiosActionsNames.DeleteParametrosMunicipios,
  props<{ edit: Municipios}>()
);

export const deleteParametrosMunicipiosSuccess = createAction(
  ParametrosMunicipiosActionsNames.DeleteParametrosMunicipiosSuccess,
  props<{ edit: Municipios, apiResponse: ApiResponse}>()
);

export const deleteParametrosMunicipiosFailure = createAction(
  ParametrosMunicipiosActionsNames.DeleteParametrosMunicipiosFailure,
  props<{ error: string }>()
);

export const sortParametrosMunicipios = createAction(
  ParametrosMunicipiosActionsNames.SortParametrosMunicipios,
  props<{ column: any, direction: any}>()
);

export const filterParametrosMunicipios = createAction(
  ParametrosMunicipiosActionsNames.FilterParametrosMunicipios,
  props<{ filtro: string}>()
);

export const paginatorParametrosMunicipios = createAction(
  ParametrosMunicipiosActionsNames.PaginatorParametrosMunicipios,
  props<{ paginator: number}>()
);

