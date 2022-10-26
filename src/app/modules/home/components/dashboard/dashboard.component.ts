import { Component, OnInit } from '@angular/core';
import {Aplication, INavigation} from '../../../../data/interfaces/iNavigation';
import {Router} from '@angular/router';
import {LOCAL_STORAGE} from '../../../../core/const/localStorage.const';
import {NAVIGATION_APLICATION} from '../../../../core/const/navigation.const';
import {User} from '../../../../data/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  active: boolean;
  user: User;
  navigationAplicacion: Aplication[];
  navigations: INavigation[] = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem(LOCAL_STORAGE.login));
    // this.navigationAplicacion = JSON.parse(localStorage.getItem(LOCAL_STORAGE.navegacion));
    this.navigationAplicacion = NAVIGATION_APLICATION;

    this.onActivarMenu();
  }

  onActivarMenu(navigation?: Aplication) {
    if(navigation) {
      this.onBuscarMenu(navigation.link);
    } else {
      const url = this.router.url.split('/');

      if(url.length > 2) {
        this.onBuscarMenu(`/${url[1]}/${url[2]}`);
      }
    }
  }

  onBuscarMenu(url: string) {
    const aplicacion: Aplication = this.navigationAplicacion.find(e => e.link === url);
    this.navigations = [];
    this.navigations.push(...aplicacion.navegacion);
  }

  _activeEvent($event: boolean){
    this.active = $event;
  }

  _activeEventComponent(event) {
    this.active = !this.active;
  }
}
