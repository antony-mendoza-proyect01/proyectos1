/**
 * Clase padre usada para configurar los servicios de acceso a datos
 *
 * Ejemplo:
 * para un servicio http://localhost/api/clientes/getall
 *
 * @prefix http://localhost/api/
 * @controller clientes/
 *
 * la parte restante de la URL de la peticion le corresponde al metodo que se le hace el llamado
 */

export class ApiCustomer {
  /** prefijo de la url para consumir los servicios API, debe terminar en / */
  prefix: string;

  /* ruta que especifica la ruta del servicio que se desea consumir,
    debe terminar en "/" [Route("api/[controller]/[action]")] */
  controller: string;

  action: string;

  constructor() {
  }
}
