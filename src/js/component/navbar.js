import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const FavoritosDropDown = () => {
  const { store, actions } = useContext(Context);
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="dropdown">
      <button
        className="btn btn-dark dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Favoritos ❤
      </button>
      <ul className="dropdown-menu">
        {store.favoritos && store.favoritos.length > 0 ? (
          store.favoritos.map((item, index) => (
            <li
            key={"favorito-" + item.uid}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className="d-flex align-items-center px-2"
          >
            <Link className="dropdown-item flex-grow-1" to={`/${item.itemType}/${item.uid}`}>
              {item.name}
            </Link>
            {hoverIndex === index && (
              <button
                onClick={() => actions.eliminarFavoritos(item)}
                className="btn btn-link text-danger p-0 ms-2"
                style={{ cursor: "pointer" }}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            )}
          </li>
          ))
        ) : (
          <li className="dropdown-item disabled">(none)</li>
        )}
      </ul>
    </div>
  );
};

export const Navbar = () => {
  return (
    <nav className="navbar bg-danger p-2">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
              style={{ maxHeight: "50px" }}
            />
          </span>
        </Link>
        <div className="ml-auto">
          <FavoritosDropDown />
        </div>
      </div>
    </nav>
  );
};
