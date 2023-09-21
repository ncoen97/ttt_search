import React from "react";
import {
  CircularProgress,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { ICitizen } from "../types";

interface TableProps {
  citizens: ICitizen[];
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
          <TableCell>DNI</TableCell>
          <TableCell>Telefono</TableCell>
          <TableCell>Domicilio</TableCell>
          <TableCell>Fecha de Nacimiento</TableCell>
          <TableCell>Referente</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {citizens.map((row, index) => (
          <TableRow key={index}>
            <TableCell>
              {row.nombre} {row.apellido}
            </TableCell>
            <TableCell>{row.dni || "-"}</TableCell>
            <TableCell>{row.telefono || "-"}</TableCell>
            <TableCell>
              {row.domicilio.calle} {row.domicilio.numero} {row.domicilio.extra}
            </TableCell>
            <TableCell>
              {row.fechaNacimiento
                ? new Date(row.fechaNacimiento).toLocaleDateString("es-AR")
                : "-"}
            </TableCell>
            <TableCell>{row.referenteTTT?.nombre || "No asignado"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </MuiTable>
  );
};

export default Table;
