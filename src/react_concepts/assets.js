import { useState, useEffect } from "react";

export const Data = ({ handleData }) => {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.json())
    .then((value) => handleData(value));
};
