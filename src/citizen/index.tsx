import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ICitizen } from "../types";
import { useForm } from "react-hook-form";
import { getCitizen } from "../api";
import { Button, Card, IconButton, TextField, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EditOffIcon from "@mui/icons-material/EditOff";

const INITIAL_CITIZEN = {
  id: null,
  nombre: "",
  apellido: "",
  dni: "",
  telefono: "",
  domicilio: {
    calle: "",
    numero: "",
    extra: "",
  },
  fechaNacimiento: "",
  referenteTTT: {
    nombre: "",
  },
};

const CitizenPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === "new";
  const [editMode, setEditMode] = useState<boolean>(isNew);
  const [initialCitizenData, setInitialCitizenData] =
    useState<ICitizen>(INITIAL_CITIZEN);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ICitizen>({
    defaultValues: INITIAL_CITIZEN,
  });

  useEffect(() => {
    if (!isNew) {
      getCitizen(Number(id))
        .then((res) => {
          setInitialCitizenData(res.data);
          setValue("id", res.data.id);
          setValue("nombre", res.data.nombre);
          setValue("apellido", res.data.apellido);
          setValue("dni", res.data.dni);
          setValue("telefono", res.data.telefono);
          setValue("domicilio.calle", res.data.domicilio.calle);
          setValue("domicilio.numero", res.data.domicilio.numero);
          setValue("domicilio.extra", res.data.domicilio.extra);
          setValue("fechaNacimiento", res.data.fechaNacimiento);
          setValue("referenteTTT.nombre", res.data.referenteTTT.nombre);
        })
        .catch(console.error);
    }
  }, [id, isNew, setValue]);

  const onSubmit = (data: ICitizen) => {
    console.log(data);
    setEditMode(false);
  };

  const onCancel = () => {
    setValue("id", initialCitizenData.id);
    setValue("nombre", initialCitizenData.nombre);
    setValue("apellido", initialCitizenData.apellido);
    setValue("dni", initialCitizenData.dni);
    setValue("telefono", initialCitizenData.telefono);
    setValue("domicilio.calle", initialCitizenData.domicilio.calle);
    setValue("domicilio.numero", initialCitizenData.domicilio.numero);
    setValue("domicilio.extra", initialCitizenData.domicilio.extra);
    setValue("fechaNacimiento", initialCitizenData.fechaNacimiento);
    setValue("referenteTTT.nombre", initialCitizenData.referenteTTT.nombre);
    setEditMode(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", paddingTop: 24 }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 600,
          padding: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 8,
          }}
        >
          <Typography variant="h6">Ciudadano</Typography>
          <IconButton onClick={() => setEditMode((m) => !m)}>
            {editMode ? <EditOffIcon /> : <EditIcon />}
          </IconButton>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            gap: 16,
          }}
        >
          <div
            style={{ display: "flex", justifyContent: "space-between", gap: 8 }}
          >
            <TextField
              {...register("nombre")}
              label="Nombre"
              disabled={!editMode}
              sx={{ flex: 1 }}
            />
            <TextField
              {...register("apellido")}
              label="Apellido"
              disabled={!editMode}
              sx={{ flex: 1 }}
            />
          </div>
          <TextField {...register("dni")} label="dni" disabled={!editMode} />
          <TextField
            {...register("telefono")}
            label="Telefono"
            disabled={!editMode}
          />
          <TextField
            {...register("domicilio.calle")}
            label="Calle"
            disabled={!editMode}
          />
          <TextField
            {...register("domicilio.numero")}
            label="Número"
            disabled={!editMode}
          />
          <TextField
            {...register("domicilio.extra")}
            label="Extra"
            disabled={!editMode}
          />
          <TextField
            {...register("fechaNacimiento")}
            label="Fecha de nacimiento"
            disabled={!editMode}
          />
          <TextField
            {...register("referenteTTT.nombre")}
            label="Referente TTT"
            disabled={!editMode}
          />
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
            {editMode ? (
              <>
                <Button onClick={onCancel}>Cancelar</Button>
                <Button variant="contained" type="submit">
                  Guardar
                </Button>
              </>
            ) : (
              <Button onClick={() => navigate("/")}>Cerrar</Button>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CitizenPage;
