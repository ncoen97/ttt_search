import { useState } from "react";
import { useParams } from "react-router-dom";

const CitizenPage = () => {
  const { id } = useParams();
  const isNew = id === "new";
  const [editMode, setEditMode] = useState<boolean>(isNew);

  return (
    <div>
      <h1>Citizen ID: {id}</h1>
    </div>
  );
};

export default CitizenPage;
