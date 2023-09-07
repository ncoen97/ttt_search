import React from "react";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

interface TableProps {
  data: Array<{
    nombre: string;
    apellido: string;
    dni: string;
    telefono: string;
    direccion: string;
    fecha_de_nacimiento: string;
    relacion: string;
  }>;
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <MuiTable>
      <TableHead>
        <TableRow>
          <TableCell>Nombre</TableCell>
          <TableCell>Apellido</TableCell>
          <TableCell>DNI</TableCell>
          <TableCell>Telefono</TableCell>
          <TableCell>Direccion</TableCell>
          <TableCell>Fecha de Nacimiento</TableCell>
          <TableCell>Relacion</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.nombre}</TableCell>
            <TableCell>{row.apellido}</TableCell>
            <TableCell>{row.dni}</TableCell>
            <TableCell>{row.telefono}</TableCell>
            <TableCell>{row.direccion}</TableCell>
            <TableCell>{row.fecha_de_nacimiento}</TableCell>
            <TableCell>{row.relacion}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </MuiTable>
  );
};

export default Table;
