import { Injectable } from '@angular/core';
import {UserService} from './user.service';
import {AreasService} from './areas.service';
import {DescripcionesService} from './descripciones.service';
import {MaterialesService} from "./materiales.service";
import {CaudalesService} from './caudales.service';
import {EmpresasService} from "./empresas.service";
import {EquiposService} from "./equipos.service";
import {FluidosService} from "./fluidos.service";
import {DescripcionesLitofaciesService} from './descripciones-litofacies.service';
import { SondasService } from './sondas.service';
import { ProgramasService } from './programas.service';
import {TipoPozosService} from "./tipo-pozos.service";
import { TurnosService } from './turnos.service';
import {CalificadoresService} from "./calificadores.service";
import {DescipcionTectonicaService} from './descripcion-tectonica.service';
import {LitofaciesService} from "./litofacies.service";
import {CodigosProyectosService} from "./codigos-proyectos.service";
import {EspaciamientoService} from './espaciamiento.service';
import { ColoresService } from './colores.service';
import {LaboratoriosService} from "./laboratorios.service";
import {GranosService} from "./granos.service";
import {DistritosService} from "./distritos.service";
import { MeteorizacionesService } from './meteorizaciones.service';
import { OrigenDatosService } from './origen-datos.service';
import {ParasecuenciasService} from "./parasecuencias.service";
import {TipoPerforacionesService} from "./tipo-perforaciones.service";
import {LitofacieColoresService} from "./litofacie-colores.service";
import {ProvinciasService} from "./provincias.service";
import { TonosService } from './tono.service';
import {VisibilidadesService} from "./visibilidades.service";
import { NombreSuperficiesService } from './nombre-superficies.service';
import { LitologiasService } from './litologias.service';
import {DipmeterService} from './dipmeter.service';
import {VerificacionPozoService} from './verificacion-pozo.service';
import { MinabilidadesService } from './minabilidades.service';
import {ContratosRegistroService} from './contratos-registro.service';
import { DurezasService } from './durezas.service';
import { HumedadesService } from './humedades.service';
import { MunicipiosService } from './municipios.service';
import {DescripcionSedimentariaService} from "./descripcion-sedimentaria.service";
import {PatronService} from "./patron.service";
import {TarifasRegistroService} from './tarifas-registro.service';
import {NombresIntervalosService} from './nombres-intervalos.service';
import { PersonasRolesService } from './personas-roles.service';
import {ContratosService} from './contratos.service';
import { TipoTectonicasService} from "./tipo-tectonicas.service";
import {ContratosTarifasService} from "./contratos-tarifas.service";
import {ContratosAjustesPorcentajeVerticalidadService} from "./contratos-ajustes-porcentaje-verticalidad.service";
import {ContratosAjustesDesviacionService} from "./contratos-ajustes-desviacion.service";
import {ContratoRecuperacionService} from "./contratos-ajustes-porcentaje-recuperacion.service";
import { SuperficiePozoService } from './superficie-pozo.service';
import {GraficasService} from './graficas.service';
import {CalibracionSondaCabezaCableService} from './calibracion-sonda-cabeza-cable.service';
import {SeudopozosService} from './seudopozos.service';
import {CalibracionSondaRuedaContadoraService} from "./calibracion-sonda-rueda-contadora.service";
import {CalibracionSondaSusceptibilidadMagneticaService} from "./calibracion-sonda-susceptibilidad-magnetica.service";
import { CalibracionDensidadService } from './calibracion-densidad.service';
import {CalibracionDatosPozoRegistradoService} from "./calibracion-datos-pozo-registrado.service";
import {CalibraciomDipmeterService} from "./calibraciom-dipmeter.service";
import {DatosDelPozoService} from "./datos-del-pozo.service";





@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public userService: UserService,
    public areasService: AreasService,
    public caudalesService: CaudalesService,
    public descripcionesService : DescripcionesService,
    public materialesService: MaterialesService,
    public empresasService: EmpresasService,
    public equiposService: EquiposService,
    public fluidosService: FluidosService,
    public descripcionesLitofaciesService: DescripcionesLitofaciesService,
    public sondasService: SondasService,
    public programasService: ProgramasService,
    public tipoPozosService: TipoPozosService,
    public turnosService: TurnosService,
    public calificadoresService: CalificadoresService,
    public litofaciesService: LitofaciesService,
    public codigosProyectosService: CodigosProyectosService,
    public coloresService: ColoresService,
    public laboratoriosService: LaboratoriosService,
    public granosService:GranosService,
    public distritosService: DistritosService,
    public meteorizacionesService: MeteorizacionesService,
    public origendatosService: OrigenDatosService,
    public paresecuenciasService: ParasecuenciasService,
    public peforacionesService: TipoPerforacionesService,
    public litofacieService: LitofacieColoresService,
    public provinciasService: ProvinciasService,
    public tonosService: TonosService,
    public visibilidadesService: VisibilidadesService,
    public nombresuperficiesService: NombreSuperficiesService,
    public litologiasService: LitologiasService,
    public minabilidadesService: MinabilidadesService,
    public contratosRegistroService: ContratosRegistroService,
    public durezasService: DurezasService,
    public humedadesService: HumedadesService,
    public municipiosService: MunicipiosService,
    public patronService: PatronService,
    public tarifaRegistroService: TarifasRegistroService,
    public personasRolesService: PersonasRolesService,
    public contratosService: ContratosService,
    public contratosTarifasService: ContratosTarifasService,
    public AjustesDesviacionService: ContratosAjustesDesviacionService,
    public AjustesRecuperacionService: ContratoRecuperacionService,
    public AjustesRegistroService: ContratosAjustesPorcentajeVerticalidadService,
    public tipotecnonicasService: TipoTectonicasService,
    public descripcionTectonicaService: DescipcionTectonicaService,
    public descripcionSedimentariaService: DescripcionSedimentariaService,
    public espaciamientoService: EspaciamientoService,
    public verificacionPozoService: VerificacionPozoService,
    public nombresIntervalosService: NombresIntervalosService,
    public superficiePozoService: SuperficiePozoService,
    public dipmeterService: DipmeterService,
    public graficasService: GraficasService,

    public seudopozosService: SeudopozosService,
    public datosPozoService : DatosDelPozoService,


    public calibracionSondaCabezaCableService: CalibracionSondaCabezaCableService,
    public calibracionSondaRuedaContadoraService : CalibracionSondaRuedaContadoraService,
    public calibracionSondaSusceptibilidadMagnetica: CalibracionSondaSusceptibilidadMagneticaService,
    public calibracionDensidadService : CalibracionDensidadService,
    public calibracionDatosPozoRegistrado : CalibracionDatosPozoRegistradoService,
    public calibracionDipmeter : CalibraciomDipmeterService,
  ) { }
}
