import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal, NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import { SuperficiePozo } from 'src/app/data/models/superficie-pozo';
import {debounceTime, Observable, Subject} from "rxjs";
import {LOCAL_STORAGE} from "../../../../../core/const/localStorage.const";
import {NombreSuperficies} from "../../../../../data/models/nombre-superficies";
import {
  selectListNombreSuperficies
} from "../../../../administracion/parametros-nombre-superficies/state/parametros-nombre-superficies.selectors";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../../app.state";


@Component({
  selector: 'app-form-superficie-pozo',
  templateUrl: './form-superficie-pozo.component.html',
  styleUrls: ['./form-superficie-pozo.component.scss']
})
export class FormSuperficiePozoComponent implements OnInit {
  @Input() superficiesPozos: SuperficiePozo;
  superficiePozosForm: SuperficiePozosForm;

  submitted = false;

  dangerMessage = '';
  private _danger = new Subject<string>();
  @ViewChild('staticAlert', {static: false}) staticAlert: NgbAlert;
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;

  superficiespozo: Observable<NombreSuperficies[]> = new Observable();


  constructor(
    private store: Store<AppState>,
    public activeModal: NgbActiveModal,
  ) { }


  ngOnInit(): void {

     this.superficiespozo = this.store.select(selectListNombreSuperficies);


    this.superficiePozosForm = new SuperficiePozosForm(this.superficiesPozos);
    this._danger.subscribe(message => this.dangerMessage = message);
    this._danger.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();

      }
    });
  }

  get f() {return this.superficiePozosForm.controls; }

  onSubmit() {
    this.submitted = true;


    // stop here if form is invalid
    if (this.superficiePozosForm.invalid) {
      return;
    }
    //pasar pozo de el modal
    const body = this.superficiePozosForm.getRawValue();
    body.codPozo =  localStorage.getItem(LOCAL_STORAGE.pozo);

    this.activeModal.close(body);
    // this.activeModal.close(this.superficiePozosForm.getRawValue());
  }
  public changeDangerMessage(message) { this._danger.next(`${message}`); }
}
// TODO: class para implementacion del formulario
export class SuperficiePozosForm extends FormGroup {
  constructor(superficiePozos: SuperficiePozo) {
    super({
      codSupPozo: new FormControl(superficiePozos.codSupPozo),
      codPozo: new FormControl(superficiePozos.codPozo),
      nombreSuperficie: new FormControl(superficiePozos.nombreSuperficie, [Validators.required,
        Validators.minLength(1), Validators.maxLength(15)]),
      profundidad: new FormControl(superficiePozos.profundidad)
    });
  }
}
