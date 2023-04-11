import { PROPERTY_TYPES } from "@babel/types";
import Card from "../../shared/Card";
import React from "react";
import Place from "./Place";
import "./ListePlaces.css";

function ListePlaces(props) {
  if (props.places.length === 0)
    return (
      <div className="place-list center">
        <Card>
          <h2> Pas de places trouvées :(</h2>
        </Card>
      </div>
    );

  return (
    <ul className="place-list">
      {props.places.map((place) => (
        <Place key={place.id} place={place} />
      ))}
    </ul>
  );
}

export default ListePlaces;
