import React from "react";
import "./host.css";

function Host({ host }) {
  const firstName = host.name.split(" ")[0];
  const lastName = host.name.split(" ")[1];
  return (
    <>
      <div className="host__info">
        <p className="host__name"> 
          <span> {lastName} </span>
          <span> {firstName}</span>
        </p>
        <img src={host.picture} alt="{host.name}" className="host__image" />
      </div>
    </>
  );
}

export default Host;
