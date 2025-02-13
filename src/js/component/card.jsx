import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({ item, itemType, itemDetails }) => {
  const { store, actions } = useContext(Context);
  const id = item.uid;
  const [details, setDetails] = useState(null);
  const estaSeleccionado = store.favoritos.find( i => i.uid === item.uid);

  let url;
  if (itemType === "personas") {
    url = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  } else if (itemType === "vehiculos") {
    url = `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;
  } else {
    url = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
  }

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src =
      "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    e.target.style.maxWidth = "72%";
    e.target.style.display = "block";
    e.target.style.marginLeft = "auto";
    e.target.style.marginRight = "auto";
  };

  return (
    <div className="p-2 col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card border-danger h-100">
        <img
          src={url}
          className="card-img-top text-center"
          alt="..."
          onError={handleImageError}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">
            <ol>
              {itemDetails && itemDetails.length > 0 ? (
                itemDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))
              ) : (
                <li>No hay detalles disponibles</li>
              )}
            </ol>
          </p>
          <div className="d-flex justify-content-between">
            <Link
              to={`/${itemType}/${id}`}
              className="btn btn-outline-warning flex-start"
            >
              Ver más!
            </Link>
            <button
              className="btn btn-outline-danger flex-end"
              onClick={() =>
                !estaSeleccionado
                  ? actions.agregarFavoritos({...item, itemType})
                  : actions.eliminarFavoritos({...item, itemType})
              }
            >
              <i
                className={
                  estaSeleccionado ? "fa-solid fa-heart" : "fa-regular fa-heart"
                }
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
