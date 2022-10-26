  import { LoginState } from "./modules/login/state/login.state";
import {ActionReducerMap} from '@ngrx/store';
import {loginReducer} from './modules/login/state/login.reducer';
import {LoginEffects} from './modules/login/state/login.effects';
import {ParametrosAreasState} from './modules/administracion/parametros-areas/state/parametros-areas.state';
import {parametrosAreasReducer} from './modules/administracion/parametros-areas/state/parametros-areas.reducer';
import {ParametrosCaudalesState} from './modules/administracion/parametros-caudales/state/parametros-caudales.state';
import {parametrosCaudalesReducer} from './modules/administracion/parametros-caudales/state/parametros-caudales.reducer';
import {ParametrosCaudalesEffects} from './modules/administracion/parametros-caudales/state/parametros-caudales.effects';
import {
  ParametrosDescripcionesState
} from './modules/administracion/parametros-descripciones/state/parametros-descripciones.state';
import {
  parametrosDescripcionesReducer
} from './modules/administracion/parametros-descripciones/state/parametros-descripciones.reducer';
import {ParametrosMaterialesState} from './modules/administracion/parametros-materiales/state/parametros-materiales.state';
import {ParametrosEmpresasState} from './modules/administracion/parametros-empresas/state/parametros-empresas.state';
import {ParametrosEquiposState} from './modules/administracion/parametros-equipos/state/parametros-equipos.state';
import {ParametrosFluidosState} from './modules/administracion/parametros-fluidos/state/parametros-fluidos.state';
import {
  parametrosMaterialesReducer
} from './modules/administracion/parametros-materiales/state/parametros-materiales.reducer';
import {parametrosEmpresasReducer} from './modules/administracion/parametros-empresas/state/parametros-empresas.reducer';
import {parametrosEquiposReducer} from './modules/administracion/parametros-equipos/state/parametros-equipos.reducer';
import {parametrosFluidosReducer} from './modules/administracion/parametros-fluidos/state/parametros-fluidos.reducer';
import {
  ParametrosDescripcionesEffects
} from './modules/administracion/parametros-descripciones/state/parametros-descripciones.effects';
import {
  ParametrosMaterialesEffects
} from './modules/administracion/parametros-materiales/state/parametros-materiales.effects';
import {ParametrosEmpresasEffects} from './modules/administracion/parametros-empresas/state/parametros-empresas.effects';
import {ParametrosEquiposEffects} from './modules/administracion/parametros-equipos/state/parametros-equipos.effects';
import {ParametrosFluidosEffects} from './modules/administracion/parametros-fluidos/state/parametros-fluidos.effects';
import {
  AdministracionUsuariosState
} from './modules/administracion/administracion-usuarios/state/administracion-usuarios.state';
import {
  administracionUsuariosReducer
} from './modules/administracion/administracion-usuarios/state/administracion-usuarios.reducer';
import {
  AdministracionUsuariosEffects
} from './modules/administracion/administracion-usuarios/state/administracion-usuarios.effects';
import {
  ParametrosDescripcionLitofaciesState
} from './modules/administracion/parametros-descripciones-litofacies/state/parametros-descripcion-litofacies.state';
import {
  parametrosDescripcionLitofaciesReducer
} from './modules/administracion/parametros-descripciones-litofacies/state/parametros-descripcion-litofacies.reducer';
import {
  ParametrosDescripcionLitofaciesEffects
} from './modules/administracion/parametros-descripciones-litofacies/state/parametros-descripcion-litofacies.effects';
import {ParametrosSondasState} from "./modules/administracion/parametros-sondas/state/parametros-sondas.state";
import { parametrosSondasReducer } from "./modules/administracion/parametros-sondas/state/parametros-sondas.reducer";
import {ParametrosSondasEffects} from "./modules/administracion/parametros-sondas/state/parametros-sondas.effects";
import {ParametrosProgramasEffects} from "./modules/administracion/parametros-programas/state/parametros-programas.effects";
import {ParametrosProgramasState} from "./modules/administracion/parametros-programas/state/parametros-programas.state";
import {parametrosProgramasReducer} from "./modules/administracion/parametros-programas/state/parametros-programas.reducer";
import {
  ParametrosTipoPozosState,
} from "./modules/administracion/parametros-tipo-pozos/state/parametros-tipo-pozos.state";
import {parametrosTipoPozosReducer} from "./modules/administracion/parametros-tipo-pozos/state/parametros-tipo-pozos.reducer";
import {ParametrosTipoPozosEffects} from "./modules/administracion/parametros-tipo-pozos/state/parametros-tipo-pozos.effects";
import {ParametrosTurnosState} from "./modules/administracion/parametros-turnos/state/parametros-turnos.state";
import {parametrosTurnosReducer} from "./modules/administracion/parametros-turnos/state/parametros-turnos.reducer";
import {ParametrosTurnosEffects} from "./modules/administracion/parametros-turnos/state/parametros-turnos.effects";
import {
  ParametrosCalificadoresState
} from "./modules/administracion/parametros-calificadores/state/parametros-calificadores.state";
import {
  parametrosCalificadoresReducer
} from "./modules/administracion/parametros-calificadores/state/parametros-calificadores.reducer";
import {
  ParametrosCalificadoresEffects
} from "./modules/administracion/parametros-calificadores/state/parametros-calificadores.effects";

