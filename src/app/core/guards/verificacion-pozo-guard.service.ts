import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {LOCAL_STORAGE} from '../const/localStorage.const';
import {ResponsePozo} from '../../data/models/pozos';
import {FormModalVerificacionPozoComponent} from '../../shared/components';
import {ToastService} from '../../shared/services/toast.service';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {ApiService} from '../../data/services/api.service';
import {INTERNAL_PATHS} from '../const/routes.conts';
import {ResponseDatosDelPozo} from '../../data/models/result-datos-pozo';
import {MODULO} from '../const/navigation.string.const';
import {
  TIPO_PERFORACION__CORAZONADOS,
  TIPO_PERFORACION__ABIERTO, TIPOPOZO_DATOS_CARBON,
  TIPOPOZO_DESCRIPCION_NUCLEOS
} from '../const/verificacion.const';



@Injectable({
  providedIn: 'root'
})
export class VerificacionPozoGuardService implements  CanActivate {

  constructor(private apiService: ApiService,
              private config: NgbModalConfig,
              private ngbModal: NgbModal,
              private toastService: ToastService,
              private router: Router) {

    config.backdrop = 'static';
    config.keyboard = false;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkPozo(state.url);
  }
  checkPozo(url: string): Observable<boolean> {
    return new Observable<boolean>(observer => {

      setTimeout(async () => {
        const pozo: string = localStorage.getItem(LOCAL_STORAGE.pozo);

        if (!pozo) {
          const verficacion = await this.verficarPozo();

          if(verficacion) {
            observer.next(true);
          }else{
            this.router.navigate([INTERNAL_PATHS.RAIZ]);
            observer.next(false);
          }
        }

        if(pozo){
          const verficacionMenu = await  this.verficacionMenu(url, pozo);

          if(verficacionMenu.acceso) {
            observer.next(true);
          }else{
            localStorage.setItem(LOCAL_STORAGE.pozo, '');
            this.toastService.danger(null, `${verficacionMenu.message}`);
            this.router.navigate([INTERNAL_PATHS.RAIZ]);
            observer.next(false);
          }
        }

        observer.next(true);

      }, 100);

    });
  }

  async verficarPozo(): Promise<boolean> {
    try {
      const pozo = await this.openModalVerificacionPozo();

      const responsePozo: ResponsePozo = await this.apiService.verificacionPozoService.getByPozo(pozo);

      if(!responsePozo.data) {
        this.toastService.danger(null, responsePozo.message);
      }else {
        localStorage.setItem(LOCAL_STORAGE.pozo, pozo);
      }

      return responsePozo.data;
    }catch (e) {
      return false;
    }
  }

  async verficacionMenu(url: string, pozo: string): Promise<{acceso: boolean, message?: string }> {
    try {
      const r: ResponseDatosDelPozo = await this.apiService.datosPozoService.getByPozo(pozo);

      localStorage.setItem(LOCAL_STORAGE.codTipoPerforacion, r.data.datosPozo?.tipoPerforacion?.codTipoPerforacion);

      const codTipoPerforacion = r.data.datosPozo?.tipoPerforacion?.codTipoPerforacion;
      if(codTipoPerforacion) {
        if(TIPO_PERFORACION__ABIERTO.find(item => item === codTipoPerforacion)){
          localStorage.setItem(LOCAL_STORAGE.tipoPozo, TIPOPOZO_DESCRIPCION_NUCLEOS);
        }

        if(TIPO_PERFORACION__CORAZONADOS.find(item => item === codTipoPerforacion)){
          localStorage.setItem(LOCAL_STORAGE.tipoPozo, TIPOPOZO_DATOS_CARBON);
        }

        // validacion de descripcion de nucleos
        if(url.includes(MODULO.GEOSCRIPT.DESCRIPCION_NUCLEOS.link)) {
          if(TIPO_PERFORACION__ABIERTO.find(item => item !== codTipoPerforacion)){
            return {acceso: true };
          }else{
            localStorage.setItem(LOCAL_STORAGE.tipoPozo, '');
            return {acceso: false, message: `El pozo ${pozo} no puede acceder a ${MODULO.GEOSCRIPT.DESCRIPCION_RIPIOS.titulo} por su tipo de perforación ${r.data.datosPozo.tipoPerforacion.codTipoPerforacion}`};
          }
        }

        // validacion de descripcion de ripios
        if(url.includes(MODULO.GEOSCRIPT.DESCRIPCION_RIPIOS.link)) {
          if(TIPO_PERFORACION__CORAZONADOS.find(item => item !== codTipoPerforacion)){
            return {acceso: true };
          }else{
            localStorage.setItem(LOCAL_STORAGE.tipoPozo, '');
            return {acceso: false, message: `El pozo ${pozo} no puede acceder a ${MODULO.GEOSCRIPT.DESCRIPCION_RIPIOS.titulo} por su tipo de perforación ${r.data.datosPozo.tipoPerforacion.codTipoPerforacion}`};
          }
        }
      }



      return {acceso: true };
    }catch (e) {
      return {acceso: false, message: 'Error en la petición' };
    }
  }

  async openModalVerificacionPozo(): Promise<string> {
    try {// refModal = referencias que estan en el modal
      const refModal = await this.ngbModal.open(FormModalVerificacionPozoComponent, { size: 'sm'});

      return refModal.result;
    }catch (e) {
      return '';
    }
  }
}
