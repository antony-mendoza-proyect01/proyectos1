
export class Superficies {
  nombre: string;
  profundidad: number;
  r: number;
  b: number;
  g: number;
  codSupPozo: number;


  constructor(nombre: string, profundidad: number, r: number, g: number, b: number, codSupPozo: number) {
    this.nombre = nombre;
    this.profundidad = profundidad;
    this.r = r;
    this.g = g;
    this.b = b;
    this.codSupPozo = codSupPozo;
  }
}