import {
  ParametrosDescripcionTectonicaState
} from './modules/administracion/parametros-descripciones-tectonicas/state/parametros-descripcion-tectonica.state';
import {
  parametrosDescripcionTectonicaReducer
} from './modules/administracion/parametros-descripciones-tectonicas/state/parametros-descripcion-tectonica.reducer';
import {
  ParametrosDescripcionTectonicaEffects
} from './modules/administracion/parametros-descripciones-tectonicas/state/parametros-descripcion-tectonica.effects';

import {ParametrosLitofaciesState} from "./modules/administracion/parametros-litofacies/state/parametros-litofacies.state";
import {
  parametrosLitofaciesReducer
} from "./modules/administracion/parametros-litofacies/state/parametros-litofacies.reducer";
import {
  ParametrosLitofaciesEffects
} from "./modules/administracion/parametros-litofacies/state/parametros-litofacies.effects";
import {
  ParametrosCodigosProyectosState
} from "./modules/administracion/parametros-codigos-proyectos/state/parametros-codigos-proyectos.state";
import {
  parametrosCodigosProyectosReducer,
} from "./modules/administracion/parametros-codigos-proyectos/state/parametros-codigos-proyectos.reducer";
import {
  ParametrosDescripcionSedimentariaState
} from './modules/administracion/parametros-descripciones-sedimentarias/state/parametros-descripcion-sedimentaria.state';
import {
  parametrosDescripcionSedimentariaReducer
} from './modules/administracion/parametros-descripciones-sedimentarias/state/parametros-descripcion-sedimentaria.reducer';
import {
  ParametrosDescripcionSedimentariaEffects
} from './modules/administracion/parametros-descripciones-sedimentarias/state/parametros-descripcion-sedimentaria.effects';
import {
  ParametrosEspaciamientoState
} from './modules/administracion/parametros-espaciamientos/state/parametros-espaciamiento.state';
import {
  parametrosEspaciamientoReducer
} from './modules/administracion/parametros-espaciamientos/state/parametros-espaciamiento.reducer';
import {ParametrosEspaciamientoEffects} from './modules/administracion/parametros-espaciamientos/state/parametros-espaciamiento.effects';


