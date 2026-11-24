import { useEffect, useState } from "react";
import { SideBar } from "./training_grounds/sideBar";
import { MainArea } from "./training_grounds/mainArea";
const delay = (value, ms) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(value);
    }, ms),
  );
const App = () => {
  const [main, setMain] = useState("");
  const [side, setSide] = useState("");
  const [bottom, setBottom] = useState("");
  useEffect(() => {
    async function getAsyncData() {
      const results = await Promise.all([
        delay("main", 1000),
        delay("side", 2000),
        delay("bottom", 3000),
      ]);
      const [mainContent, sideContent, bottomContent] = results;
      setMain(mainContent);
      setSide(sideContent);
      setBottom(bottomContent);
    }
    getAsyncData();
  }, []);
  return (
    <>
      <SideBar side={side} />
      <MainArea main={main} bottom={bottom} />
    </>
  );
};
export default App;
// completion time of the request  , is the time of the slowest request
// react batches all of them into one re-render , so once the slowest request is resolved app rerenders
// the problem is , if even one request failes the promise all rejects
// one re-render of the the state re-renders the whole app
// this is all or nothing kind of request which means even if two requests complete , they still have to wait for the other one the resolve
