import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../Component/Card";
import { DataContext } from "../Context/DataContext";

export default function CountryDetail() {
  const { contId, countryId } = useParams();
  const { Data } = useContext(DataContext);

  const Continent = Data.continents.find(({ id }) => id === Number(contId));
  const CountryDetail = Continent?.countries.find(
    ({ id }) => id == Number(countryId)
  );
  const navigate = useNavigate();
  return (
    <div>
      <div className="country-detail">
        <h1 className="heading-title">
          Top Destination to visit in {CountryDetail.name}
        </h1>
        <div className="flex-container">
          {CountryDetail.destinations.map((dest) => (
            <div
              key={dest.id}
              onClick={() =>
                navigate(`/dest/${Continent.id}/${CountryDetail.id}/${dest.id}`)
              }
            >
              <Card data={dest} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