import {parametrosColoresReducer} from "./modules/administracion/parametros-colores/state/parametros-colores.reducer";
import { ParametrosColoresState } from "./modules/administracion/parametros-colores/state/parametros-colores.state";
import {
  ParametrosLaboratoriosEffects
} from "./modules/administracion/parametros-laboratorios/state/parametros-laboratorios.effects";
import {
  ParametrosLaboratoriosState
} from "./modules/administracion/parametros-laboratorios/state/parametros-laboratorios.state";
import {
  parametrosLaboratoriosReducer
} from "./modules/administracion/parametros-laboratorios/state/parametros-laboratorios.reducer";
import {ParametrosGranosState} from "./modules/administracion/parametros-granos/state/parametros-granos.state";
import {parametrosGranosReducer} from "./modules/administracion/parametros-granos/state/parametros-granos.reducer";
import {ParametrosGranosEffects} from "./modules/administracion/parametros-granos/state/parametros-granos.effects";
import {ParametrosDistritosEffects} from "./modules/administracion/parametros-distritos/state/parametros-distritos.effects";
import { parametrosDistritosReducer } from "./modules/administracion/parametros-distritos/state/parametros-distritos.reducer";
import { ParametrosDistritosState } from "./modules/administracion/parametros-distritos/state/parametros-distritos.state";
import { ParametrosColoresEffects } from "./modules/administracion/parametros-colores/state/parametros-colores.effects";
import {ParametrosAreasEffects} from './modules/administracion/parametros-areas/state/parametros-areas.effects';
import {
  parametrosMeteorizacionesReducer
} from "./modules/administracion/parametros-meteorizaciones/state/parametros-meteorizaciones.reducer";
import {
  ParametrosMeteorizacionesEffects
} from "./modules/administracion/parametros-meteorizaciones/state/parametros-meteorizaciones.effects";
import {
  ParametrosOrigenDatosState
} from "./modules/administracion/parametros-origen-dato/state/parametros-origen-datos.state";
import {
  parametrosOrigenDatosReducer
} from "./modules/administracion/parametros-origen-dato/state/parametros-origen-datos.reducer";
import {
  ParametrosOrigenDatosEffects
} from "./modules/administracion/parametros-origen-dato/state/parametros-origen-datos.effects";
import {
  ParametrosParasecuenciasState
} from "./modules/administracion/parametros-parasecuencias/state/parametros-parasecuencias.state";
import {
  parametrosParasecuenciasReducer
} from "./modules/administracion/parametros-parasecuencias/state/parametros-parasecuencias.reducer";
import {
  ParametrosParasecuenciasEffects
} from "./modules/administracion/parametros-parasecuencias/state/parametros-parasecuencias.effects";
import { parametrosTipoPerforacionesReducer } from "./modules/administracion/parametros-tipo-perforaciones/state/parametros-tipo-perforaciones.reducer";
import { ParametrosTipoPerforacionesState } from "./modules/administracion/parametros-tipo-perforaciones/state/parametros-tipo-perforaciones.state";
import {
  ParametrosTipoPerforacionesEffects
} from "./modules/administracion/parametros-tipo-perforaciones/state/parametros-tipo-perforaciones.effects";
import { ParametrosMeteorizacionesState } from "./modules/administracion/parametros-meteorizaciones/state/parametros-meteorizaciones.state";
import { ParametrosCodigosProyectosEffects } from "./modules/administracion/parametros-codigos-proyectos/state/parametros-codigos-proyectos.effects";
import { ParametrosLitofacieColoresState } from "./modules/administracion/parametros-litofacie-colores/state/parametros-litofacie-colores.state";
import { parametrosLitofacieColoresReducer } from "./modules/administracion/parametros-litofacie-colores/state/parametros-litofacie-colores.reducer";
import {
  ParametrosLitofacieColoresEffects
} from "./modules/administracion/parametros-litofacie-colores/state/parametros-litofacie-colores.effects";
import {
  parametrosProvinciasReducer
} from "./modules/administracion/parametros-provincias/state/parametros-provincias.reducer";
import {
  ParametrosProvinciasEffects
} from "./modules/administracion/parametros-provincias/state/parametros-provincias.effects";
import { ParametrosProvinciasState } from "./modules/administracion/parametros-provincias/state/parametros-provincias.state";
import { ParametrosTonosState } from "./modules/administracion/parametros-tonos/state/parametros-tonos.state";
import { parametrosTonosReducer } from "./modules/administracion/parametros-tonos/state/parametros-tonos.reducer";
import {ParametrosTonosEffects} from "./modules/administracion/parametros-tonos/state/parametros-tonos.effects";
import {
  parametrosVisibilidadesReducer
} from "./modules/administracion/parametros-visibilidades/state/parametros-visibilidades.reducer";
import {
  ParametrosVisibilidadesEffects
} from "./modules/administracion/parametros-visibilidades/state/parametros-visibilidades.effects";
import {
  ParametrosVisibilidadesState
} from "./modules/administracion/parametros-visibilidades/state/parametros-visibilidades.state";
import {
  parametrosNombreSuperficiesReducer
} from "./modules/administracion/parametros-nombre-superficies/state/parametros-nombre-superficies.reducer";
import {
  ParametrosNombreSuperficiesEffects
} from "./modules/administracion/parametros-nombre-superficies/state/parametros-nombre-superficies.effects";

