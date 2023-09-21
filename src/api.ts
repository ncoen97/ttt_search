import axios from "axios";
import { mockCitizens, mockFiltersData } from "./mocks";
import { CitizensListResponse, Filters, FiltersData } from "./types";

const backendUrl = "http://localhost:8000/api";

export const getFiltersData = () => {
  //return Promise.resolve({ data: mockFiltersData });
  return axios.get<FiltersData>(`${backendUrl}/filtros`);
};

export const getCitizens = (filters?: Filters) => {
  //return Promise.resolve({ data: mockCitizens });
  return axios.get<CitizensListResponse>(`${backendUrl}/ciudadanos`, {
    params: filters
  });
};
