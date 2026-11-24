import { useState, useEffect, useContext } from "react";
import { MainArea } from "./training_grounds/mainArea";
import { SideBar } from "./training_grounds/sideBar";
import { BottomArea } from "./training_grounds/bottomArea";
import "./App.css";
import LoadingScreen from "./training_grounds/LoadinScreen";

const App = () => {
  return (
    <div className="app">
      <main className="main-area">
        <MainArea />
      </main>
      <aside className="side-bar">
        <SideBar />
      </aside>
      <LoadingScreen />
      <footer className="bottom-area">
        <BottomArea />
      </footer>{" "}
    </div>
  );
};

export default App;
// <div className="app">
//   <Page>
//     <main className="main-area">
//       <MainArea />
//     </main>
//     <aside className="side-bar">
//       <SideBar />
//     </aside>
//     <footer className="bottom-area">
//       <BottomArea />
//     </footer>
//   </Page>
// </div>
// write a custom component to fetch data and push it into an arrey
// it should handle loading and fetching
// write a three part part app , side bar , main(pictures) , attributes(strings)
// they all come from the same url
