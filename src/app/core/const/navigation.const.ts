import {Aplication} from '../../data/interfaces/iNavigation';
import {MODULO} from './navigation.string.const';
import {INTERNAL_PATHS} from './routes.conts';

export const URL_RAIZ = `/${INTERNAL_PATHS.RAIZ}`;
export const URL_GEOSCRIPT = `/${INTERNAL_PATHS.RAIZ}/${INTERNAL_PATHS.GEOSCRIPT}`;

export const URL_ADMIN = `/${INTERNAL_PATHS.RAIZ}/${INTERNAL_PATHS.ADMIN}`;
export const URL_ADMIN__PARAMETROS_FACTURACION = `/${URL_ADMIN}/${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION}`;
export const URL_ADMIN__PARAMETROS_DESCRIPCION = `/${URL_ADMIN}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION}`;


export const URL_FATPOZOS = `/${INTERNAL_PATHS.RAIZ}/${INTERNAL_PATHS.FATPOZOS}`;

export const URL_CALIBRACIONES = `/${INTERNAL_PATHS.RAIZ}/${INTERNAL_PATHS.CALIBRACIONES}`;
export const URL_CALIBRACIONES__PLANES = `/${URL_CALIBRACIONES}/${INTERNAL_PATHS.CALIBRACIONES_PLANES}`;
export const URL_CALIBRACIONES__CALIBRACIONES = `/${URL_CALIBRACIONES}/${INTERNAL_PATHS.CALIBRACION_CALIBRACIONES}`;
export const URL_CALIBRACIONES__CONFIGURACION = `/${URL_CALIBRACIONES}/${INTERNAL_PATHS.CALIBRACIONES_CONFIGURACION}`;


