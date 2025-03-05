import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/index";
import "./index.css";
import AppRoutes from './routes/dashboardLayout';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRoutes/>
    </PersistGate>
  </Provider>
);
