import { useState, useEffect } from "react";

export const Data = ({ onData }) => {
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then((results) => results.json())
      .then((data) => onData(data.results));
  });
};
