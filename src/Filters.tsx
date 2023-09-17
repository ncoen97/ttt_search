import React, { ChangeEvent, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FiltersDataType, FiltersType } from "./api";

interface FiltersProps {
  filters: FiltersType;
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
  handleFilter: () => void;
  clearFilters: () => void;
  filtersData: FiltersDataType;
  loading: boolean;
}

type HandleInputChangeType = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

const Filters: React.FC<FiltersProps> = ({
  filters,
  setFilters,
  handleFilter,
  clearFilters,
  loading,
  filtersData,
}) => {
  const [expanded, setExpanded] = useState<boolean>(true);

  const toggleAccordion = () => setExpanded((prev) => !prev);

  const handleInputChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onFilter = () => {
    toggleAccordion();
    handleFilter();
  };

  return (
    <Accordion expanded={expanded} onChange={toggleAccordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="filters-content"
        id="filters-header"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Typography>Filtros:</Typography>
        {!expanded && (
          <Typography sx={{ color: "text.secondary", marginLeft: 2 }}>
            {Object.entries(filters)
              .filter((entry) => entry[1])
              .map((entry) => `${entry[0]}: ${entry[1]}`)
              .join(", ") || "Ninguno"}
          </Typography>
        )}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <FormControl sx={{ width: 200 }}>
                <InputLabel id="referente-select-label">Referente</InputLabel>
                <Select
                  value={filters.referente}
                  label="Referente"
                  name="referente"
                  onChange={handleInputChange}
                >
                  {filtersData.referentes.map((referente) => (
                    <MenuItem value={referente}>{referente}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ width: 200 }}>
                <InputLabel id="calle-select-label">Calle</InputLabel>
                <Select
                  value={filters.calle}
                  label="Calle"
                  name="calle"
                  onChange={handleInputChange}
                >
                  {filtersData.calles.map((calle) => (
                    <MenuItem value={calle}>{calle}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: 8,
              }}
            >
              <Button
                onClick={clearFilters}
                variant="contained"
                sx={{
                  backgroundColor: "#b0b0b0", // A darker shade of gray
                  "&:hover": {
                    backgroundColor: "#9e9e9e", // A shade darker than the default for hover
                  },
                }}
              >
                Limpiar
              </Button>
              <Button onClick={onFilter} variant="contained" color="primary">
                Filtrar
              </Button>
            </div>
          </>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default Filters;
