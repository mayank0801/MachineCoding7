import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Context/DataContext";

export default function Destination() {
  const { contId, countryId, destId } = useParams();
  console.log(destId);
  const { Data } = useContext(DataContext);
  const Continet = Data.continents.find(({ id }) => id === Number(contId));
  const CounytryFind = Continet.countries.find(
    ({ id }) => id === Number(countryId)
  );
  const DestinationTofind = CounytryFind.destinations.find(
    ({ id }) => id === Number(destId)
  );
  console.log(DestinationTofind);
  return (
    <>
      <h1 className="header-title">{DestinationTofind.name}</h1>
      <div style={{ display: "flex" }}>
        <img height={"400px"} width={"60%"} src={DestinationTofind.image} />
        <div>
          <p>
            <span className="heading-text">Description:</span>
            {DestinationTofind.description}
          </p>
          <p>
            <span className="heading-text">Ratings:</span>
            {DestinationTofind.ratings}
          </p>
          <p>
            <span className="heading-text">Reviews:</span>
            {DestinationTofind.reviews}
          </p>
          <p>
            <span className="heading-text">Loaction:</span>
            {DestinationTofind.location}
          </p>
          <p>
            <span className="heading-text">Opening Hour:</span>
            {DestinationTofind.openingHours}
          </p>
          <p>
            <span className="heading-text">ticketPrice :</span>
            {DestinationTofind.ticketPrice}
          </p>
          <p>
            <span className="heading-text">website:</span>
            {DestinationTofind.website}
          </p>
        </div>
      </div>
    </>
  );
}
