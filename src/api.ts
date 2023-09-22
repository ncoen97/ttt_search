import axios from "axios";
import { mockCitizen, mockCitizens, mockFiltersData } from "./mocks";
import { ICitizensListResponse, IFilters, IFiltersData } from "./types";

const backendUrl = "http://localhost:8000/api";

export const getFiltersData = () => {
  //return Promise.resolve({ data: mockFiltersData });
  return axios.get<IFiltersData>(`${backendUrl}/filtros`);
};

export const getCitizens = (filters?: IFilters) => {
  //return Promise.resolve({ data: mockCitizens });
  return axios.get<ICitizensListResponse>(`${backendUrl}/ciudadanos`, {
    params: filters,
  });
};

export const getCitizen = (id: number) => {
  //return Promise.resolve({ data: mockCitizens });
  return Promise.resolve({ data: mockCitizen });
  // return axios.get<ICitizenResponse>(`${backendUrl}/ciudadanos`, {
  //   params: { id },
  // });
};
