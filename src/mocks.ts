import { CitizensType, FiltersDataType } from "./api";

export const mockCitizens: CitizensType[] = [
  {
    nombre: "Juan",
    apellido: "Perez",
    dni: "12345678",
    telefono: "555-1234",
    calle: "Calle 123",
    fecha_de_nacimiento: "1990-01-01",
    referente: "Amigo",
  },
  {
    nombre: "Maria",
    apellido: "Gomez",
    dni: "87654321",
    telefono: "555-5678",
    calle: "Avenida 456",
    fecha_de_nacimiento: "1992-05-10",
    referente: "Familia",
  },
  {
    nombre: "Carlos",
    apellido: "Rodriguez",
    dni: "23456789",
    telefono: "555-7890",
    calle: "Callejón 789",
    fecha_de_nacimiento: "1985-07-20",
    referente: "Colega",
  },
  {
    nombre: "Lucia",
    apellido: "Fernandez",
    dni: "98765432",
    telefono: "555-3456",
    calle: "Boulevard 012",
    fecha_de_nacimiento: "1995-03-15",
    referente: "Amigo",
  },
];

export const mockFiltersData: FiltersDataType = {
  referentes: ["Eze", "Nico"],
  calles: ["Olleros 3032", "Maure 3255"],
};
