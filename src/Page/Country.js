import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../Component/Card";
import { DataContext } from "../Context/DataContext";

export default function Country({ data }) {
  const { Conid } = useParams();
  const { Data } = useContext(DataContext);
  const ContinentCountries = Data.continents.find(
    ({ id }) => id === Number(Conid)
  );
  const navigate = useNavigate();
  console.log(ContinentCountries);
  return (
    <div>
      <h1>{`Top Countries in ${ContinentCountries.name} for Your Next Travel`}</h1>
      <div className="flex-container">
        {ContinentCountries.countries.map((country) => (
          <div
            key={country.id}
            onClick={() =>
              navigate(`/country/${ContinentCountries.id}/${country.id}`)
            }
          >
            <Card data={country} />
          </div>
        ))}
      </div>
    </div>
  );
}
