import React from "react";
import "./styles.css";

function Collapse(props) {
  return (
    <details className="info__details service"  >
      <summary className="info__title">
        {props.titre} <i className="fa-solid fa-chevron-down"></i>
      </summary>
      <p className="info__text">
        {props.children}
      </p>
    </details>
  );
}

export default Collapse;