import { useEffect, useState } from "react";
import { ChildrenArrey } from "./childrenFetch";

export const Data = ({ dataHandler }) => {
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon`)
      .then((r) => r.json())
      .then((r) => dataHandler(r.results));
  }, []);
};
