import { useMain } from "./Provider";
export const MainArea = () => {
  const main = useMain();
  return <h1>main area</h1>;
}; //this is just useContext (cleaned up version) , and how this components acess the context
