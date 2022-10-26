import {ApiResponse} from './api-response';
// model
export class PersonasRoles {
  personaRolPK: personaRolFK;

  constructor(personaRolPK?: personaRolFK) {
    this.personaRolPK = personaRolPK || new personaRolFK();
  }
}
// model
export class PersonasRolesPut {
  targetPersonaCodigo: string;
  newCodNombre: string;
  codRol: string;

  constructor(targetPersonaCodigo?: string, newCodNombre?: string, codRol?: string) {
    this.targetPersonaCodigo = targetPersonaCodigo || '';
    this.newCodNombre = newCodNombre || '';
    this.codRol = codRol || '';
  }
}

// responses
export class ResponsepersonasRol extends ApiResponse {
  data: PersonasRoles;

  constructor(data: PersonasRoles) {
    super(data);
  }
}
export class ResponsepersonasRoles extends ApiResponse {
  data: PersonasRoles[];

  constructor(data: PersonasRoles[]) {
    super(data);
  }
}

export class personaRolFK {
  personaCodigo: string;
  rolCodigo: string;
  constructor(personaCodigo?: string, rolCodigo?: string) {
    this.personaCodigo = personaCodigo || '';
    this.rolCodigo = rolCodigo || '';
  }
}
