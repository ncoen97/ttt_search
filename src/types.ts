export type ICitizensListResponse = {
  data: ICitizens;
};

export type ICitizens = ICitizen[];

export type ICitizen = {
  id: number;
  nombre: string;
  apellido: string;
  dni: string;
  telefono: string;
  domicilio: IAddress;
  fechaNacimiento: string;
  referenteTTT: IReferenteTTT;
};

export type IAddress = {
  calle: string;
  numero: string;
  extra: string;
};

export type IReferenteTTT = {
  nombre: string;
};

export type IFilters = {
  referente: string;
  calle: string;
};

export type IFiltersData = {
  referentes: string[];
  calles: string[];
};
