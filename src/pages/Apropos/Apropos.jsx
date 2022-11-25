import React from "react";
import BannerApropos from "../../components/Apropos/Banner_Apropos";
import Fiability from "../../components/Apropos/Collapse_Fiability";
import Respect from "../../components/Apropos/Collapse_Respect";
import Service from "../../components/Apropos/Collapse_Service";
import Security from "../../components/Apropos/Collapse_Security";

const Apropos = () => (
  <div className="apropos">
    <BannerApropos />
    <section className="apropos__info">
      <Fiability />
      <Respect />
      <Service />
      <Security />
    </section>
  </div>
);

export default Apropos;
