export interface Aplication {
  titulo: string;
  link: string;
  navegacion: INavigation[];
}

export interface INavigation {
  titulo: string;
  link: string;
  idCondicion?: string;
  tieneMenu: boolean;
  icono?: string;
  menuActivo: boolean;
  subMenu: INavigation[];
}
