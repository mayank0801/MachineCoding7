import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../Component/Card";
import { DataContext } from "../Context/DataContext";
import "../styles.css";

export default function Continent() {
  const { Data } = useContext(DataContext);
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="heading-title">Welcome To Trip Advisor</h1>
      <p className="heading-text">Top Continent For Your Next Holiday</p>
      <div className="flex-container">
        {Data.continents.map((continent) => (
          <div
            key={continent.id}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/continent/${continent.id}`)}
          >
            <Card data={continent} />
          </div>
        ))}
      </div>
    </div>
  );
}
