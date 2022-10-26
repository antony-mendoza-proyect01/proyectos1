import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TarifasRegistro} from '../../../../../data/models/tarifas-registro';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RESTAURACION} from '../../../../../core/const/variables.const';
import {Observable} from 'rxjs';
import {Sondas} from '../../../../../data/models/sondas';
import { selectListSondasFiltro} from '../../../parametros-sondas/state/parametros-sondas.selectors';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../app.state';

@Component({
  selector: 'app-form-modal-tarifas-registros',
  templateUrl: './form-modal-tarifas-registros.component.html',
  styleUrls: ['./form-modal-tarifas-registros.component.scss']
})
export class FormModalTarifasRegistrosComponent implements OnInit {
  @Input() tarifasRegistro: TarifasRegistro;
  tarifasRegistroForm: TarifasRegistroForm;
  submitted = false;
  restauraciones =  RESTAURACION;

  sondas$: Observable<Sondas[]> = new Observable();

  constructor(
    private store: Store<AppState>,
    public activeModal: NgbActiveModal,
              ) { }

  ngOnInit(): void {
    this.sondas$ = this.store.select(selectListSondasFiltro);
    this.tarifasRegistroForm = new TarifasRegistroForm(this.tarifasRegistro);
  }

  get f() {return this.tarifasRegistroForm.controls; }
  get ftarifaRegistroPK() {return this.tarifasRegistroForm.controls['tarifaRegistroPK']; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.tarifasRegistroForm.invalid) {
      return;
    }
    this.activeModal.close(this.tarifasRegistroForm.getRawValue());
  }

}
// TODO: class para implementacion del formulario
export class TarifasRegistroForm extends FormGroup {
  constructor(tarifasRegistro: TarifasRegistro) {
    super({
        tarifaRegistroPK: new FormGroup({
          contrato: new FormControl(tarifasRegistro.tarifaRegistroPK.contrato),
          sonda: new FormControl(tarifasRegistro.tarifaRegistroPK.sonda, [Validators.required])
      }),
      metros: new FormControl(tarifasRegistro.metros, [Validators.required]),
      valSetup: new FormControl(tarifasRegistro.valSetup, [Validators.required]),
      restarWater: new FormControl(tarifasRegistro.restarWater, [Validators.required]),
      restarCasing: new FormControl(tarifasRegistro.restarCasing, [Validators.required]),
    });
  }
}
