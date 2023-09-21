import { useState, useEffect } from "react";
import FiltersPanel from "./Filters";
import Table from "./Table";
import { getCitizens, getFiltersData } from "../api";
import { ICitizen, IFiltersData, IFilters } from "../types";

const INITIAL_FILTERS = {
  referente: "",
  calle: "",
};

export default function HomePage() {
  const [citizens, setCitizens] = useState<ICitizen[]>([]);
  const [loadingCitizens, setLoadingCitizens] = useState<boolean>(false);
  const [filtersData, setFiltersData] = useState<IFiltersData>({
    referentes: [],
    calles: [],
  });
  const [loadingFiltersData, setLoadingFiltersData] = useState<boolean>(true);
  const [filters, setFilters] = useState<IFilters>(INITIAL_FILTERS);

  useEffect(() => {
    // Fetch the filters data from the API and set it to state
    getFiltersData()
      .then((res) => setFiltersData(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoadingFiltersData(false));

    getCitizens(filters)
      .then((res) => setCitizens(res.data.data))
      .catch((err) => console.error(err))
      .finally(() => setLoadingCitizens(false));
  }, []);

  const handleFilter = () => {
    // Fetch the citizens from the API and set it to state
    setLoadingCitizens(true);
    getCitizens(filters)
      .then((res) => setCitizens(res.data.data))
      .catch((err) => console.error(err))
      .finally(() => setLoadingCitizens(false));
  };

  const clearFilters = () => setFilters(INITIAL_FILTERS);

  return (
    <div style={{ height: "100%", backgroundColor: "whitesmoke", padding: 16 }}>
      <FiltersPanel
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
