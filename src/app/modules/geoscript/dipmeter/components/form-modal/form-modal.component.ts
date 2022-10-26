import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal, NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../app.state';
import {Dipmeter} from "../../../../../data/models/dipmeter";
import {debounceTime, Observable, Subject} from "rxjs";
import {
  selectActionDipmeter, selectActionDipmeterEdit, selectActionProfundidadExistente,
  selectListDipmeter,
  selectListDipmeterFiltro,
  selectLoadingDipmeter
} from "../../state/dipmeter.selectors";
import {LOCAL_STORAGE} from "../../../../../core/const/localStorage.const";

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['/form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() dipmeter: Dipmeter;
  dipmeterForm: DipmeterForm;
  submitted = false;
  profundidadExistente : number;

  dangerMessage = '';
  private _danger = new Subject<string>();
  @ViewChild('staticAlert', {static: false}) staticAlert: NgbAlert;
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;

  constructor(
    private store: Store<AppState>,
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
    this.store.select(selectActionProfundidadExistente).subscribe(x => {this.profundidadExistente = x;});

    this.dipmeterForm = new DipmeterForm(this.dipmeter);
    this._danger.subscribe(message => this.dangerMessage = message);
    this._danger.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  get f() {return this.dipmeterForm.controls; }
  get dipmeterPK() {return this.dipmeterForm.controls['dipmeterPK']; }

  onSubmit() {
    // console.log(this.dipmeterPK.value.profundidad);
    if( this.dipmeterPK.value.profundidad > this.profundidadExistente ) {
      this.changeDangerMessage('La profundidad registrada es mayor que la profundidad de registro.');
      return;
    }


    this.submitted = true;
    // stop here if form is invalid
    if (this.dipmeterForm.invalid) {
      return;
    }
//customizar la respuesta
    const body = this.dipmeterForm.getRawValue();
    body.dipmeterPK.codPozo =  localStorage.getItem(LOCAL_STORAGE.pozo);

     this.activeModal.close(body);
  }
  public changeDangerMessage(message) { this._danger.next(`${message}`); }


}
// TODO: class para implementacion del formulario
export class DipmeterForm extends FormGroup {
  constructor(dipmeters: Dipmeter) {
    super({
      dipmeterPK: new FormGroup({
        codPozo: new FormControl(dipmeters.dipmeterPK.codPozo),
        profundidad: new FormControl(dipmeters.dipmeterPK.profundidad, [Validators.required])
      }),
      azimut: new FormControl(dipmeters.azimut,
        [Validators.required,
          Validators.min(0), Validators.max(360)]),
      buzamiento: new FormControl(dipmeters.buzamiento,
        [Validators.required,
          Validators.min(-90), Validators.max(0)])
    });
  }
}
