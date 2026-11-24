import { createContext, useContext, useEffect, useState } from "react";
export const MainProvider = createContext(null);
export const SideProvider = createContext(null);
export const BottomProvider = createContext(null);
export const MainContext = (children) => {
  const [data, setData] = useState();
  useEffect(() => {
    const getAsyncData = async () => {
      let response = await (await fetch()).json();
      setData(response.results);
    };
    getAsyncData();
  }, []);
  return <MainProvider value={data}>{children}</MainProvider>;
};
export const useMain = () => useContext(MainProvider);
export const SideContext = (children) => {
  const [data, setData] = useState();
  useEffect(() => {
    const getAsyncData = async () => {
      let response = await (await fetch()).json();
      setData(response.results);
    };
    getAsyncData();
  }, []);
  return <SideProvider value={data}>{children}</SideProvider>;
};
export const useSide = () => useContext(SideProvider);
export const BottomContext = (children) => {
  const [data, setData] = useState();
  useEffect(() => {
    const getAsyncData = async () => {
      let response = await (await fetch()).json();
      setData(response.results);
    };
    getAsyncData();
  }, []);
  return <BottomContext value={data}>{children}</BottomContext>;
};
export const useBottom = () => useContext(BottomProvider);
// the idea is , first : u pass the (side,main,bottom) as children in ur app component ,
// then u pass the whole app as a children to this ptoviders ,
// so re-rendering the indivisual providers after after inavitable context change children wont re-render(passing react-elements as props pattern)
// the second idea is abstracting fetch ligic from ur app , without context
// u have to define multiple callBacks
// (lifting the state up pattern) which hurt ur code readability
