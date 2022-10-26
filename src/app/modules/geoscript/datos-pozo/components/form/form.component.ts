import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from "@ngrx/store";
import { TipoPerforaciones } from 'src/app/data/models/tipo-perforaciones';
import { selectListTipoPerforaciones } from 'src/app/modules/administracion/parametros-tipo-perforaciones/state/parametros-tipo-perforaciones.selectors';
import {AppState} from "../../../../../app.state";
import {Observable} from "rxjs";
import {Distritos} from "../../../../../data/models/distritos";
import {Provincias} from "../../../../../data/models/provincias";
import {CodigosProyectos} from "../../../../../data/models/codigos-proyectos";
import {Laboratorios} from "../../../../../data/models/laboratorios";
import {
  selectListDistritos
} from "../../../../administracion/parametros-distritos/state/parametros-distritos.selectors";
import {
  selectListProvincias
} from "../../../../administracion/parametros-provincias/state/parametros-provincias.selectors";
import {
  selectListCodigosProyectos
} from "../../../../administracion/parametros-codigos-proyectos/state/parametros-codigos-proyectos.selectors";
import {
  selectListLaboratorios
} from "../../../../administracion/parametros-laboratorios/state/parametros-laboratorios.selectors";
import {ResultDatosPozo} from "../../../../../data/models/result-datos-pozo";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() edit  = new EventEmitter<DatosPozoForm>();
  @Input() datopozoInfo : ResultDatosPozo;
  datosPozoForm: DatosPozoForm;
  submitted = false;

  areas$ : Observable<ResultDatosPozo> = new Observable();
  TiposPerforacionPozo: Observable<TipoPerforaciones[]> = new Observable();
  distritoPozo: Observable<Distritos[]> = new Observable();
  provinciasPozo: Observable<Provincias[]> = new Observable();
  codigoDelProyectoPozo: Observable<CodigosProyectos[]> = new Observable();
  laboratorioPozo: Observable<Laboratorios[]> = new Observable();

  constructor(private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.datosPozoForm = new DatosPozoForm(this.datopozoInfo);

    this.TiposPerforacionPozo = this.store.select(selectListTipoPerforaciones);
    this.distritoPozo = this.store.select(selectListDistritos);
    this.provinciasPozo = this.store.select(selectListProvincias);
    this.codigoDelProyectoPozo = this.store.select(selectListCodigosProyectos);
    this.laboratorioPozo = this.store.select(selectListLaboratorios);
  }

  get f() {return this.datosPozoForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.datosPozoForm.invalid) {
      return;
    }
    this.edit.emit(this.datosPozoForm.getRawValue());
  }
}

// TODO: class para implementacion del formulario
export class DatosPozoForm extends FormGroup {
  constructor(datosDelPozo: ResultDatosPozo) {
    super({
      codTipoPerforacion: new FormControl(datosDelPozo.datosPozo.tipoPerforacion?.codTipoPerforacion,
        [Validators.required]),
      codDistrito: new FormControl(datosDelPozo.datosPozo.distrito?.codDto,
        [Validators.required]),
      codProvincia: new FormControl(datosDelPozo.datosPozo.provincia?.codProv,
        [Validators.required]),
      codLaboratorio: new FormControl(datosDelPozo.datosPozo.laboratorio?.codLab,
        [Validators.required]),
      codProyecto: new FormControl(datosDelPozo.datosPozo?.codProyecto,
        [Validators.required]),
      codPozo:new FormControl(datosDelPozo.datosPozo?.codPozo,
        [Validators.required]),
    });
  }
}


