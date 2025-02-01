import React, { useContext } from "react";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";
import { Context } from "../store/appContext.js";

export const Planetas = () => {

  const { store, actions } = useContext(Context);

  return (
    <section className="px-5 w-100">
      <h1 className="text-danger mt-4">Planetas</h1>
      <div className="d-flex overflow-auto p-2 g-2">
        {store.planetas &&
          store.planetas.map((planet) => (
            <Card key={planet.uid} item={planet} itemType={"planeta"} />
          ))}
      </div>
    </section>
  );
};