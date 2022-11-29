import React from "react";
import "./details.css";
import Collapse from "../../Apropos/Collapse"

function Collapse_Details({ description, equipments }) {
  return (
    <div className="collapse-details" >
      <Collapse titre="Description" >
        <p className="collapse__text">{description}</p>
      </Collapse>

      <Collapse titre="Équipements" >
        <ul className="collapse__text">
          {equipments.map((equipment) => {
            return <li key={`${equipment}`}>{equipment}</li>;
          })}
        </ul>
      </Collapse>
    </div>
  );
}

export default Collapse_Details;
