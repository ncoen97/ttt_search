import React, { ChangeEvent } from "react";
import { TextField } from "@mui/material";

interface FiltersProps {
  onFilterChange: (filters: { relacion: string; direccion: string }) => void;
}

type HandleInputChangeType = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const handleInputChange = (e: HandleInputChangeType) => {
    const filters = {
      relacion: e.target.name === "relacion" ? e.target.value : "",
      direccion: e.target.name === "direccion" ? e.target.value : "",
    };
    onFilterChange(filters);
  };

  return (
    <div>
      <TextField
        name="relacion"
        label="Relacion"
        onChange={handleInputChange}
      />
      <TextField
        name="direccion"
        label="Direccion"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Filters;
