import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const DetallesPlanetas = () => {
  const { uid } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadPlanetaInfo(uid);
  }, [uid, actions]);

  if (!store.planetaInfo) {
    return <div>Cargando información del planeta...</div>;
  }

  const planeta = store.planetaInfo.properties;
  const planetaUID = store.planetaInfo.uid;

  return (
    <div className="card border-danger">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${
              planetaUID
            }.jpg`}
            className="img-fluid rounded-start"
            alt="Planet Image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {planeta.name}
            </h5>
            <p className="card-text">
              "{store.planetaInfo.description}"
            </p>
            <hr className="text-danger my-4" />
            <div className="row my-5">
              <div className="col-2 mb-3 px-1 text-center">
                <h1 className="mb-2">
                  <span className="text-danger fs-5">Name</span>
                </h1>
                <ul className="list-unstyled small">
                  <li className="mb-2 text-danger">
                    {planeta.name}
                  </li>
                </ul>
              </div>
              <div className="col-2 mb-3 px-1 text-center">
                <h1 className="mb-2">
                  <span className="text-danger fs-5">Climate</span>
                </h1>
                <ul className="list-unstyled small">
                  <li className="mb-2 text-danger">
                    {planeta.climate}
                  </li>
                </ul>
              </div>
              <div className="col-2 mb-3 px-1 text-center">
                <h1 className="mb-2">
                  <span className="text-danger fs-5">Population</span>
                </h1>
                <ul className="list-unstyled small">
                  <li className="mb-2 text-danger">
                    {planeta.population}
                  </li>
                </ul>
              </div>
              <div className="col-2 mb-3 px-1 text-center">
                <h1 className="mb-2">
                  <span className="text-danger fs-5">Orbital Period</span>
                </h1>
                <ul className="list-unstyled small">
                  <li className="mb-2 text-danger">
                    {planeta.orbital_period}
                  </li>
                </ul>
              </div>
              <div className="col-2 mb-3 px-1 text-center">
                <h1 className="mb-2">
                  <span className="text-danger fs-5">Rotation Period</span>
                </h1>
                <ul className="list-unstyled small">
                  <li className="mb-2 text-danger">
                    {planeta.rotation_period}
                  </li>
                </ul>
              </div>
              <div className="col-2 mb-3 px-1 text-center">
                <h1 className="mb-2">
                  <span className="text-danger fs-5">Diameter</span>
                </h1>
                <ul className="list-unstyled small">
                  <li className="mb-2 text-danger">
                    {planeta.diameter}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetallesPlanetas;