import {ParametrosLitologiasState} from "./modules/administracion/parametros-litologias/state/parametros-litologias.state";
import {
  parametrosLitologiasReducer
} from "./modules/administracion/parametros-litologias/state/parametros-litologias.reducer";
import {GeoscriptState} from './modules/geoscript/geoscript/state/geoscript.state';
import {geoscriptReducer} from './modules/geoscript/geoscript/state/geoscript.reducer';
import {
  ParametrosNombreSuperficiesState
} from './modules/administracion/parametros-nombre-superficies/state/parametros-nombre-superficies.state';
import {GeoscriptEffects} from './modules/geoscript/geoscript/state/geoscript.effects';
import {
  ParametrosLitologiasEffects
} from './modules/administracion/parametros-litologias/state/parametros-litologias.effects';
import {DipmeterState} from './modules/geoscript/dipmeter/state/dipmeter.state';
import {dipmeterReducer} from './modules/geoscript/dipmeter/state/dipmeter.reducer';
import {DipmeterEffects} from './modules/geoscript/dipmeter/state/dipmeter.effects';
import {descripcionNucleosReducer} from './modules/geoscript/descripcion-nucleos/state/descripcion-nucleos.reducer';
import {DescripcionNucleosEffects} from './modules/geoscript/descripcion-nucleos/state/descripcion-nucleos.effects';
import {DescripcionNucleosState} from './modules/geoscript/descripcion-nucleos/state/descripcion-nucleos.state';
import {
  ParametrosMinabilidaesState
} from "./modules/administracion/parametros-minabilidades/state/parametros-minabilidaes.state";
import {
  parametrosMinabilidaesReducer
} from "./modules/administracion/parametros-minabilidades/state/parametros-minabilidaes.reducer";
import {
  ParametrosMinabilidaesEffects
} from "./modules/administracion/parametros-minabilidades/state/parametros-minabilidaes.effects";
import {
  ParametrosContratosRegistroState
} from './modules/administracion/parametros-contrato-registro/state/parametros-contratos-registro.state';
import {
  ParametrosContratosRegistroEffects
} from './modules/administracion/parametros-contrato-registro/state/parametros-contratos-registro.effects';
import {
  parametrosContratosRegistroReducer
} from './modules/administracion/parametros-contrato-registro/state/parametros-contratos-registro.reducer';
import {ParametrosDurezasEffects} from "./modules/administracion/parametros-durezas/state/parametros-durezas.effects";
import {ParametrosDurezasState} from "./modules/administracion/parametros-durezas/state/parametros-durezas.state";
import {parametrosDurezasReducer} from "./modules/administracion/parametros-durezas/state/parametros-durezas.reducer";
import {ParametrosHumedadesState} from "./modules/administracion/parametros-humedades/state/parametros-humedades.state";
import { parametrosHumedadesReducer } from "./modules/administracion/parametros-humedades/state/parametros-humedades.reducer";
import {
  ParametrosMunicipiosState
} from "./modules/administracion/parametros-municipios/state/parametros-municipios.state";
import {
  parametrosMunicipiosReducer
} from "./modules/administracion/parametros-municipios/state/parametros-municipios.reducer";
import {ParametrosPatronState} from "./modules/administracion/parametros-patron/state/parametros-patron.state";
import {parametrosPatronReducer} from "./modules/administracion/parametros-patron/state/parametros-patron.reducer";
import {
  ParametrosHumedadesEffects
} from './modules/administracion/parametros-humedades/state/parametros-humedades.effects';
import {
  ParametrosMunicipiosEffects
} from './modules/administracion/parametros-municipios/state/parametros-municipios.effects';
import {ParametrosPatronEffects} from './modules/administracion/parametros-patron/state/parametros-patron.effects';
import {
  ParametrosNombresIntervalosState
} from './modules/administracion/parametros-nombres-intervalos/state/parametros-nombres-intervalos.state';
import {
  parametrosNombresIntervalosReducer
} from './modules/administracion/parametros-nombres-intervalos/state/parametros-nombres-intervalos.reducer';
import {
  ParametrosNombresIntervalosEffects
} from './modules/administracion/parametros-nombres-intervalos/state/parametros-nombres-intervalos.effects';
import {ParametrosGeologosState} from "./modules/administracion/parametros-geologos/state/parametros-geologos.state";
import {
  parametrosGeologosReducer
} from "./modules/administracion/parametros-geologos/state/parametros-geologos.reducer";
import {
   ParametrosGeologosEffects
} from "./modules/administracion/parametros-geologos/state/parametros-geologos.effects";
import { parametrosSupervisoresReducer } from "./modules/administracion/parametros-supervisores/state/parametros-supervisores.reducer";
import { ParametrosSupervisoresState } from "./modules/administracion/parametros-supervisores/state/parametros-supervisores.state";
import { ParametrosSupervisoresEffects } from "./modules/administracion/parametros-supervisores/state/parametros-supervisores.effects";

