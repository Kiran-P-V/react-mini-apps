import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CssBaseline } from "@mui/material";
import { persistor, store } from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline>
      <Provider store={store}>
        <PersistGate
          // loading={<Loading />}
          // onBeforeLift={onBeforeLift}
          persistor={persistor}
        >
          <App />
        </PersistGate>
      </Provider>
    </CssBaseline>
  </React.StrictMode>
);
