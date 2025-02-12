import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const DetallesVehiculos = () => {
  const { uid } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadVehiculoInfo(uid);
  }, [uid, actions]);

  if (!store.vehiculoInfo) {
    return <div>Cargando información del vehículo...</div>;
  }

  const vehiculo = store.vehiculoInfo.properties;
  const vehiculoUID = store.vehiculoInfo.uid;

  return (
    <div className="card border-danger">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`https://starwars-visualguide.com/assets/img/vehicles/${
              vehiculoUID
            }.jpg`}
            className="img-fluid rounded-start"
            alt="Vehicle Image"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {vehiculo.name}
            </h5>
            <p className="card-text">
              "{store.vehiculoInfo.description}"
            </p>
            <hr className="text-danger my-4" />
            <div className="row">
              <div className="col-2 text-center">
                <h1>
                  <span className="text-danger fs-5">Name</span>
                </h1>
                <ul className="list-unstyled small">
                  <li className="mb-2 text-danger">
                    {vehiculo.name}
                  </li>
                </ul>
              </div>
              <div className="col-2 mb-3 px-1 text-center">
                <h1 className="mb-2">
                  <span className="text-danger fs-5">Passengers</span>
                </h1>
                <ul className="list-unstyled small">
                  <li className="mb-2 text-danger">
                    {vehiculo.passengers}
                  </li>
                </ul>
              </div>
              <div className="col-2 mb-3 px-1 text-center">
                <h1 className="mb-2">
                  <span className="text-danger fs-5">Cargo Capacity</span>
                </h1>
                <ul className="list-unstyled small">
                  <li className="mb-2 text-danger">
                    {vehiculo.cargo_capacity}
                  </li>
                </ul>
              </div>
              <div className="col-2 mb-3 px-1 text-center">
                <h1 className="mb-2">
                  <span className="text-danger fs-5">Length</span>
                </h1>
                <ul className="list-unstyled small">
                  <li className="mb-2 text-danger">
                    {vehiculo.length}
                  </li>
                </ul>
              </div>
              <div className="col-2 mb-3 px-1 text-center">
                <h1 className="mb-2">
                  <span className="text-danger fs-5">Crew</span>
                </h1>
                <ul className="list-unstyled small">
                  <li className="mb-2 text-danger">
                    {vehiculo.crew}
                  </li>
                </ul>
              </div>
              <div className="col-2 mb-3 px-1 text-center">
                <h1 className="mb-2">
                  <span className="text-danger fs-5">Consumables</span>
                </h1>
                <ul className="list-unstyled small">
                  <li className="mb-2 text-danger">
                    {vehiculo.consumables}
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

export default DetallesVehiculos;
