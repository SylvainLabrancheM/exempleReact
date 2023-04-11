import React, { useState } from "react";
import Card from "../../../shared/Card";
import Button from "../../../shared/Formulaire/Button";
import Modal from "../../../shared/Modal"
import "./Place.css";

function Place({ place }) {
  const [montrerCarte, setMontrerCarte] = useState(false);

  const ouvrirMapHandler = () => setMontrerCarte(true);
  const fermeMapHandler = () => setMontrerCarte(false);
  return (
    <React.Fragment>
      <Modal
        show={montrerCarte}
        onCancel={fermeMapHandler}
        header={PaymentResponse.adresse}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={fermeMapHandler}>FERMER</Button>}
      >
        <div className="map-container">
          <h2>LA CARTE!</h2>
        </div>
        </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={place.imageUrl} alt={place.titre} />
          </div>
          <div className="place-item__info">
            <h2> {place.titre}</h2>
            <h3>{place.adresse}</h3>
            <p>{place.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={ouvrirMapHandler}> Voir sur la carte </Button>
            <Button to={`/places/${place.id}`}> Éditer </Button>
            <Button danger> Supprimer </Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
}

export default Place;
