import {EventEmitter, Injectable, Output} from '@angular/core';
import {INavigation} from '../../data/interfaces/iNavigation';

@Injectable({
  providedIn: 'root'
})
export class EmitService {
  @Output() navigation = new EventEmitter<INavigation[]>();
  constructor() { }
}

export const ID_CARBON = 'carbon-';
export const ID_RIPIOS = 'ripios-';
export const ID_NUCLEOS = 'nucleos-';
export const ID_LONGUITUD = 5;

export const ID_SEUDOPOZO = 'seudopozo-';
export const ID_SEUDOPOZO_LONGUITUD = 50;

export const ID_GRAFICA = 'grafica-container-seudopozo';

export const scrollIntoView = (id) => {

  const iteracion = setTimeout(async () => {
    let _id = document.getElementById(id);
    if (_id) {
      clearInterval(iteracion);
      _id.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "end"
      });
    }
  }, 100);

}
