import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { DarkModeContextProvider } from "./context/dark-mode-context";
import "./styles/main.scss";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.css";
import { LocalStorageProvider } from "./context/LocalStorageContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-bootstrap";
import { GatherContextProvider } from "./context/GatherContext";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <>
    <BrowserRouter>
      <GatherContextProvider>
        <LocalStorageProvider>
          <AuthContextProvider>
            <DarkModeContextProvider>
              <Provider store={store}>
                <App />
              </Provider>
            </DarkModeContextProvider>
          </AuthContextProvider>
        </LocalStorageProvider>
      </GatherContextProvider>
    </BrowserRouter>
    <ToastContainer />
  </>
);