export const NAVIGATION_APLICATION: Aplication[] = [
  {
    titulo: MODULO.FATPOZOS.titulo,
    link: URL_FATPOZOS,
    navegacion: [
    ]
  },
  {
    titulo: MODULO.GEOSCRIPT.titulo,
    link: URL_GEOSCRIPT,
    navegacion: [
      {
        titulo: MODULO.GEOSCRIPT.DATO_POZO.titulo,
        link: `${URL_GEOSCRIPT}/${INTERNAL_PATHS.GEOSCRIPT_DATOPOZO}`,
        tieneMenu: false,
        icono: '',
        menuActivo: false,
        idCondicion: 'DESCRIPCION',
        subMenu: [

        ]
      },
      {
        titulo: MODULO.GEOSCRIPT.DIPMETER.titulo,
        link: `${URL_GEOSCRIPT}/${INTERNAL_PATHS.GEOSCRIPT_DIPMETER}`,
        tieneMenu: false,
        icono: '',
        menuActivo: false,
        idCondicion: 'DESCRIPCION',
        subMenu: [

        ]
      },
      {
        titulo: MODULO.GEOSCRIPT.DATOS_CARBON.titulo,
        link: `${URL_GEOSCRIPT}/${INTERNAL_PATHS.GEOSCRIPT_DATOS_CARBON}`,
        tieneMenu: false,
        icono: '',
        menuActivo: false,
        idCondicion: 'DESCRIPCION',
        subMenu: [

        ]
      },
      {
        titulo: MODULO.GEOSCRIPT.DESCRIPCION_NUCLEOS.titulo,
        link: `${URL_GEOSCRIPT}/${INTERNAL_PATHS.GEOSCRIPT_DESCRIPCION_NUCLEOS}`,
        tieneMenu: false,
        icono: '',
        menuActivo: false,
        idCondicion: 'DESCRIPCION',
        subMenu: [

        ]
      },
      {
        titulo: MODULO.GEOSCRIPT.DESCRIPCION_RIPIOS.titulo,
        link: `${URL_GEOSCRIPT}/${INTERNAL_PATHS.GEOSCRIPT_DESCRIPCION_RIPIOS}`,
        tieneMenu: false,
        icono: '',
        menuActivo: false,
        idCondicion: 'DESCRIPCION',
        subMenu: [

        ]
      },
      {
        titulo: MODULO.GEOSCRIPT.SEUDOPOZOS.titulo,
        link: `${URL_GEOSCRIPT}/${INTERNAL_PATHS.GEOSCRIPT_SEUDOPOZOS}`,
        tieneMenu: false,
        icono: '',
        menuActivo: false,
        idCondicion: 'SEUDOPOZO',
        subMenu: [

        ]
      },
    ]
  },
  {
    titulo: MODULO.CALIBRACIONES.titulo,
    link: URL_CALIBRACIONES,
    navegacion: [
      {
        titulo: MODULO.CALIBRACIONES.PLANES.titulo,
        link: `${URL_CALIBRACIONES__PLANES}`,
        tieneMenu: true,
        icono: '',
        menuActivo: false,
        subMenu: [
          {
            titulo: MODULO.CALIBRACIONES.PLANES.EJECUCION_ACTIVIDADES.titulo,
            link: `${URL_CALIBRACIONES__PLANES}/${INTERNAL_PATHS.CALIBRACIONES_PLANES__EJECUCION_ACTIVIDADES}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.CALIBRACIONES.PLANES.CARGAS.titulo,
            link: `${URL_CALIBRACIONES__PLANES}/${INTERNAL_PATHS.CALIBRACIONES_PLANES__CARGAS}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
        ]
      },
      {
        titulo: MODULO.CALIBRACIONES.CALIBRACION.titulo,
        link: `${URL_CALIBRACIONES__CALIBRACIONES}`,
        tieneMenu: true,
        icono: '',
        menuActivo: false,
        subMenu: [
          {
            titulo: MODULO.CALIBRACIONES.CALIBRACION.SONDA_CABEZA_CABLE.titulo,
            link: `${URL_CALIBRACIONES__CALIBRACIONES}/${INTERNAL_PATHS.CALIBRACION_CALIBRACIONES__SONDA_CABEZA_CABLE}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.CALIBRACIONES.CALIBRACION.SONDA_RUEDA_CONTADORA.titulo,
            link: `${URL_CALIBRACIONES__CALIBRACIONES}/${INTERNAL_PATHS.CALIBRACION_CALIBRACIONES__SONDA_RUEDA_CONTADORA}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.CALIBRACIONES.CALIBRACION.SUSCEPTIBILIDAD_MAGNETICA.titulo,
            link: `${URL_CALIBRACIONES__CALIBRACIONES}/${INTERNAL_PATHS.CALIBRACION_CALIBRACIONES__SUSCEPTIBILIDAD_MAGNETICA}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.CALIBRACIONES.CALIBRACION.DEPMETER.titulo,
            link: `${URL_CALIBRACIONES__CALIBRACIONES}/${INTERNAL_PATHS.CALIBRACION_CALIBRACIONES__DEPMETER}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.CALIBRACIONES.CALIBRACION.DATO_POZO_REGISTRADO.titulo,
            link: `${URL_CALIBRACIONES__CALIBRACIONES}/${INTERNAL_PATHS.CALIBRACION_CALIBRACIONES__DATO_POZO_REGISTRADO}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.CALIBRACIONES.CALIBRACION.DENSIDAD.titulo,
            link: `${URL_CALIBRACIONES__CALIBRACIONES}/${INTERNAL_PATHS.CALIBRACION_CALIBRACIONES__DENSIDAD}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
        ]
      },
      {
        titulo: MODULO.CALIBRACIONES.CONFIGURACION.titulo,
        link: `${URL_CALIBRACIONES__CONFIGURACION}`,
        tieneMenu: true,
        icono: '',
        menuActivo: false,
        subMenu: [
          {
            titulo: MODULO.CALIBRACIONES.CONFIGURACION.ACTIVIDADES.titulo,
            link: `${URL_CALIBRACIONES__CONFIGURACION}/${INTERNAL_PATHS.CALIBRACIONES_CONFIGURACION__ACTIVIDADES}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.CALIBRACIONES.CONFIGURACION.NIVEL_FUENTE.titulo,
            link: `${URL_CALIBRACIONES__CONFIGURACION}/${INTERNAL_PATHS.CALIBRACIONES_CONFIGURACION__NIVEL_FUENTE}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.CALIBRACIONES.CONFIGURACION.OPERADOR.titulo,
            link: `${URL_CALIBRACIONES__CONFIGURACION}/${INTERNAL_PATHS.CALIBRACIONES_CONFIGURACION__OPERADOR}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.CALIBRACIONES.CONFIGURACION.SONDA.titulo,
            link: `${URL_CALIBRACIONES__CONFIGURACION}/${INTERNAL_PATHS.CALIBRACIONES_CONFIGURACION__SONDA}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.CALIBRACIONES.CONFIGURACION.TIPO_FUENTE.titulo,
            link: `${URL_CALIBRACIONES__CONFIGURACION}/${INTERNAL_PATHS.CALIBRACIONES_CONFIGURACION__TIPO_FUENTE}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.CALIBRACIONES.CONFIGURACION.TIPO_SONDA.titulo,
            link: `${URL_CALIBRACIONES__CONFIGURACION}/${INTERNAL_PATHS.CALIBRACIONES_CONFIGURACION__TIPO_SONDA}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.CALIBRACIONES.CONFIGURACION.UNIDAD.titulo,
            link: `${URL_CALIBRACIONES__CONFIGURACION}/${INTERNAL_PATHS.CALIBRACIONES_CONFIGURACION__UNIDAD}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.CALIBRACIONES.CONFIGURACION.WINCHES.titulo,
            link: `${URL_CALIBRACIONES__CONFIGURACION}/${INTERNAL_PATHS.CALIBRACIONES_CONFIGURACION__WINCHES}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
        ]
      },
    ]
  },
  {
    titulo: MODULO.ADMIN.titulo,
    link: URL_ADMIN,
    navegacion: [
      {
        titulo: MODULO.ADMIN.USUARIO.titulo,
        link:  `${URL_ADMIN}/${INTERNAL_PATHS.ADMIN_USUARIO}`,
        tieneMenu: false,
        menuActivo: false,
        subMenu: []
      },
      {
        titulo: MODULO.ADMIN.PARAMETROS_FACTURACION.titulo,
        link: `${URL_ADMIN__PARAMETROS_FACTURACION}`,
        tieneMenu: true,
        icono: '',
        menuActivo: false,
        subMenu: [
          {
            titulo: MODULO.ADMIN.PARAMETROS_FACTURACION.AREA.titulo,
            link: `${URL_ADMIN__PARAMETROS_FACTURACION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__AREA}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_FACTURACION.CONTRATO_REGISTRO.titulo,
            link: `${URL_ADMIN__PARAMETROS_FACTURACION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__CONTRATO_REGISTRO}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_FACTURACION.CONTRATO_PERFORACION.titulo,
            link: `${URL_ADMIN__PARAMETROS_FACTURACION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__CONTRATO_PERFORACION}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_FACTURACION.CAUDAL.titulo,
            link: `${URL_ADMIN__PARAMETROS_FACTURACION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__CAUDAL}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_FACTURACION.DESCRIPCION.titulo,
            link: `${URL_ADMIN__PARAMETROS_FACTURACION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__DESCRIPCION}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {

            titulo: MODULO.ADMIN.PARAMETROS_FACTURACION.EMPRESA.titulo,
            link: `${URL_ADMIN__PARAMETROS_FACTURACION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__EMPRESA}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_FACTURACION.MATERIAL.titulo,
            link: `${URL_ADMIN__PARAMETROS_FACTURACION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__MATERIAL}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_FACTURACION.EQUIPO.titulo,
            link: `${URL_ADMIN__PARAMETROS_FACTURACION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__EQUIPO}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_FACTURACION.FLUIDO.titulo,
            link: `${URL_ADMIN__PARAMETROS_FACTURACION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__FLUIDO}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_FACTURACION.SONDA.titulo,
            link: `${URL_ADMIN__PARAMETROS_FACTURACION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__SONDA}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_FACTURACION.PROGRAMA.titulo,
            link: `${URL_ADMIN__PARAMETROS_FACTURACION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__PROGRAMA}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_FACTURACION.TIPOPOZO.titulo,
            link: `${URL_ADMIN__PARAMETROS_FACTURACION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__TIPOPOZO}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_FACTURACION.TURNO.titulo,
            link: `${URL_ADMIN__PARAMETROS_FACTURACION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__TURNO}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_FACTURACION.MUNICIPIO.titulo,
            link: `${URL_ADMIN__PARAMETROS_FACTURACION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__MUNICIPIO}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_FACTURACION.GEOLOGO.titulo,
            link: `${URL_ADMIN__PARAMETROS_FACTURACION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__GEOLOGO}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_FACTURACION.SUPERVISOR.titulo,
            link: `${URL_ADMIN__PARAMETROS_FACTURACION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__SUPERVISOR}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
        ]
      },
      {
        titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.titulo,
        link: `${URL_ADMIN__PARAMETROS_DESCRIPCION}`,
        tieneMenu: true,
        icono: '',
        menuActivo: false,
        subMenu: [
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.CALIFICADOR.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__CALIFICADOR}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.LITOFACIE.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__LITOFACIE}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.CODIGO_PROYECTO.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__CODIGO_PROYECTO}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.COLOR.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__COLOR}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.LABORATORIO.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__LABORATORIO}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.GRANO.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__GRANO}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.DISTRITO.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__DISTRITO}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.DESCRIPCION_TECTONICA.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__DESCRIPCION_TECTONICA}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.METEORIZACION.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__METEORIZACION}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.ORIGEN_DATO.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__ORIGEN_DATO}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.PARASECUENCIA.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__PARASECUENCIA}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.TIPO_PERFORACION.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__TIPO_PERFORACION}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.LITOFACIE_COLOR.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__LITOFACIE_COLOR}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.PROVINCIA.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__PROVINCIA}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },

          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.TONO.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__TONO}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.VISIBILIDAD.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__VISIBILIDAD}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.NOMBRE_SUPERFICIE.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__NOMBRE_SUPERFICIE}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.LITOLOGIA.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__LITOLOGIA}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.MINABILIDAD.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__MINABILIDAD}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.DUREZA.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__DUREZA}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.HUMEDAD.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__HUMEDAD}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.ESPACIAMIENTO.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__ESPACIAMIENTOS}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.DESCRIPCION_SEDIMENTARIA.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__DESCRIPCION_SEDIMENTARIA}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.PATRON.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__PATRON}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.NOMBRES_INTERVALOS.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__NOMBRES_INTERVALOS}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },
          {
            titulo: MODULO.ADMIN.PARAMETROS_DESCRIPCION.TIPO_TECTONICA_CONTROLLER.titulo,
            link:  `${URL_ADMIN__PARAMETROS_DESCRIPCION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__TIPO_TECTONICA_CONTROLLER}`,
            tieneMenu: false,
            menuActivo: false,
            subMenu: []
          },


        ]
      },
    ]
  },
];


