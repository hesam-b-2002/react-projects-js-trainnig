import { useEffect, useState } from "react"
import { ChildrenArrey } from "./childrenFetch";

export const Data = ({ dataHandler }) => {
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon`)
      .then((res) => res.json())
      .then((arr) => dataHandler(arr.results));
  }, []);

};