import {
  ParametrosContratosPerforacionState
} from './modules/administracion/parametros-contrato-perforacion/state/parametros-contratos-perforacion.state';
import {
  parametrosContratosPerforacionReducer
} from './modules/administracion/parametros-contrato-perforacion/state/parametros-contratos-perforacion.reducer';
import {
  ParametrosContratosPerforacionEffects
} from './modules/administracion/parametros-contrato-perforacion/state/parametros-contratos-perforacion.effects';
import { parametrosTipoTectonicasReducer } from "./modules/administracion/parametros-tipo-tectonicas/state/parametros-tipo-tectonicas.reducer";
import {
  ParametrosTipoTectonicasEffects
} from "./modules/administracion/parametros-tipo-tectonicas/state/parametros-tipo-tectonicas.effects";
import {
  ParametrosTipoTectonicasState
} from "./modules/administracion/parametros-tipo-tectonicas/state/parametros-tipo-tectonicas.state";
import { parametrosContratosRegistroTarifaReducer } from "./modules/administracion/parametros-contrato-perforacion/state/state-tarifa/parametros-contratos-perforacion-tarifa.reducer";
import {
  ParametrosContratosPerforacionTarifaEffects
} from "./modules/administracion/parametros-contrato-perforacion/state/state-tarifa/parametros-contratos-perforacion-tarifa.effects";
  import { ParametrosContratoPerforacionTarifaState } from "./modules/administracion/parametros-contrato-perforacion/state/state-tarifa/parametros-contratos-perforacion-tarifa.state";
  import {
    ParametrosContratoPerforacionAjustesRecuperacionState
  } from "./modules/administracion/parametros-contrato-perforacion/state/state-ajustes-porcentaje-recuperacion/parametros-contratos-perforacion-porcentaje-recuperacion.state";
  import {
    ParametrosContratoPerforacionAjustesRegistroState
  } from "./modules/administracion/parametros-contrato-perforacion/state/state-ajustes-porcentaje-verticalidad-state/parametros-contratos-perforacion-porcentaje-verticalidad.state";
  import { parametrosContratoPerforacionAjustesRegistroReducer } from "./modules/administracion/parametros-contrato-perforacion/state/state-ajustes-porcentaje-verticalidad-state/parametros-contratos-perforacion-porcentaje-verticalidad.reducer";
  import { parametrosContratoPerforacionAjustesRecuperacionReducer } from "./modules/administracion/parametros-contrato-perforacion/state/state-ajustes-porcentaje-recuperacion/parametros-contratos-perforacion-porcentaje-recuperacion.reducer";
  import {
    ParametrosContratoPerforacionAjustesRecuperacionEffects
  } from "./modules/administracion/parametros-contrato-perforacion/state/state-ajustes-porcentaje-recuperacion/parametros-contratos-perforacion-porcentaje-recuperacion.effects";
  import { ParametrosContratoPerforacionAjustesDesviacionState } from "./modules/administracion/parametros-contrato-perforacion/state/state-ajustes-desviaciones/parametros-contratos-perforacion-ajustes-desviacion.state";
  import { parametrosContratoPerforacionAjustesDesviacionReducer } from "./modules/administracion/parametros-contrato-perforacion/state/state-ajustes-desviaciones/parametros-contratos-perforacion-ajustes-desviacion.reducer";
  import { ParametrosContratoPerforacionAjustesDesviacionEffects } from "./modules/administracion/parametros-contrato-perforacion/state/state-ajustes-desviaciones/parametros-contratos-perforacion-ajustes-desviacion.effects";
  import {
    ParametrosContratoPerforacionAjustesRegistroEffects
  } from "./modules/administracion/parametros-contrato-perforacion/state/state-ajustes-porcentaje-verticalidad-state/parametros-contratos-perforacion-porcentaje-verticalidad.effects";
  import {DatosCarbonState} from "./modules/geoscript/datos-carbon/state/datos-carbon.state";
  import {datosCarbonReducer} from "./modules/geoscript/datos-carbon/state/datos-carbon.reducer";
  import {DatosCarbonEffects} from "./modules/geoscript/datos-carbon/state/datos-carbon.effects";
  import {
    SuperficiePozoState
  } from "./modules/geoscript/datos-carbon/state/state-superficie-pozo/superficie-pozo.state";
  import {
    superficePozoReducer
  } from "./modules/geoscript/datos-carbon/state/state-superficie-pozo/superficie-pozo.reducer";
  import {
    SuperficiePozoEffects
  } from "./modules/geoscript/datos-carbon/state/state-superficie-pozo/superficie-pozo.effects";
  import {
    CalibracionSondaCabezaCableState
  } from './modules/calibraciones/calibracion-sonda-cabeza-cable/state/calibracion-sonda-cabeza-cable.state';
  import {
    calibracionSondaCabezaCableReducer
  } from './modules/calibraciones/calibracion-sonda-cabeza-cable/state/calibracion-sonda-cabeza-cable.reducer';
  import {
    CalibracionSondaCabezaCableEffects
  } from './modules/calibraciones/calibracion-sonda-cabeza-cable/state/calibracion-sonda-cabeza-cable.effects';

  import {ImpresionSeudopozosState} from './modules/geoscript/impresion-seudopozos/state/impresion-seudopozos.state';
  import {
    impresionSeudopozosReducer
  } from './modules/geoscript/impresion-seudopozos/state/impresion-seudopozos.reducer';
  import {
    ImpresionSeudopozosEffects
  } from './modules/geoscript/impresion-seudopozos/state/impresion-seudopozos.effects';

  import {
    CalibracionSondaRuedaContadoraState
  } from "./modules/calibraciones/calibracion-sonda-rueda-contadora/state/calibracion-sonda-rueda-contadora..state";
  import {
    calibracionSondaRuedaContadoraReducer
  } from "./modules/calibraciones/calibracion-sonda-rueda-contadora/state/calibracion-sonda-rueda-contadora.reducer";
  import {
    CalibracionSondaRuedaContadoraEffects
  } from "./modules/calibraciones/calibracion-sonda-rueda-contadora/state/calibracion-sonda-rueda-contadora.effects";
  import {
    CalibracionSuceptibilidadMagneticaState
  } from "./modules/calibraciones/calibracion-suceptibilidad-magnetica/state/calibracion-suceptibilidad-magnetica.state";
  import {
    calibracionSuceptibilidadMagneticaReducer
  } from "./modules/calibraciones/calibracion-suceptibilidad-magnetica/state/calibracion-suceptibilidad-magnetica.reducer";
  import {
    CalibracionSuceptibilidadMagneticaEffects
  } from "./modules/calibraciones/calibracion-suceptibilidad-magnetica/state/calibracion-suceptibilidad-magnetica.effects";
  import {
    CalibracionDensidadState
  } from "./modules/calibraciones/calibracion-densidad/state/calibracion-densidad.state";
  import {
    calibracionDensidadReducer
  } from "./modules/calibraciones/calibracion-densidad/state/calibracion-densidad.reducer";
  import {
    CalibracionDensidadEffects
  } from "./modules/calibraciones/calibracion-densidad/state/calibracion-densidad.effects";
  import {
    CalibracionDatosPozoRegistradoState
  } from "./modules/calibraciones/calibracion-datos-pozo-registrado/state/calibracion-datos-pozo-registrado.state";
  import {
    calibracionDatosPozoRegistradoReducer
  } from "./modules/calibraciones/calibracion-datos-pozo-registrado/state/calibracion-datos-pozo-registrado.reducer";
  import {
    CalibracionDatosPozoRegistradoEffects
  } from "./modules/calibraciones/calibracion-datos-pozo-registrado/state/calibracion-datos-pozo-registrado.effects";
  import {
    CalibracionDepmeterState
  } from "./modules/calibraciones/calibracion-depmeter/state/calibracion-depmeter.state";
  import {
    calibracionDepmeterReducer
  } from "./modules/calibraciones/calibracion-depmeter/state/calibracion-depmeter.reducer";
  import {
    CalibracionDepmeterEffects
  } from "./modules/calibraciones/calibracion-depmeter/state/calibracion-depmeter.effects";
  import {DescripcionRipiosState} from './modules/geoscript/descripcion-ripios/state/descripcion-ripios.state';
  import {descripcionRipiosReducer} from './modules/geoscript/descripcion-ripios/state/descripcion-ripios.reducer';
  import {DescripcionRipiosEffects} from './modules/geoscript/descripcion-ripios/state/descripcion-ripios.effects';
  import {DatosDelPozoState} from "./modules/geoscript/datos-pozo/state/datos-pozo.state";
  import {datosPozoReducer} from "./modules/geoscript/datos-pozo/state/datos-pozo.reducer";
  import {DatosPozoEffects} from "./modules/geoscript/datos-pozo/state/datos-pozo.effects";




