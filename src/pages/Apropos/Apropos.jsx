import React from "react";
import BannerApropos from "../../components/Apropos/Banner_Apropos";
import Collapse from "../../components/Apropos/Collapse";

const Apropos = () => (
  <div className="apropos">
    <BannerApropos />
    <section className="apropos__info">
      <Collapse titre="Services">
      <p className="info__text">
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
        </p>
      </Collapse>
      <Collapse titre="Fiabilité">
        <p className="info__text">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conforment aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </Collapse>
      <Collapse titre="Respect">
        <p className="info__text">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage entraînera
          une exclusion de notre plateforme.
        </p>
      </Collapse>
      <Collapse titre="Sécurité">
        <p className="info__text">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
          les voyageurs, chaque logement correspond aux critères de sécurité
          établis par nos services. En laissant une note aussi bien à l'hôte qu'au
          locataire, cela permet à nos équipes de vérifier que les standards sont
          bien respectés. Nous organisons également des ateliers sur la sécurité
          domestique pour nos hôtes.
        </p>
      </Collapse>
    </section>
  </div>
);

export default Apropos;
