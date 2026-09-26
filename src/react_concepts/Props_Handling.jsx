import { useEffect, useReducer, useState } from "react";
import { B } from "./children/react_props";

export const Display = ({ data, handleData, search }) => {
  return (
    <>
      {data.map(({ url, ...searchRes }) => (
        <B key={url} {...searchRes} />
      ))}
    
    </>
  );
};