export interface AppState {
  // structura inicial
  login: LoginState;

  //app geoscript
  descripcionNucleos: DescripcionNucleosState;
  datosCarbon: DatosCarbonState;
  dipmeterState: DipmeterState;
  geoscriptState: GeoscriptState;
  superficiePozoState : SuperficiePozoState,
  impresionSeudopozosState: ImpresionSeudopozosState,

  descripcionRipiosState: DescripcionRipiosState,

  datosPozoState : DatosDelPozoState,


  //app administracion
  administracionUsuarios: AdministracionUsuariosState;
  parametrosAreasState: ParametrosAreasState;
  parametrosCaudalesState: ParametrosCaudalesState;
  parametrosDescripcionState: ParametrosDescripcionesState;
  parametrosMaterialesState: ParametrosMaterialesState;
  parametrosEmpresasState: ParametrosEmpresasState;
  parametrosEquiposState: ParametrosEquiposState;
  parametrosFluidosState: ParametrosFluidosState;
  parametrosDescripcionLitofaciesState: ParametrosDescripcionLitofaciesState;
  parametrosSondasState: ParametrosSondasState;
  parametrosProgramasState: ParametrosProgramasState;
  parametrosTipoPozosState: ParametrosTipoPozosState;
  parametrosTurnosState: ParametrosTurnosState;
  parametrosCalificadoresState: ParametrosCalificadoresState;
  parametrosLitofaciesState: ParametrosLitofaciesState;
  parametrosCodigosProyectosState: ParametrosCodigosProyectosState;
  parametrosColoresState: ParametrosColoresState;
  parametrosLaboratoriosState: ParametrosLaboratoriosState;
  parametrosGranosState: ParametrosGranosState;
  parametrosDistritosState: ParametrosDistritosState;
  parametrosMeteorizacionesState: ParametrosMeteorizacionesState;
  parametrosOrigenDatosState: ParametrosOrigenDatosState;
  parametrosParasecuenciasState:ParametrosParasecuenciasState;
  parametrosTipoPerforacionesState: ParametrosTipoPerforacionesState;
  parametrosLitofacieColorState: ParametrosLitofacieColoresState;
  parametrosProvinciasState: ParametrosProvinciasState;
  parametrosTonosState: ParametrosTonosState;
  parametrosVisibilidadesState: ParametrosVisibilidadesState;
  parametrosNombreSuperficiesState : ParametrosNombreSuperficiesState;
  parametrosLitologiasState: ParametrosLitologiasState;
  parametrosDescripcionTectonicaState: ParametrosDescripcionTectonicaState;
  parametrosDescripcionSedimentariaState: ParametrosDescripcionSedimentariaState;
  parametrosEspaciamientoState: ParametrosEspaciamientoState;
  parametrosMinabilidadesState: ParametrosMinabilidaesState;
  parametrosContratosRegistroState: ParametrosContratosRegistroState;
  parametrosDurezasState: ParametrosDurezasState;
  parametrosHumedadesState: ParametrosHumedadesState;
  parametrosMunicipiosState: ParametrosMunicipiosState;
  parametrosPatronState: ParametrosPatronState;
  parametrosNombresIntervalosState: ParametrosNombresIntervalosState;
  parametrosPersonasRolesState: ParametrosGeologosState;
  parametrosSupervisoresState: ParametrosSupervisoresState;
  parametrosContratosPerforacionState: ParametrosContratosPerforacionState;
  parametrosTipoTectonicasState: ParametrosTipoTectonicasState;
  parametrosContratosPerforacionTarifaState: ParametrosContratoPerforacionTarifaState;
  parametrosContratoPerforacionAjustesDesviacionState: ParametrosContratoPerforacionAjustesDesviacionState,
  parametrosContratoPerforacionAjustesRecuperacionState :ParametrosContratoPerforacionAjustesRecuperacionState,
  parametrosContratoPerforacionAjustesRegistroState:ParametrosContratoPerforacionAjustesRegistroState,


