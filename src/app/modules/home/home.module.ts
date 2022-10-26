import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {HeaderComponent} from './components/header/header.component';
import {SharedModule} from '../../shared/shared.module';
import { ContainerNavigationComponent } from './components/container-navigation/container-navigation.component';
import {NavigationListComponent} from './components/navigation-list/navigation-list.component';
import {ANotMenuComponent} from './components/a-not-menu/a-not-menu.component';
import { AMenuComponent } from './components/a-menu/a-menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ContainerNavigationComponent,
    NavigationListComponent,
    ANotMenuComponent,
    AMenuComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
