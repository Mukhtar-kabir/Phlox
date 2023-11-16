import React from "react";
import ReactDOM from "react-dom/client";
// import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
// import RootReducer from "./redux/RootRuducer";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import { app } from "./firebase.config";

// const store = configureStore({
//   reducer: RootReducer,
//   // Add middleware or other configurations if needed
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store} app={app}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
