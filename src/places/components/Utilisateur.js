import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/Avatar";
import Card from "../../shared/Card";

import "./Utilisateur.css";

function Utilisateur({ utilisateur }) {
  return (
    <li className="user-item">
        <Card className="user-item__content">
          <Link to={`/${utilisateur.id}/places`}>
            <div className="user-item__image">
              <Avatar image={utilisateur.image} alt={utilisateur.nom} />
            </div>

            <div className="user-item__info">
              <h2>{utilisateur.nom}</h2>
              <h3>
                {utilisateur.places}{" "}
                {utilisateur.places < 2 ? "place" : "places"}
              </h3>
            </div>
          </Link>
        </Card>
    </li>
  );
}

export default Utilisateur;
