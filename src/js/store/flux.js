const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      personas: [],
      vehiculos: [],
      planetas: [],
      favoritos: [],
      personaInfo: null,
      vehiculoInfo: null,
      planetaInfo: null,
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      loadPersonas: async () => {
        const resp = await fetch("https://www.swapi.tech/api/people/");
        const data = await resp.json();

        const personasConDetalles = await Promise.all(
          data.results.map(async (personaje) => {
            const detalleResp = await fetch(personaje.url);
            const detalleData = await detalleResp.json();
            return { ...personaje, properties: detalleData.result.properties };
          })
        );
        setStore({ personas: personasConDetalles });
      },
      loadVehiculos: async () => {
        const resp = await fetch("https://www.swapi.tech/api/vehicles/");
        const data = await resp.json();

        const vehiculosConDetalles = await Promise.all(
          data.results.map(async (transporte) => {
            const detalleResp = await fetch(transporte.url);
            const detalleData = await detalleResp.json();
            return { ...transporte, properties: detalleData.result.properties };
          })
        );
        setStore({ vehiculos: vehiculosConDetalles });
      },
      loadPlanetas: async () => {
        const resp = await fetch("https://www.swapi.tech/api/planets/");
        const data = await resp.json();
        
        const planetasConDetalles = await Promise.all(
          data.results.map(async (planet) => {
            const detalleResp = await fetch(planet.url);
            const detalleData = await detalleResp.json();
            return { ...planet, properties: detalleData.result.properties };
          })
        );
        setStore({ planetas: planetasConDetalles });
      },
      loadPersonaInfo: async (uid) => {
        const resp = await fetch(`https://www.swapi.tech/api/people/${uid}`);
        const data = await resp.json();
        setStore({ personaInfo: data.result });
      },
      loadVehiculoInfo: async (uid) => {
        const resp = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`);
        const data = await resp.json();
        setStore({ vehiculoInfo: data.result });
      },
      loadPlanetaInfo: async (uid) => {
        const resp = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
        const data = await resp.json();
        setStore({ planetaInfo: data.result });
      },
      agregarFavoritos: (itemName) => {
        const store = getStore();

        const itemExistente = store.favoritos.includes(itemName);

        if (!itemExistente) {
          setStore({ favoritos: [...store.favoritos, itemName] });
        }
      },
      eliminarFavoritos: (itemName) => {
        const store = getStore();

        const nuevosFavoritos = store.favoritos.filter(
          (item) => item != itemName
        );

        setStore({ favoritos: nuevosFavoritos });
      },
    },
  };
};

export default getState;