//componentes de los modulos
export const URL_GEOSCRIPT_DESCRIPCION_NUCLEOS = `${URL_GEOSCRIPT}/${INTERNAL_PATHS.GEOSCRIPT_DESCRIPCION_NUCLEOS}`;
export const URL_GEOSCRIPT_DESCRIPCION_NUCLEOS__COMPONENTS__LITOFACE = `${URL_GEOSCRIPT_DESCRIPCION_NUCLEOS}/${INTERNAL_PATHS.GEOSCRIPT_DESCRIPCION_NUCLEOS__COMPONENTS__LITOFACE}`;
export const URL_GEOSCRIPT_DESCRIPCION_NUCLEOS__COMPONENTS__SEDIMENTARIAS = `${URL_GEOSCRIPT_DESCRIPCION_NUCLEOS}/${INTERNAL_PATHS.GEOSCRIPT_DESCRIPCION_NUCLEOS__COMPONENTS__SEDIMENTARIAS}`;
export const URL_GEOSCRIPT_DESCRIPCION_NUCLEOS__COMPONENTS__TECTONICA = `${URL_GEOSCRIPT_DESCRIPCION_NUCLEOS}/${INTERNAL_PATHS.GEOSCRIPT_DESCRIPCION_NUCLEOS__COMPONENTS__TECTONICA}`;

