import React from "react";
import BannerApropos from "../../components/Apropos/Banner_Apropos";
import Collapse from "../../components/Apropos/Collapse";

const Apropos = () => (
  <div className="apropos">
    <BannerApropos />
    <section className="apropos__info">
      <Collapse titre="Services">
        Nos équipes se tiennent à votre disposition pour vous fournir une
        expérience parfaite. N'hésitez pas à nous contacter si vous avez la
      </Collapse>
      <Collapse titre="Fiabilité">
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conforment aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.
      </Collapse>
      <Collapse titre="Respect">
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </Collapse>
      <Collapse titre="Sécurité">
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
        les voyageurs, chaque logement correspond aux critères de sécurité
        établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont
        bien respectés. Nous organisons également des ateliers sur la sécurité
        domestique pour nos hôtes.
      </Collapse>
    </section>
  </div>
);

export default Apropos;
