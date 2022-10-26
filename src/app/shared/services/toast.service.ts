import {Injectable, TemplateRef} from '@angular/core';
import {ApiResponse} from '../../data/models/api-response';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  warning(header: string, mensaje: string) {
    this.show(mensaje, {header: header, classname: 'toast-warning', });
  }

  info(header: string, mensaje: string) {
    this.show(mensaje, {header: header, classname: 'toast-info-pozo'});
  }

  danger(header: string | null, mensaje: string) {
    this.show(mensaje, {header: header, classname: 'toast-danger', icon: 'fa-circle-xmark'});
  }

  success(header: string, mensaje: string) {
    this.show(mensaje, {header: header, classname: 'toast-success'});
  }

  toastApiResponse(apiResponse: ApiResponse) {
    if(apiResponse.valido){
      this.success(null, apiResponse.message);
    }
    if(!apiResponse.valido){
      this.danger(null, apiResponse.message);
    }
  }
}
