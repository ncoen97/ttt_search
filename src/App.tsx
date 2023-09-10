import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import Table from "./Table";
import mockData from "./mocks";

export type DataType = {
  nombre: string;
  apellido: string;
  dni: string;
  telefono: string;
  direccion: string;
  fecha_de_nacimiento: string;
  relacion: string;
};

export type FiltersType = {
  relacion: string;
  direccion: string;
};

const INITIAL_FILTERS = {
  relacion: "",
  direccion: "",
};

export default function App() {
  const [data, setData] = useState<DataType[]>([]);
  const [filteredData, setFilteredData] = useState<DataType[]>([]);
  const [filters, setFilters] = useState<FiltersType>(INITIAL_FILTERS);

  useEffect(() => {
    // Fetch the data from the API and set it to data state
    // fetch("YOUR_API_ENDPOINT")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setData(data);
    //     setFilteredData(data); // initially, filteredData will have all records
    //   });
    setData(mockData);
    setFilteredData(mockData);
  }, []);

  const handleFilter = () => {
    const lowerCaseRelacion = filters.relacion.toLowerCase();
    const lowerCaseDireccion = filters.direccion.toLowerCase();

    const result = data.filter(
      (item) =>
        item.relacion.toLowerCase().includes(lowerCaseRelacion) &&
        item.direccion.toLowerCase().includes(lowerCaseDireccion)
    );

    setFilteredData(result);
  };

  const clearFilters = () => setFilters(INITIAL_FILTERS);

  return (
    <div
      style={{ height: "100dvh", backgroundColor: "whitesmoke", padding: 16 }}
    >
      <Filters
        handleFilter={handleFilter}
        filters={filters}
        setFilters={setFilters}
        clearFilters={clearFilters}
      />
      <Table data={filteredData} />
    </div>
  );
}
