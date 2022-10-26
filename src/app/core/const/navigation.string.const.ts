export const MODULO = {
  LOGIN: {titulo:  'Login', link:   'login'},

  RAIZ: {titulo:  'Fatpozos', link:   'fatpozos'},

  GEOSCRIPT: {titulo:  'Geoscript', link:   'geoscript',

    DATO_POZO: {titulo:  'Datos del pozo', link:   'dato-pozo'},
    DIPMETER: {titulo:'Dipmeter', link:   'dipmeter'},
    DATOS_CARBON: {titulo:'Datos Carbón', link:   'datos-carbon',
    COMPONENTS:{
      FORMULARIO: {titulo:'Datos Carbón -Formulario', link: 'formulario'},
      SUPERFICIE_POZO: {titulo:'Datos Carbón - Superficie pozo', link: 'superficie-pozo'},
      }
    },

    DESCRIPCION_NUCLEOS: {
      titulo:'Descripción de Nucleos', link: 'descripcion-nucleos',
      COMPONENTS:{
        FORMULARIO: {titulo:'Formulario', link: 'formulario'},
        LITOFACE: {titulo:'Descripción de litoface', link: 'descripcion-litoface'},
        SEDIMENTARIAS: {titulo:'Caracteristicas sedimentarias', link: 'caracteristicas-sedimentarias'},
        TECTONICA: {titulo:'Caracteristicas tectonica', link: 'caracteristicas-tectonica'},
      }
    },
    DESCRIPCION_RIPIOS: {titulo:'Descripción de Ripios', link:   'descripcion-ripios'},
    SEUDOPOZOS: {titulo:'Seudopozos', link:   'seudopozos'},
  },


  FATPOZOS: {
    titulo:'Fatpozos zondas',
    link:   'factpozos-zondas',

  },


  CALIBRACIONES: {titulo:'Calibración', link:   'calibracion',
    PLANES: {titulo:'Planes', link:   'planes',
      EJECUCION_ACTIVIDADES: {titulo:'Ejecucion de actividades', link: 'ejecucion-actividades'},
      CARGAS: {titulo:'Cargar actividades', link: 'Cargar'},
    },

    CONFIGURACION: {titulo:'Configuración', link:   'configuracion',
      ACTIVIDADES: {titulo:'Depmeter', link: 'depmeter'},
      NIVEL_FUENTE: {titulo:'Depmeter', link: 'depmeter'},
      OPERADOR: {titulo:'Depmeter', link: 'depmeter'},
      SONDA: {titulo:'Depmeter', link: 'depmeter'},
      TIPO_FUENTE: {titulo:'Depmeter', link: 'depmeter'},
      TIPO_SONDA: {titulo:'Depmeter', link: 'depmeter'},
      UNIDAD: {titulo:'Depmeter', link: 'depmeter'},
      WINCHES: {titulo:'Depmeter', link: 'depmeter'},
    },

    CALIBRACION: {titulo:'Calibraciones', link:   'calibraciones',
      SONDA_CABEZA_CABLE: {titulo:'Sonda cabeza cable', link: 'sonda-cabeza-cable'},
      SONDA_RUEDA_CONTADORA: {titulo:'Sonda rueda contadora', link: 'sonda-rueda-contadora'},
      SUSCEPTIBILIDAD_MAGNETICA: {titulo:'Susceptibilidad Magnetica', link: 'susceptibildiad-magnetica'},
      DEPMETER: {titulo:'Depmeter', link: 'depmeter'},
      DATO_POZO_REGISTRADO: {titulo:'Datos pozo registrado', link: 'datos-pozo-registrado'},
      DENSIDAD: {titulo:'Densidad', link: 'densidad'},
    }
  },

  ADMIN: {titulo:'Administración', link:   'administracion',
    USUARIO: {titulo:'Usuario', link:   'usuario'},

    PARAMETROS_FACTURACION:{titulo:'Parametros Facturación', link:   'parametros-facturacion',
      AREA: {titulo:'Area', link: 'area'},
      CAUDAL: {titulo:'Caudal', link: 'caudal'},
      DESCRIPCION: {titulo:'Descripcion', link: 'descripcion'},
      MATERIAL:{titulo:'Material', link: 'material'},
      EMPRESA:{titulo:'Empresa', link: 'empresa'},
      EQUIPO:{titulo:'Equipo', link: 'equipo'},
      FLUIDO:{titulo:'Fluido', link: 'fluido'},
      SONDA:{titulo:'Sonda', link: 'sonda'},
      PROGRAMA:{titulo:'Programa', link: 'programa'},
      TIPOPOZO:{titulo:'Tipo Pozo', link: 'tipo-pozo'},
      TURNO:{titulo:'Turno', link: 'turno'},
      CONTRATO_REGISTRO:{titulo:'Contrato registro', link: 'contrato-registro'},
      CONTRATO_PERFORACION:{titulo:'Contrato perforacion', link: 'contrato-perforacion',
        COMPONENTS:{
          TARIFAS: {titulo:'Tarifas', link: 'tarifas'},
          AJUSTES_DESVIACION: {titulo:'Ajustes desviacion', link: 'ajustes-desviacion'},
          AJUSTES_PORCENTAJE_VERTICALIDAD: {titulo:'Ajustes porcentaje verticalidad', link: 'ajustes-porcentaje-verticalidad'},
          AJUSTES_PORCENTAJE_RECUPERACION : {titulo:'Ajustes porcentaje recuperacion', link: 'ajustes-porcentaje-recuperacion'},

        }},
      MUNICIPIO: {titulo:' Municipio ', link: 'municipio'},
      GEOLOGO: {titulo:' Geologos  ', link: 'geologos'},
      SUPERVISOR: {titulo:' Supervisor ', link: 'supervisor'},


    },
    PARAMETROS_DESCRIPCION:{titulo:'Parametros Descripción', link:   'parametros-descripcion',
      CALIFICADOR: {titulo:'Calificador', link: 'calificador'},
      LITOFACIE: {titulo:'Litofacie', link: 'litofacie'},
      CODIGO_PROYECTO:  {titulo:'Codigo Proyectos', link: 'codigo-proyectos'},
      COLOR: {titulo:'Color', link: 'color'},
      LABORATORIO: {titulo:'Laboratorio', link: 'laboratorio'},
      GRANO: {titulo:'Grano', link: 'grano'},
      DISTRITO: {titulo:'Distrito', link: 'distrito'},
      DESCRIPCION_TECTONICA: {titulo:'Descripcion Tecnonica', link: 'descripcion-tecnonica'},
      METEORIZACION: {titulo:'Meteorizacion ', link: 'meteorizacion'},
      ORIGEN_DATO: {titulo:'Origen dato ', link: 'origen-dato'},
      PARASECUENCIA: {titulo:'Parasecuencia ', link: 'parasecuencia'},
      TIPO_PERFORACION: {titulo:'Tipo Perforacion ', link: 'tipo-perforacion'},
      LITOFACIE_COLOR: {titulo:'Litofacie Color ', link: 'litofacie-color'},
      PROVINCIA: {titulo:' Provincia ', link: 'provincia'},
      TONO: {titulo:'Tono ', link: 'tono'},
      VISIBILIDAD: {titulo:' Visibilidad ', link: 'visibilidad'},
      NOMBRE_SUPERFICIE: {titulo:'Nombre superficie ', link: 'nombre-superficie'},
      LITOLOGIA: {titulo:' Litologia ', link: 'litologia'},
      MINABILIDAD: {titulo:' Minabilidad ', link: 'minabilidad'},
      DUREZA: {titulo:' Dureza ', link: 'dureza'},
      HUMEDAD: {titulo:' Humedad ', link: 'humedad'},
      ESPACIAMIENTO: {titulo:' Espaciamieto ', link: 'espaciamiento'},
      DESCRIPCION_SEDIMENTARIA: {titulo:' Descripcion Sedimentaria ', link: 'descripcion-sedimentaria'},
      PATRON: {titulo:' Patron ', link: 'patron'},
      NOMBRES_INTERVALOS: {titulo:' Nombres intervalos/Manto ', link: 'nombres-intervalos'},
      TIPO_TECTONICA_CONTROLLER: {titulo:' Tipo tectonica ', link: 'tipo-tectonica'},



    },
  },
};
