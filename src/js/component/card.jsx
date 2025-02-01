import React from "react";

export const Card = ({ item, itemType }) => {
  let url;
  if (itemType === "persona") {
    url = `https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`;
  } else if (itemType === "vehiculo") {
    url = `https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`;
  } else {
    url = `https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`;
  }

  const handleImageError = (e) => {
    // Se evita que se llame nuevamente el evento en caso de que la imagen de placeholder también falle
    e.target.onerror = null;
    e.target.src =
      "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  };

  return (
    <div className="p-2 col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card h-100">
        <img
          src={url}
          className="card-img-top"
          alt="..."
          onError={handleImageError}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
};
