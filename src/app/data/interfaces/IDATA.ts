export interface IDATA {
	valido: boolean;
	statusCode: number;
	message?: any;
	data: IDATAData;
}
export interface IDATADataIntervalos {
	patron: string;
	nombre: string;
	manto_Letra: string;
	codparasec: number;
	desde: number;
	hasta: number;
	muestreable: string;
}
export interface IDATADataNucleos {
	r: number;
	desde: number;
	hasta: number;
	b: number;
	g: number;
}
export interface IDATADataSuperficies {
	r: number;
	nombre: string;
	profundidad: number;
	b: number;
	g: number;
}
export interface IDATAData {
	intervalos: IDATADataIntervalos[];
	nucleos: IDATADataNucleos[];
	superficies: IDATADataSuperficies[];
	profundidadRegistro: number;
}