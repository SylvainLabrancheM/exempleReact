import React from "react";
import ListePlaces from "../components/ListePlaces";
import { useParams } from "react-router-dom";

const PLACES = [
  {
    id: "p1",
    titre: "Empire State Building",
    description: "Grosse bâtisse!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    addresse: "20 W 34th St, New York, NY 10001",
    localisation: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    createur: "u1",
  },
  {
    id: "p2",
    titre: "Empire State Building",
    description: "Grosse bâtisse!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    addresse: "20 W 34th St, New York, NY 10001",
    localisation: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

function PlacesUtilisateur() {
  const userId = useParams().userId;
  const placesChargees = PLACES.filter((place) => (place.createur === userId));
  return (
    <ListePlaces places={placesChargees} />
  
  )
}

export default PlacesUtilisateur;
