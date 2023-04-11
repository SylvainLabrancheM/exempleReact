import React, { useReducer } from "react";

import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        valeur: action.valeur,
        estValide: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    valeur: "",
    estValide: false,
  });
  const changeHandler = (event) => {
    dispatch({ type: "CHANGE", valeur: event.target.value });
  };
  const element =
    props.element === "input" ? (
      <input id={props.id} type={props.type} placeholder={props.placeholder} value={inputState.valeur} onChange={changeHandler} />
    ) : (
      <textarea id={props.id} rows={props.rows || 3} value={inputState.valeur} onChange={changeHandler}/>
    );
  return (
    <div className={`form-control ${!inputState.estValide && "form-control--invalid"}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.estValide && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
