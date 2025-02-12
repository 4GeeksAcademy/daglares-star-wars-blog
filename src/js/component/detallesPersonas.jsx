import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const DetallesPersonas = () => {
  const { uid } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadPersonaInfo(uid);
  }, [uid, actions]);

  if (!store.personaInfo) {
    return <div>Cargando información de la persona...</div>;
  }

  const persona = store.personaInfo.properties;
  const personaUID = store.personaInfo.uid;

  return (
    <div className="card border-danger">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${personaUID}.jpg`}
            className="img-fluid rounded-start"
            alt="Character Image"
          />
        </div>
        <div className="col-md-8 my-5">
          <div className="card-body">
            <h5 className="card-title">{persona.name}</h5>
            <p className="card-text">"{store.personaInfo.description}"</p>
            <hr className="text-danger my-5" />
            <div className="row">
              <div className="col-2 text-center">
                <h1>
                  <span className="text-danger fs-5">Name</span>
                </h1>
                <ul className="list-unstyled small">
                  <li className="mb-2 text-danger">{persona.name}</li>
                </ul>
              </div>
              <div className="col-2 mb-3 px-1 text-center">
                <h1 className="mb-2">
                  <span className="text-danger fs-5">Birth Year</span>
                </h1>
                <ul className="list-unstyled small">
                  <li className="mb-2 text-danger">{persona.birth_year}</li>
                </ul>
              </div>
              <div className="col-2 mb-3 px-1 text-center">
                <h1 className="mb-2">
                  <span className="text-danger fs-5">Gender</span>
                </h1>
                <ul className="list-unstyled small">
                  <li className="mb-2 text-danger">{persona.gender}</li>
                </ul>
              </div>
              <div className="col-2 mb-3 px-1 text-center">
                <h1 className="mb-2">
                  <span className="text-danger fs-5">Height</span>
                </h1>
                <ul className="list-unstyled small">
                  <li className="mb-2 text-danger">{persona.height}</li>
                </ul>
              </div>
              <div className="col-2 mb-3 px-1 text-center">
                <h1 className="mb-2">
                  <span className="text-danger fs-5">Skin Color</span>
                </h1>
                <ul className="list-unstyled small">
                  <li className="mb-2 text-danger">{persona.skin_color}</li>
                </ul>
              </div>
              <div className="col-2 mb-3 px-1 text-center">
                <h1 className="mb-2">
                  <span className="text-danger fs-5">Eye Color</span>
                </h1>
                <ul className="list-unstyled small">
                  <li className="mb-2 text-danger">{persona.eye_color}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetallesPersonas;
