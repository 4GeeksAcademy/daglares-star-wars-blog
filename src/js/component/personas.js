import React, { useContext } from "react";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";
import { Context } from "../store/appContext.js";

export const Personas = () => {

  const { store, actions } = useContext(Context);

  return (
    <section className="px-5 w-100">
      <h1 className="text-danger mt-2">Personas</h1>
      <div className="d-flex overflow-auto p-2 g-2">
        {store.personas &&
          store.personas.map((personaje) => (
            <Card key={personaje.uid} item={personaje} itemType={"persona"} />
          ))}
      </div>
    </section>
  );
};
