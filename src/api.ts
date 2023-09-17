import axios from "axios";
import { mockCitizens, mockFiltersData } from "./mocks";

const backendUrl = "http://localhost:3001/api";

export const getFiltersData = () => {
  return Promise.resolve({ data: mockFiltersData });
  return axios.get<FiltersDataType>(`${backendUrl}/filtros`);
};

export const getCitizens = (filters: FiltersType) => {
  return Promise.resolve({ data: mockCitizens });
  return axios.get<CitizensType[]>(`${backendUrl}/ciudadanos`);
};

export type CitizensType = {
  nombre: string;
  apellido: string;
  dni: string;
  telefono: string;
  calle: string;
  fecha_de_nacimiento: string;
  referente: string;
};

export type FiltersType = {
  referente: string;
  calle: string;
};

export type FiltersDataType = {
  referentes: string[];
  calles: string[];
};
