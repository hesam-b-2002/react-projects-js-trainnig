import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  MainProvider,
  SideProvider,
  BottomProvider,
} from "./training_grounds/Provider.jsx";
createRoot(document.getElementById("root")).render(
  <MainProvider>
    <SideProvider>
      <BottomProvider>
        <App />
      </BottomProvider>
    </SideProvider>
  </MainProvider>,
);
