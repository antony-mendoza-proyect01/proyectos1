import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {ROOT_EFFECT, ROOT_REDUCER} from './app.state';
import { EffectsModule } from '@ngrx/effects';
import {RequestsInterceptor} from './core/interceptors/requests-interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCER),
    StoreDevtoolsModule.instrument({ name: 'TEST' }),
    EffectsModule.forRoot(ROOT_EFFECT),

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: RequestsInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