export const URL_PARAMETROS_CONTRATO_PERFORACION = `${URL_ADMIN__PARAMETROS_FACTURACION}/${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__CONTRATO_PERFORACION}`;
export const URL_PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__TARIFAS = `${URL_PARAMETROS_CONTRATO_PERFORACION}/${INTERNAL_PATHS.PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__TARIFAS}`;
export const URL_PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__AJUSTES_DESVIACION = `${URL_PARAMETROS_CONTRATO_PERFORACION}/${INTERNAL_PATHS.PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__AJUSTES_DESVIACION}`;
export const URL_PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__AJUSTES_PORCENTAJE_VERTICALIDAD = `${URL_PARAMETROS_CONTRATO_PERFORACION}/${INTERNAL_PATHS.PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__AJUSTES_PORCENTAJE_VERTICALIDAD}`;
export const URL_PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__AJUSTES_PORCENTAJE_RECUPERACION = `${URL_PARAMETROS_CONTRATO_PERFORACION}/${INTERNAL_PATHS.PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__AJUSTES_PORCENTAJE_RECUPERACION}`;

export const URL_GEOSCRIPT_DATOS_CARBON = `${URL_GEOSCRIPT}/${INTERNAL_PATHS.GEOSCRIPT_DATOS_CARBON}`;
export const URL_GEOSCRIPT_DATOS_CARBON__COMPONENTS__SUPERFICIE_POZO = `${URL_GEOSCRIPT_DATOS_CARBON}/${INTERNAL_PATHS.GEOSCRIPT_DATOS_CARBON__COMPONENTS__SUPERFICIE_POZO}`;
