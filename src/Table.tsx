import React from "react";
import {
  CircularProgress,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { CitizensType } from "./api";

interface TableProps {
  citizens: CitizensType[];
  loading: boolean;
}

const Table: React.FC<TableProps> = ({ citizens, loading }) => {
  return loading ? (
    <CircularProgress />
  ) : (
    <MuiTable>
      <TableHead>
        <TableRow>
          <TableCell>Nombre</TableCell>
          <TableCell>Apellido</TableCell>
          <TableCell>DNI</TableCell>
          <TableCell>Telefono</TableCell>
          <TableCell>Calle</TableCell>
          <TableCell>Fecha de Nacimiento</TableCell>
          <TableCell>Referente</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {citizens.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.nombre}</TableCell>
            <TableCell>{row.apellido}</TableCell>
            <TableCell>{row.dni}</TableCell>
            <TableCell>{row.telefono}</TableCell>
            <TableCell>{row.calle}</TableCell>
            <TableCell>{row.fecha_de_nacimiento}</TableCell>
            <TableCell>{row.referente}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </MuiTable>
  );
};

export default Table;
