import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/index";
import "./index.css";
import MicrosoftLogin from "./dashboard/auth/component/microsoftLogin/werkbronAtsLogin";
import Dashboard from "./dashboard/features/pages/companyA/pageA/mainPage/companyPage";
import CompanyCards from './dashboard/features/pages/companyA/pageB/cardsComapny/cardMain/CompanyCards';
import MainPageB from './dashboard/features/pages/companyA/pageB/mainComponent/card';
import DashboardPageB from './dashboard/features/pages/companyA/pageB/mainComponent/main';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Routes>
          <Route path="/" element={<MicrosoftLogin />} />
          <Route path="/dashboard" element={<DashboardPageB />} />
        </Routes>
      </Router>
    </PersistGate>
  </Provider>
);
