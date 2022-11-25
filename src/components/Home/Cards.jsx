import React from "react";
import { Link } from "react-router-dom";
import Logements from "../../logements.json";
import "./cards.css";

function JsonDataCards() {
  return (
    <>
      <div className="cover_global">
        {Logements.map((info) => {
          return (
            <Link
              className="cover_logement"
              key={info.id}
              to={`/logement/${info.id}`}
              style={{ backgroundImage: `url(${info.cover})` }}
            >
              <p className="cover_title"> {info.title} </p>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default JsonDataCards;