  //app calibraciones
  calibracionSondaCabezaCableState: CalibracionSondaCabezaCableState;
  calibracionSondaRuedaContadoraState : CalibracionSondaRuedaContadoraState;
  calibracionSondaSusceptibilidadMagneticasState: CalibracionSuceptibilidadMagneticaState,
  calibracionDensidadState: CalibracionDensidadState,
  calibracionDatosPozoRegistradoState : CalibracionDatosPozoRegistradoState,
  calibracionDipmeterState : CalibracionDepmeterState,

}



export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  // structura inicial
  login: loginReducer,

  //app geoscript
  descripcionNucleos: descripcionNucleosReducer,
  dipmeterState: dipmeterReducer,
  geoscriptState: geoscriptReducer,
  datosCarbon: datosCarbonReducer,
  superficiePozoState: superficePozoReducer,
  impresionSeudopozosState: impresionSeudopozosReducer,

  descripcionRipiosState: descripcionRipiosReducer,

  datosPozoState : datosPozoReducer,



  //app administracion
  administracionUsuarios: administracionUsuariosReducer,
  parametrosAreasState: parametrosAreasReducer,
  parametrosCaudalesState: parametrosCaudalesReducer,
  parametrosDescripcionState: parametrosDescripcionesReducer,
  parametrosMaterialesState: parametrosMaterialesReducer,
  parametrosEmpresasState: parametrosEmpresasReducer,
  parametrosEquiposState: parametrosEquiposReducer,
  parametrosFluidosState: parametrosFluidosReducer,
  parametrosDescripcionLitofaciesState: parametrosDescripcionLitofaciesReducer,
  parametrosSondasState: parametrosSondasReducer,
  parametrosProgramasState: parametrosProgramasReducer,
  parametrosTipoPozosState: parametrosTipoPozosReducer,
  parametrosTurnosState: parametrosTurnosReducer,
  parametrosCalificadoresState: parametrosCalificadoresReducer,
  parametrosLitofaciesState: parametrosLitofaciesReducer,
  parametrosCodigosProyectosState: parametrosCodigosProyectosReducer,
  parametrosColoresState: parametrosColoresReducer,
  parametrosLaboratoriosState: parametrosLaboratoriosReducer,
  parametrosGranosState:  parametrosGranosReducer,
  parametrosDistritosState: parametrosDistritosReducer,
  parametrosMeteorizacionesState: parametrosMeteorizacionesReducer,
  parametrosOrigenDatosState: parametrosOrigenDatosReducer,
  parametrosParasecuenciasState: parametrosParasecuenciasReducer,
  parametrosTipoPerforacionesState: parametrosTipoPerforacionesReducer,
  parametrosLitofacieColorState: parametrosLitofacieColoresReducer,
  parametrosProvinciasState: parametrosProvinciasReducer,
  parametrosTonosState: parametrosTonosReducer,
  parametrosVisibilidadesState: parametrosVisibilidadesReducer,
  parametrosNombreSuperficiesState: parametrosNombreSuperficiesReducer,
  parametrosLitologiasState:parametrosLitologiasReducer,
  parametrosDescripcionTectonicaState: parametrosDescripcionTectonicaReducer,
  parametrosDescripcionSedimentariaState: parametrosDescripcionSedimentariaReducer,
  parametrosEspaciamientoState: parametrosEspaciamientoReducer,
  parametrosMinabilidadesState: parametrosMinabilidaesReducer,
  parametrosContratosRegistroState: parametrosContratosRegistroReducer,
  parametrosDurezasState: parametrosDurezasReducer,
  parametrosHumedadesState: parametrosHumedadesReducer,
  parametrosMunicipiosState: parametrosMunicipiosReducer,
  parametrosPatronState: parametrosPatronReducer,
  parametrosNombresIntervalosState: parametrosNombresIntervalosReducer,
  parametrosPersonasRolesState: parametrosGeologosReducer,
  parametrosSupervisoresState: parametrosSupervisoresReducer,
  parametrosTipoTectonicasState: parametrosTipoTectonicasReducer,
  parametrosContratosPerforacionTarifaState: parametrosContratosRegistroTarifaReducer,
  parametrosContratoPerforacionAjustesDesviacionState: parametrosContratoPerforacionAjustesDesviacionReducer,
  parametrosContratoPerforacionAjustesRecuperacionState: parametrosContratoPerforacionAjustesRecuperacionReducer,
  parametrosContratosPerforacionState: parametrosContratosPerforacionReducer,
  parametrosContratoPerforacionAjustesRegistroState:parametrosContratoPerforacionAjustesRegistroReducer,


  //app calibraciones
  calibracionSondaCabezaCableState: calibracionSondaCabezaCableReducer,
  calibracionSondaRuedaContadoraState :calibracionSondaRuedaContadoraReducer,
  calibracionSondaSusceptibilidadMagneticasState: calibracionSuceptibilidadMagneticaReducer,
  calibracionDensidadState : calibracionDensidadReducer,
  calibracionDatosPozoRegistradoState : calibracionDatosPozoRegistradoReducer,
  calibracionDipmeterState : calibracionDepmeterReducer,
};
export const ROOT_EFFECT = [
  // structura inicial
  LoginEffects,

  //app geoscript
  GeoscriptEffects,
  DescripcionNucleosEffects,
  DipmeterEffects,
  DatosCarbonEffects,
  SuperficiePozoEffects,
  ImpresionSeudopozosEffects,
  DescripcionRipiosEffects,
  DatosPozoEffects,

  //app administracion
  AdministracionUsuariosEffects,
  ParametrosAreasEffects,
  ParametrosCaudalesEffects,
  ParametrosDescripcionesEffects,
  ParametrosMaterialesEffects,
  ParametrosEmpresasEffects,
  ParametrosEquiposEffects,
  ParametrosFluidosEffects,
  ParametrosDescripcionLitofaciesEffects,
  ParametrosSondasEffects,
  ParametrosProgramasEffects,
  ParametrosTipoPozosEffects,
  ParametrosTurnosEffects,
  ParametrosCalificadoresEffects,
  ParametrosCodigosProyectosEffects,
  ParametrosColoresEffects,
  ParametrosLaboratoriosEffects,
  ParametrosGranosEffects,
  ParametrosDistritosEffects,
  ParametrosMeteorizacionesEffects,
  ParametrosOrigenDatosEffects,
  ParametrosParasecuenciasEffects,
  ParametrosTipoPerforacionesEffects,
  ParametrosLitofacieColoresEffects,
  ParametrosProvinciasEffects,
  ParametrosTonosEffects,
  ParametrosVisibilidadesEffects,
  ParametrosNombreSuperficiesEffects,
  ParametrosLitologiasEffects,

  ParametrosDescripcionTectonicaEffects,
  ParametrosDescripcionTectonicaEffects,
  ParametrosLitofaciesEffects,
  ParametrosDescripcionSedimentariaEffects,
  ParametrosEspaciamientoEffects,
  ParametrosMinabilidaesEffects,
  ParametrosContratosRegistroEffects,
  ParametrosDurezasEffects,
  ParametrosHumedadesEffects,
  ParametrosMunicipiosEffects,
  ParametrosPatronEffects,
  ParametrosNombresIntervalosEffects,
  ParametrosGeologosEffects,
  ParametrosSupervisoresEffects,

  ParametrosContratosPerforacionTarifaEffects,
  ParametrosContratoPerforacionAjustesRegistroEffects,
  ParametrosContratosPerforacionEffects,
  ParametrosContratoPerforacionAjustesDesviacionEffects,
  ParametrosContratoPerforacionAjustesRecuperacionEffects,
  ParametrosTipoTectonicasEffects,

//calibraciones
  CalibracionSondaCabezaCableEffects,
  CalibracionSondaRuedaContadoraEffects,
  CalibracionSuceptibilidadMagneticaEffects,
  CalibracionDensidadEffects,
  CalibracionDatosPozoRegistradoEffects,
  CalibracionDepmeterEffects,
];

/*
NGRX
¿Qué es Ngrx? NgRx es un marco para crear aplicaciones reactivas en Angular .
NgRx está inspirado en el patrón Redux: unifica los eventos en su aplicación y deriva el estado usando RxJS.
En un nivel alto, NgRx almacena un solo estado y usa acciones para expresar cambios de estado

Manejador de estados que usa RXJS diseñado para angular, se usa para patron de arquitectura llamado redux
crear comunicacion en lso componentes uso pára saber como esta el programa en cualquier cambio de estado

Manejador de estado:
para tener control de la informacion

ACTIONS: Son las opciones que tienen los componentes
REDUCER: Encargado de cambiar el estado actual a una o nuevo,  camibo de valor de las variables.
STORE: objeto que contiene el estado (base de datos en memoria lado del navegador)
SELECTOR: es el que escucha el valor de los datos, son pequeñas funcion que cumplan un objetivo en particular
EFFECT: escucha los cambio por medio de las acciones, ejecute los sevicios

https://www.youtube.com/watch?v=6X3nWNXzDc0&t=1s

ng add @ngrx/store@latest
ng add @ngrx/store-devtools@latest

// https://stackoverflow.com/questions/55580148/how-to-make-an-ngrx-effect-wait-for-an-async-function

*/
