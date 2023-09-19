import { Citizen, FiltersData } from "./types";

export const mockCitizens: Citizen[] = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    dni: "12345678",
    telefono: "555-1234",
    domicilio: {
      calle: "Calle",
      numero: "123",
      extra: "Piso 3"
    },
    fechaNacimiento: "1990-01-01",
    referenteTTT: {
      nombre: "Mati"
    },
  },
  {
    id: 2,
    nombre: "Maria",
    apellido: "Gomez",
    dni: "87654321",
    telefono: "555-5678",
    domicilio: {
      calle: "Avenida",
      numero: "456",
      extra: "DEPTO 1"
    },
    fechaNacimiento: "1992-05-10",
    referenteTTT: {
      nombre: "Tati"
    },
  },
  {
    id: 3,
    nombre: "Carlos",
    apellido: "Rodriguez",
    dni: "23456789",
    telefono: "555-7890",
    domicilio: {
      calle: "Callejón",
      numero: "789",
      extra: ""
    },
    fechaNacimiento: "1985-07-20",
    referenteTTT: {
      nombre: "Seba"
    },
  },
  {
    id: 4,
    nombre: "Lucia",
    apellido: "Fernandez",
    dni: "98765432",
    telefono: "555-3456",
    domicilio: {
      calle: "Boulevard",
      numero: "012",
      extra: "FONDO"
    },
    fechaNacimiento: "1995-03-15",
    referenteTTT: {
      nombre: "Eze"
    },
  },
];

export const mockFiltersData: FiltersData = {
  referentes: ["Eze", ""],
  calles: ["Olleros", "Maure"],
};
