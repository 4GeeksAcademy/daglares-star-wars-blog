const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}				
			],
			personas: [],
			vehiculos: [],
			planetas: []
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
			loadPersonas: async ()=> {
				const resp = await fetch("https://www.swapi.tech/api/people/")
				const data = await resp.json()
				setStore({ personas: data.results });
			},
			loadVehiculos: async ()=> {
				const resp = await fetch("https://www.swapi.tech/api/vehicles/")
				const data = await resp.json()
				setStore({ vehiculos: data.results });
			},
			loadPlanetas: async ()=> {
				const resp = await fetch("https://www.swapi.tech/api/planets/")
				const data = await resp.json()
				setStore({ planetas: data.results });
			}
		}
	};
};

export default getState;
