// RUTAS DE LA NAVEGACION
import {MODULO} from './navigation.string.const';
import {URL_PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__TARIFAS} from "./navigation.const";

export const INTERNAL_PATHS = {
  LOGIN: `${MODULO.LOGIN.link}`,

  RAIZ: `${MODULO.RAIZ.link}`,


  GEOSCRIPT: `${MODULO.GEOSCRIPT.link}`,
  GEOSCRIPT_DATOPOZO: `${MODULO.GEOSCRIPT.DATO_POZO.link}`,
  GEOSCRIPT_DIPMETER: `${MODULO.GEOSCRIPT.DIPMETER.link}`,
  GEOSCRIPT_DATOS_CARBON: `${MODULO.GEOSCRIPT.DATOS_CARBON.link}`,
  GEOSCRIPT_DESCRIPCION_NUCLEOS: `${MODULO.GEOSCRIPT.DESCRIPCION_NUCLEOS.link}`,
  GEOSCRIPT_DESCRIPCION_RIPIOS: `${MODULO.GEOSCRIPT.DESCRIPCION_RIPIOS.link}`,
  GEOSCRIPT_SEUDOPOZOS: `${MODULO.GEOSCRIPT.SEUDOPOZOS.link}`,


  FATPOZOS: `${MODULO.FATPOZOS.link}`,

  // CALIBRACION
  CALIBRACIONES: `${MODULO.CALIBRACIONES.link}`,

  CALIBRACIONES_PLANES: `${MODULO.CALIBRACIONES.PLANES.link}`,
  CALIBRACIONES_PLANES__EJECUCION_ACTIVIDADES: `${MODULO.CALIBRACIONES.PLANES.EJECUCION_ACTIVIDADES.link}`,
  CALIBRACIONES_PLANES__CARGAS: `${MODULO.CALIBRACIONES.PLANES.CARGAS.link}`,

  CALIBRACIONES_CONFIGURACION: `${MODULO.CALIBRACIONES.CONFIGURACION.link}`,
  CALIBRACIONES_CONFIGURACION__ACTIVIDADES: `${MODULO.CALIBRACIONES.CONFIGURACION.ACTIVIDADES.link}`,
  CALIBRACIONES_CONFIGURACION__NIVEL_FUENTE: `${MODULO.CALIBRACIONES.CONFIGURACION.NIVEL_FUENTE.link}`,
  CALIBRACIONES_CONFIGURACION__OPERADOR: `${MODULO.CALIBRACIONES.CONFIGURACION.OPERADOR.link}`,
  CALIBRACIONES_CONFIGURACION__SONDA: `${MODULO.CALIBRACIONES.CONFIGURACION.SONDA.link}`,
  CALIBRACIONES_CONFIGURACION__TIPO_FUENTE: `${MODULO.CALIBRACIONES.CONFIGURACION.TIPO_FUENTE.link}`,
  CALIBRACIONES_CONFIGURACION__TIPO_SONDA: `${MODULO.CALIBRACIONES.CONFIGURACION.TIPO_SONDA.link}`,
  CALIBRACIONES_CONFIGURACION__UNIDAD: `${MODULO.CALIBRACIONES.CONFIGURACION.UNIDAD.link}`,
  CALIBRACIONES_CONFIGURACION__WINCHES: `${MODULO.CALIBRACIONES.CONFIGURACION.WINCHES.link}`,

  CALIBRACION_CALIBRACIONES: `${MODULO.CALIBRACIONES.CALIBRACION.link}`,
  CALIBRACION_CALIBRACIONES__SONDA_CABEZA_CABLE: `${MODULO.CALIBRACIONES.CALIBRACION.SONDA_CABEZA_CABLE.link}`,
  CALIBRACION_CALIBRACIONES__SONDA_RUEDA_CONTADORA: `${MODULO.CALIBRACIONES.CALIBRACION.SONDA_RUEDA_CONTADORA.link}`,
  CALIBRACION_CALIBRACIONES__SUSCEPTIBILIDAD_MAGNETICA: `${MODULO.CALIBRACIONES.CALIBRACION.SUSCEPTIBILIDAD_MAGNETICA.link}`,
  CALIBRACION_CALIBRACIONES__DEPMETER: `${MODULO.CALIBRACIONES.CALIBRACION.DEPMETER.link}`,
  CALIBRACION_CALIBRACIONES__DATO_POZO_REGISTRADO: `${MODULO.CALIBRACIONES.CALIBRACION.DATO_POZO_REGISTRADO.link}`,
  CALIBRACION_CALIBRACIONES__DENSIDAD: `${MODULO.CALIBRACIONES.CALIBRACION.DENSIDAD.link}`,


// ADMINISTRACION
  ADMIN: `${MODULO.ADMIN.link}`,
  ADMIN_USUARIO: `${MODULO.ADMIN.USUARIO.link}`,

  // PARAMETROS PARAMETROS
  ADMIN_PARAMETROS_FACTURACION: `${MODULO.ADMIN.PARAMETROS_FACTURACION.link}`,
  ADMIN_PARAMETROS_FACTURACION__AREA: `${MODULO.ADMIN.PARAMETROS_FACTURACION.AREA.link}`,
  ADMIN_PARAMETROS_FACTURACION__CAUDAL: `${MODULO.ADMIN.PARAMETROS_FACTURACION.CAUDAL.link}`,
  ADMIN_PARAMETROS_FACTURACION__DESCRIPCION: `${MODULO.ADMIN.PARAMETROS_FACTURACION.DESCRIPCION.link}`,
  ADMIN_PARAMETROS_FACTURACION__MATERIAL: `${MODULO.ADMIN.PARAMETROS_FACTURACION.MATERIAL.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__AREA: `${MODULO.ADMIN.PARAMETROS_FACTURACION.AREA.link}`,
  ADMIN_PARAMETROS_FACTURACION__EMPRESA: `${MODULO.ADMIN.PARAMETROS_FACTURACION.EMPRESA.link}`,
  ADMIN_PARAMETROS_FACTURACION__EQUIPO: `${MODULO.ADMIN.PARAMETROS_FACTURACION.EQUIPO.link}`,
  ADMIN_PARAMETROS_FACTURACION__FLUIDO: `${MODULO.ADMIN.PARAMETROS_FACTURACION.FLUIDO.link}`,
  ADMIN_PARAMETROS_FACTURACION__SONDA: `${MODULO.ADMIN.PARAMETROS_FACTURACION.SONDA.link}`,
  ADMIN_PARAMETROS_FACTURACION__PROGRAMA: `${MODULO.ADMIN.PARAMETROS_FACTURACION.PROGRAMA.link}`,
  ADMIN_PARAMETROS_FACTURACION__TIPOPOZO: `${MODULO.ADMIN.PARAMETROS_FACTURACION.TIPOPOZO.link}`,
  ADMIN_PARAMETROS_FACTURACION__TURNO: `${MODULO.ADMIN.PARAMETROS_FACTURACION.TURNO.link}`,
  ADMIN_PARAMETROS_FACTURACION__CONTRATO_REGISTRO: `${MODULO.ADMIN.PARAMETROS_FACTURACION.CONTRATO_REGISTRO.link}`,
  ADMIN_PARAMETROS_FACTURACION__MUNICIPIO: `${MODULO.ADMIN.PARAMETROS_FACTURACION.MUNICIPIO.link}`,
  ADMIN_PARAMETROS_FACTURACION__GEOLOGO: `${MODULO.ADMIN.PARAMETROS_FACTURACION.GEOLOGO.link}`,
  ADMIN_PARAMETROS_FACTURACION__SUPERVISOR: `${MODULO.ADMIN.PARAMETROS_FACTURACION.SUPERVISOR.link}`,
  ADMIN_PARAMETROS_FACTURACION__CONTRATO_PERFORACION: `${MODULO.ADMIN.PARAMETROS_FACTURACION.CONTRATO_PERFORACION.link}`,


  //  PARAMETROS DESCRIPCION
  ADMIN_PARAMETROS_DESCRIPCION: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__CALIFICADOR: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.CALIFICADOR.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__LITOFACIE: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.LITOFACIE.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__CODIGO_PROYECTO: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.CODIGO_PROYECTO.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__COLOR: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.COLOR.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__LABORATORIO: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.LABORATORIO.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__GRANO: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.GRANO.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__DISTRITO: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.DISTRITO.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__DESCRIPCION_TECTONICA: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.DESCRIPCION_TECTONICA.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__METEORIZACION: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.METEORIZACION.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__ORIGEN_DATO: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.ORIGEN_DATO.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__PARASECUENCIA: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.PARASECUENCIA.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__TIPO_PERFORACION: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.TIPO_PERFORACION.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__LITOFACIE_COLOR: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.LITOFACIE_COLOR.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__PROVINCIA: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.PROVINCIA.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__TONO: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.TONO.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__VISIBILIDAD: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.VISIBILIDAD.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__NOMBRE_SUPERFICIE: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.NOMBRE_SUPERFICIE.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__LITOLOGIA: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.LITOLOGIA.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__MINABILIDAD: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.MINABILIDAD.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__DUREZA: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.DUREZA.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__HUMEDAD: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.HUMEDAD.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__ESPACIAMIENTOS: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.ESPACIAMIENTO.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__DESCRIPCION_SEDIMENTARIA: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.DESCRIPCION_SEDIMENTARIA.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__PATRON: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.PATRON.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__NOMBRES_INTERVALOS: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.NOMBRES_INTERVALOS.link}`,
  ADMIN_PARAMETROS_DESCRIPCION__TIPO_TECTONICA_CONTROLLER: `${MODULO.ADMIN.PARAMETROS_DESCRIPCION.TIPO_TECTONICA_CONTROLLER.link}`,


  //componentes de los modulos
  GEOSCRIPT_DESCRIPCION_NUCLEOS__COMPONENTS__LITOFACE: `${MODULO.GEOSCRIPT.DESCRIPCION_NUCLEOS.COMPONENTS.LITOFACE.link}`,
  GEOSCRIPT_DESCRIPCION_NUCLEOS__COMPONENTS__SEDIMENTARIAS: `${MODULO.GEOSCRIPT.DESCRIPCION_NUCLEOS.COMPONENTS.SEDIMENTARIAS.link}`,
  GEOSCRIPT_DESCRIPCION_NUCLEOS__COMPONENTS__TECTONICA: `${MODULO.GEOSCRIPT.DESCRIPCION_NUCLEOS.COMPONENTS.TECTONICA.link}`,


  PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__TARIFAS: `${MODULO.ADMIN.PARAMETROS_FACTURACION.CONTRATO_PERFORACION.COMPONENTS.TARIFAS.link}`,
  PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__AJUSTES_DESVIACION: `${MODULO.ADMIN.PARAMETROS_FACTURACION.CONTRATO_PERFORACION.COMPONENTS.AJUSTES_DESVIACION.link}`,
  PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__AJUSTES_PORCENTAJE_VERTICALIDAD: `${MODULO.ADMIN.PARAMETROS_FACTURACION.CONTRATO_PERFORACION.COMPONENTS.AJUSTES_PORCENTAJE_VERTICALIDAD.link}`,
  PARAMETROS_CONTRATO_PERFORACION__COMPONENTS__AJUSTES_PORCENTAJE_RECUPERACION: `${MODULO.ADMIN.PARAMETROS_FACTURACION.CONTRATO_PERFORACION.COMPONENTS.AJUSTES_PORCENTAJE_RECUPERACION.link}`,

  GEOSCRIPT_DATOS_CARBON__COMPONENTS__SUPERFICIE_POZO: `${MODULO.GEOSCRIPT.DATOS_CARBON.COMPONENTS.SUPERFICIE_POZO.link}`,

};
