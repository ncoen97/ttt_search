import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./home";
import CitizenPage from "./citizen";

export default function App() {
  return (
    <div style={{ height: "100vh", backgroundColor: "whitesmoke" }}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/ciudadanos/:id" element={<CitizenPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>¡No hay nada que ver aquí!</h2>
      <p>
        <Link to="/">Ir a la página principal</Link>
      </p>
    </div>
  );
}
