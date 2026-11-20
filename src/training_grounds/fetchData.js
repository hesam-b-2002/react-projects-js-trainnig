import { useEffect, useState, useContext, createContext } from "react";

export const Data = ({}) => {
  const pokemon = {
    name: "",
    id: "https://pokeapi.co/api/v2/pokemon/1/",
  };
  const pokies = createContext(pokemon);

  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/`;
    let p = fetch(url).then((r) => r.json());
  }, []);
};
