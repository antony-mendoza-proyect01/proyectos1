import {Component, OnInit, ViewChild} from '@angular/core';
import {debounceTime, Subject} from 'rxjs';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-global-alert',
  templateUrl: './global-alert.component.html',})
export class GlobalAlertComponent implements OnInit {
  private _success = new Subject<string>();

  staticAlertClosed = false;
  mensaje = '';

  @ViewChild('staticAlert', {static: false}) staticAlert: NgbAlert;
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;

  ngOnInit(): void {
    setTimeout(() => this.staticAlert.close(), 20000);

    this._success.subscribe(message => this.mensaje = message);
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  public changeSuccessMessage() { this._success.next(`${new Date()} - Message successfully changed.`); }
}
