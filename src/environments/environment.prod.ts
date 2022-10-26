export const PROTOCOL = window.location.protocol;
export const SERVER = 'localhost';
export const PORT = '7001';

export const environment = {
  production: true,
  urlApi: PROTOCOL + '//' + SERVER +  ':' + PORT + '/autenticacion/api/',
};
