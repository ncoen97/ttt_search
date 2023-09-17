import { useState, useEffect } from "react";
import Filters from "./Filters";
import Table from "./Table";
import {
  CitizensType,
  FiltersDataType,
  FiltersType,
  getCitizens,
  getFiltersData,
} from "./api";

const INITIAL_FILTERS = {
  referente: "",
  calle: "",
};

export default function App() {
  const [citizens, setCitizens] = useState<CitizensType[]>([]);
  const [loadingCitizens, setLoadingCitizens] = useState<boolean>(false);
  const [filtersData, setFiltersData] = useState<FiltersDataType>({
    referentes: [],
    calles: [],
  });
  const [loadingFiltersData, setLoadingFiltersData] = useState<boolean>(true);
  const [filters, setFilters] = useState<FiltersType>(INITIAL_FILTERS);

  useEffect(() => {
    // Fetch the filters data from the API and set it to state
    getFiltersData()
      .then((res) => setFiltersData(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoadingFiltersData(false));
  }, []);

  const handleFilter = () => {
    // Fetch the citizens from the API and set it to state
    setLoadingCitizens(true);
    getCitizens(filters)
      .then((res) => setCitizens(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoadingCitizens(false));
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
        filtersData={filtersData}
        loading={loadingFiltersData}
      />
      <Table loading={loadingCitizens} citizens={citizens} />
    </div>
  );
}
