import "./Card.css";
import { BiMap } from "react-icons/bi";

export default function Card({ data }) {
  return (
    <div className="Card-contianer">
      <div className="">
        <img
          height={"100%"}
          width={"100%"}
          src={data?.image}
          alt={"continent-img"}
        />
        <span className="detail">
          <BiMap size={20} />
          <p>{data.name}</p>
        </span>
      </div>
    </div>
  );
}
