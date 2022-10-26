import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParametrosComponent} from './parametros.component';
import {INTERNAL_PATHS} from '../../../core/const/routes.conts';
import {MODULO} from '../../../core/const/navigation.string.const';

const routes: Routes = [
  {
    path: ``,
    component: ParametrosComponent,
    children: [
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_FACTURACION.AREA.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__AREA}`,
        loadChildren: () => import('../parametros-areas/parametros-areas.module').then(m => m.ParametrosAreasModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_FACTURACION.MUNICIPIO.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__MUNICIPIO}`,
        loadChildren: () => import('../parametros-municipios/parametros-municipios.module').then(m => m.ParametrosMunicipiosModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_FACTURACION.MATERIAL.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__MATERIAL}`,
        loadChildren: () => import('../parametros-materiales/parametros-materiales.module').then(m => m.ParametrosMaterialesModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_FACTURACION.CAUDAL.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__CAUDAL}`,
        loadChildren: () => import('../parametros-caudales/parametros-caudales.module').then(m => m.ParametrosCaudalesModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_FACTURACION.DESCRIPCION.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__DESCRIPCION}`,
        loadChildren: () => import('../parametros-descripciones/parametros-descripciones.module').then(m => m.ParametrosDescripcionesModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_FACTURACION.EMPRESA.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__EMPRESA}`,
        loadChildren: () => import('../parametros-empresas/parametros-empresas.module').then(m => m.ParametrosEmpresasModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_FACTURACION.EQUIPO.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__EQUIPO}`,
        loadChildren: () => import('../parametros-equipos/parametros-equipos.module').then(m => m.ParametrosEquiposModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_FACTURACION.FLUIDO.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__FLUIDO}`,
        loadChildren: () => import('../parametros-fluidos/parametros-fluidos.module').then(m => m.ParametrosFluidosModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_FACTURACION.SONDA.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__SONDA}`,
        loadChildren: () => import('../parametros-sondas/parametros-sondas.module').then(m => m.ParametrosSondasModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_FACTURACION.PROGRAMA.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__PROGRAMA}`,
        loadChildren: () => import('../parametros-programas/parametros-programas.module').then(m => m.ParametrosProgramasModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_FACTURACION.TIPOPOZO.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__TIPOPOZO}`,
        loadChildren: () => import('../parametros-tipo-pozos/parametros-tipo-pozos.module').then(m => m.ParametrosTipoPozosModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_FACTURACION.TURNO.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__TURNO}`,
        loadChildren: () => import('../parametros-turnos/parametros-turnos.module').then(m => m.ParametrosTurnosModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_FACTURACION.GEOLOGO.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__GEOLOGO}`,
        loadChildren: () => import('../parametros-geologos/parametros-geologos.module').then(m => m.ParametrosGeologosModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_FACTURACION.SUPERVISOR.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__SUPERVISOR}`,
        loadChildren: () => import('../parametros-supervisores/parametros-supervisores.module').then(m => m.ParametrosSupervisoresModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.CALIFICADOR.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__CALIFICADOR}`,
        loadChildren: () => import('../parametros-calificadores/parametros-calificadores.module').then(m => m.ParametrosCalificadoresModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.LITOFACIE.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__LITOFACIE}`,
        loadChildren: () => import('../parametros-litofacies/parametros-litofacies.module').then(m => m.ParametrosLitofaciesModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.CODIGO_PROYECTO.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__CODIGO_PROYECTO}`,
        loadChildren: () => import('../parametros-codigos-proyectos/parametros-codigos-proyectos.module').then(m => m.ParametrosCodigosProyectosModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.COLOR.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__COLOR}`,
        loadChildren: () => import('../parametros-colores/parametros-colores.module').then(m => m.ParametrosColoresModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.LABORATORIO.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__LABORATORIO}`,
        loadChildren: () => import('../parametros-laboratorios/parametros-laboratorios.module').then(m => m.ParametrosLaboratoriosModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.GRANO.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__GRANO}`,
        loadChildren: () => import('../parametros-granos/parametros-granos.module').then(m => m.ParametrosGranosModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.DISTRITO.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__DISTRITO}`,
        loadChildren: () => import('../parametros-distritos/parametros-distritos.module').then(m => m.ParametrosDistritosModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.DESCRIPCION_TECTONICA.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__DESCRIPCION_TECTONICA}`,
        loadChildren: () => import('../parametros-descripciones-tectonicas/parametros-descripcion-tectonica.module').then(m => m.ParametrosDescripcionTectonicasModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.METEORIZACION.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__METEORIZACION}`,
        loadChildren: () => import('../parametros-meteorizaciones/parametros-meteorizaciones.module').then(m => m.ParametrosMeteorizacionesModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.ORIGEN_DATO.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__ORIGEN_DATO}`,
        loadChildren: () => import('../parametros-origen-dato/parametros-origen-datos.module').then(m => m.ParametrosOrigenDatosModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.PARASECUENCIA.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__PARASECUENCIA}`,
        loadChildren: () => import('../parametros-parasecuencias/parametros-parasecuencias.module').then(m => m.ParametrosParasecuenciasModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.TIPO_PERFORACION.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__TIPO_PERFORACION}`,
        loadChildren: () => import('../parametros-tipo-perforaciones/parametros-tipo-perforaciones.module').then(m => m.ParametrosTipoPerforacionesModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.LITOFACIE.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__LITOFACIE_COLOR}`,
        loadChildren: () => import('../parametros-litofacie-colores/parametros-litofacie-colores.module').then(m => m.ParametrosLitofacieColoresModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.PROVINCIA.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__PROVINCIA}`,
        loadChildren: () => import('../parametros-provincias/parametros-provincias.module').then(m => m.ParametrosProvinciasModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.TONO.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__TONO}`,
        loadChildren: () => import('../parametros-tonos/parametros-tonos.module').then(m => m.ParametrosTonosModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.VISIBILIDAD.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__VISIBILIDAD}`,
        loadChildren: () => import('../parametros-visibilidades/parametros-visibilidades.module').then(m => m.ParametrosVisibilidadesModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.NOMBRE_SUPERFICIE.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__NOMBRE_SUPERFICIE}`,
        loadChildren: () => import('../parametros-nombre-superficies/parametros-nombre-superficies.module').then(m => m.ParametrosNombreSuperficiesModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.LITOLOGIA.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__LITOLOGIA}`,
        loadChildren: () => import('../parametros-litologias/parametros-litologias.module').then(m => m.ParametrosLitologiasModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.MINABILIDAD.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__MINABILIDAD}`,
        loadChildren: () => import('../parametros-minabilidades/parametros-minabilidaes.module').then(m => m.ParametrosMinabilidaesModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_FACTURACION.CONTRATO_REGISTRO.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__CONTRATO_REGISTRO}`,
        loadChildren: () => import('../parametros-contrato-registro/parametros-contrato-registro.module').then(m => m.ParametrosContratoRegistroModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.DUREZA.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__DUREZA}`,
        loadChildren: () => import('../parametros-durezas/parametros-durezas.module').then(m => m.ParametrosDurezasModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.HUMEDAD.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__HUMEDAD}`,
        loadChildren: () => import('../parametros-humedades/parametros-humedades.module').then(m => m.ParametrosHumedadesModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.ESPACIAMIENTO.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__ESPACIAMIENTOS}`,
        loadChildren: () => import('../parametros-espaciamientos/parametros-espaciamiento.module').then(m => m.ParametrosEspaciamientosModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.DESCRIPCION_SEDIMENTARIA.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__DESCRIPCION_SEDIMENTARIA}`,
        loadChildren: () => import('../parametros-descripciones-sedimentarias/parametros-descripcion-sedimentaria.module').then(m => m.ParametrosDescripcionSedimentariaModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.PATRON.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__PATRON}`,
        loadChildren: () => import('../parametros-patron/parametros-patron.module').then(m => m.ParametrosPatronModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.NOMBRES_INTERVALOS.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__NOMBRES_INTERVALOS}`,
        loadChildren: () => import('../parametros-nombres-intervalos/parametros-nombres-intervalos.module').then(m => m.ParametrosNombresIntervalosModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_FACTURACION.CONTRATO_PERFORACION.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_FACTURACION__CONTRATO_PERFORACION}`,
        loadChildren: () => import('../parametros-contrato-perforacion/parametros-contrato-perforacion.module').then(m => m.ParametrosContratoPerforacionModule)
      },
      {
        data: {title: `${MODULO.ADMIN.titulo} ${MODULO.ADMIN.PARAMETROS_DESCRIPCION.TIPO_TECTONICA_CONTROLLER.titulo}`},
        path: `${INTERNAL_PATHS.ADMIN_PARAMETROS_DESCRIPCION__TIPO_TECTONICA_CONTROLLER}`,
        loadChildren: () => import('../parametros-tipo-tectonicas/parametros-tipo-tectonicas.module').then(m => m.ParametrosTipoTectonicasModule)
      },
    ]
  },
{
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
