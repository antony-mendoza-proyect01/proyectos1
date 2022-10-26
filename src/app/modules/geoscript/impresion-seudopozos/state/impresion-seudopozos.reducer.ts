import {ImpresionSeudopozosState} from './impresion-seudopozos.state';
import {createReducer, on} from '@ngrx/store';
import {ReglaLength} from '../../../../data/models/descripcion-nucleos';

import {
  ID_GRAFICA,
  ID_SEUDOPOZO,
  ID_SEUDOPOZO_LONGUITUD,
  scrollIntoView
} from '../../../../shared/services/emit.service';
import {
  getAllByPozoImpresionSeudopozos,
  getAllByPozoImpresionSeudopozosFailure,
  getAllByPozoImpresionSeudopozosSuccess,
  initImpresionSeudopozos,
  pasarImpresionSeudopozos,
  pdfImpresionSeudopozos,
  seudopozosEditImpresionSeudopozos
} from './impresion-seudopozos.actions';
import {ERROR_APP} from '../../../../core/const/variables.const';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {ROUTES_IMAGE} from '../../../../core/const/image.const';


import * as htmlToImage from 'html-to-image';

const inclusiveRange = (start, end, step) => {
  return Array.from(Array.from(Array(Math.ceil((end-start+1)/step)).keys()), x => start+ x*step);
}

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
//

