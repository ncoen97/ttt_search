import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import Table from "./Table";
import mockData from "./mocks";

type HandleFilterType = {
  relacion: string;
  direccion: string;
};

export type DataType = {
  nombre: string;
  apellido: string;
  dni: string;
  telefono: string;
  direccion: string;
  fecha_de_nacimiento: string;
  relacion: string;
};

export default function App() {
  const [data, setData] = useState<DataType[]>([]);
  const [filteredData, setFilteredData] = useState<DataType[]>([]);

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

  const handleFilter = (filters: HandleFilterType) => {
    // Implement filtering logic based on filters and update filteredData
    const result = data.filter(
      (item) =>
        item.relacion.includes(filters.relacion) &&
        item.direccion.includes(filters.direccion)
    );
    setFilteredData(result);
  };
  return (
    <div style={{ padding: 16 }}>
      <Filters onFilterChange={handleFilter} />
      <Table data={filteredData} />
    </div>
  );
}
