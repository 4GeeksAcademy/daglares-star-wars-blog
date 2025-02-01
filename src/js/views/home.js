import React, { useContext } from "react";
import "../../styles/home.css";

import { Personas } from "../component/personas.js";
import { Vehiculos } from "../component/vehiculos.js";
import { Planetas } from "../component/planetas.js";

export const Home = () => {
  return (
    <>
  <Personas />
  <Vehiculos/>
  <Planetas/>
  </>
);
};
