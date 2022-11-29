import React from "react";
import "./styles.css";

function Collapse(props) {
  return (
    <details className="collapse"  >
      <summary className="info__title">
        {props.titre}
        <i className="fa-solid fa-chevron-down"></i>
      </summary>
        {props.children}
    </details>
  );
}

export default Collapse;