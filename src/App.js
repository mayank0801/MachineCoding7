import { Routes, Route } from "react-router-dom";
import Continent from "./Page/Continent";
import Country from "./Page/Country";
import CountryDetail from "./Page/CountryDetail";
import Destination from "./Page/Destinatination";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Continent />}></Route>
        <Route path="/continent/:Conid" element={<Country />}></Route>
        <Route
          path="/country/:contId/:countryId"
          element={<CountryDetail />}
        ></Route>
        <Route
          path="/dest/:contId/:countryId/:destId"
          element={<Destination />}
        />
      </Routes>
    </div>
  );
}
