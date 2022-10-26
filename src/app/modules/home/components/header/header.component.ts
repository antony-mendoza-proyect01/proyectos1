import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router} from '@angular/router'
import { User } from 'src/app/data/models/user';
import {INTERNAL_PATHS} from '../../../../core/const/routes.conts';
import {NOMBRE_APP} from '../../../../core/const/variables.const';
import {Aplication} from '../../../../data/interfaces/iNavigation';
import {URL_RAIZ} from '../../../../core/const/navigation.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() activeEvent = new EventEmitter<boolean>();
  @Output() activarMenu = new EventEmitter<Aplication>();
  @Input() active: boolean;
  @Input() navigationAplicacion: Aplication[];
  @Input() user: User;
  nombreApp = NOMBRE_APP;
  isCollapsed = false;
  isCollapsedHeader = false;
  urlHome = URL_RAIZ;
  activeAvatar: boolean = true;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  toggle() {
    this.activeEvent.emit(!this.active);
  }

  toggleHeader() {
    this.isCollapsedHeader = !this.isCollapsedHeader;
  }


  cerrarSesion() {
    localStorage.clear();
    this.router.navigate([INTERNAL_PATHS.LOGIN]);
  }

  _activarMenu(navigation) {
    this.activarMenu.emit(navigation);
  }

}