// estado inicial de las variables
export const initialState: ImpresionSeudopozosState = {
  loading: true,
  error: '',
  seudopozoList: [],
  seudopozoEdit: null,
  reglaLength: [],
  seudopozoInfo: null,
  finalSeudopozo: 1,
  longuitudRegla: 1,
};
// inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const impresionSeudopozosReducer = createReducer(
  initialState,
  // get all
  on(initImpresionSeudopozos, (state: ImpresionSeudopozosState) => {
    return {...state, loading: false, error: '',  seudopozoList:[], seudopozoEdit: null, reglaLength: [], seudopozoInfo: null}
  }),
  on(getAllByPozoImpresionSeudopozos, (state: ImpresionSeudopozosState) => {
    return {...state, loading: true, error: '',  seudopozoList:[], seudopozoEdit: null, reglaLength: [], seudopozoInfo: null}
  }),
  on(getAllByPozoImpresionSeudopozosSuccess, (state: ImpresionSeudopozosState, {grafica}) => {
    // logica de la creacion de la regla del pozo
    // se traen las ultimas posiciones para tener el final del pozo, con los dos intervalos que se pitan

    // final del pozo
    let finalSeudopozo = 0;

    if(grafica.seudopozoList.length) {
      finalSeudopozo = grafica.seudopozoList[grafica.seudopozoList.length - 1].hasta_desviado;
    }

    let longuitudRegla = ID_SEUDOPOZO_LONGUITUD;

    // inclusiveRange: partidura del finalDelPozo en 50
    const tamanoRegla = inclusiveRange(0, finalSeudopozo,longuitudRegla);

    // objeto nuevo, para agregar las posiciones, para poderlo mover
    let posicion = 0;
    let seudopozoList = [];
    grafica.seudopozoList.forEach( element => {
      posicion += 1;
      let copia = {...element, posicion: posicion};
      seudopozoList.push(copia);
    });

    // codigo para la creacion de la regla
    const reglaLength: ReglaLength[] = [];
    reglaLength.push({altura: 0 })
    tamanoRegla.forEach(altura => {
      reglaLength.push({altura: altura + longuitudRegla });
    });

    // seleccion del nucleos selected
    let seudopozoEdit = null;
    if(grafica.seudopozoList.length) {
      seudopozoEdit = seudopozoList[0];
    }

    return {...state, loading: false, seudopozoList,reglaLength, seudopozoEdit,
      seudopozoInfo: grafica.seudopozoInfo, finalSeudopozo, longuitudRegla
    }
  }),
  on(getAllByPozoImpresionSeudopozosFailure, (state: ImpresionSeudopozosState, { error}) => {
    return {...state, loading: false, error: ERROR_APP}
  }),
  on(pasarImpresionSeudopozos, (state: ImpresionSeudopozosState, {posicion}) => {
    let seudopozoEdit = state.seudopozoEdit;
    const seudopozoPosicion = state.seudopozoList.find(e => e.posicion === posicion);

    if(seudopozoPosicion){
      seudopozoEdit = seudopozoPosicion;
    }

    scrollIntoView(String(ID_SEUDOPOZO + seudopozoEdit.posicion));

    return {...state, seudopozoEdit}
  }),
  on(seudopozosEditImpresionSeudopozos, (state: ImpresionSeudopozosState, {seudopozoEdit}) => {
    return {...state, seudopozoEdit}
  }),
  on(pdfImpresionSeudopozos, (state: ImpresionSeudopozosState, {codPozo}) => {
    htmlToImage.toCanvas(document.getElementById(ID_GRAFICA))
      .then(function (canvas: HTMLCanvasElement) {
        // console.log(canvas);
        // var b_context1 = canvas.getContext("2d");
        // console.log(b_context1);
        // b_context1.canvas.height = 1000;

        // let dimensionesOriginales = {width: canvas.width, height: canvas.height};
        // b_context1.drawImage(canvas, 0, 0, dimensionesOriginales.width /= 2, dimensionesOriginales.height /= 2);

        // b_context1.drawImage(canvas,0, 0, canvas.width , 500, 10, 10, 90, 176);
        // b_context1.drawImage(canvas,0, 0, canvas.width , 500);
        const ctx = canvas.getContext('2d');
        var image = new Image();
        image.src = canvas.toDataURL();

        image.onload = function(){
          ctx.drawImage(image, 150, 200, 500, 300, 60,60, 500, 300);
        }


        var dd = {
          content: [
            {
              margin: [0, 5, 0, 0],
              table: {
                widths: [150, '*', 100],
                body: [
                  ['', {image: ROUTES_IMAGE.logoBase64, width: 150}, ''],
                  ['', {text: `SEUDOPOZO ${codPozo}`, margin: [20, 0, 0, 0]}, ''],
                ]
              },layout: 'noBorders'
            },
            {
              margin: [0, 10, 0, 0],
              table: {
                widths: ['*','*','*','*','*','*','*','*'],
                body: [
                  [
                    {text: 'Este:', style: 'fs_10'}, {text: `${state.seudopozoInfo.este_planeado}`, style: 'fs_10'},
                    {text: 'Norte:', style: 'fs_10'}, {text: `${state.seudopozoInfo.norte_planeado}`, style: 'fs_10'},
                    {text: 'Elevacion:', style: 'fs_10'}, {text: `${state.seudopozoInfo.elevacion}`, style: 'fs_10'},
                    {text: 'Profundidad:', style: 'fs_10'}, {text: `${state.seudopozoInfo.profundidad_planeada}`, style: 'fs_10'},
                  ],
                  [
                    {text: 'Area:', style: 'fs_10'}, {text: `${state.seudopozoInfo.area}`, style: 'fs_10'},
                    {text: 'Tipo Pozo:', style: 'fs_10'}, {text: `${state.seudopozoInfo.tipo_pozo}`, style: 'fs_10'},
                    {text: 'Buzamiento Promedio:', style: 'fs_10'}, {text: `${state.seudopozoInfo.buzamiento_promedio}`, style: 'fs_10'},
                    {text: 'Pozo desviado:', style: 'fs_10'}, {text: `${state.seudopozoInfo.desviacion_promedio}`, style: 'fs_10'},
                  ],
                ],
              },layout: 'noBorders'
            },
            // {image:  b_context1.canvas.toDataURL( )},
            {image:  image, width: 500},
          ],
          styles: {
            fs_10: {fontSize: 10},
            fs_9: {fontSize: 9},
          }

        }


        pdfMake.createPdf(dd).open();
      });
    return {...state}
  })

);
