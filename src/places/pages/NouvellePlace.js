import React from "react";

import Input from "../../shared/Formulaire/Input"

import "./NouvellePlace.css"

function NouvellePlace() {
  return <form className="place-form">
    <Input element="input" type="text" label="Titre" validateurs={[]} errorText="Entrez un titre valide"/>

  </form>;
}

export default NouvellePlace;
