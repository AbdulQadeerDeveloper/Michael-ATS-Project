import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/index";
import "./index.css";
import LoginPage from './dashboard/auth/component/microsoftLogin/werkbronAtsLogin';
import ActiveCompanies from './dashboard/features/activeCompanies/mainDashboard';
import DashboardA from './dashboard/features/pages/companyA/pageA/mainPage/companyPage';
import DashboardB from './dashboard/features/pages/companyA/pageB/mainComponent/main';
import LeadsProspects from './dashboard/features/leads&Prospects/component';
import Archived from './dashboard/features/archived/component';
import CardsRow from './dashboard/features/pages/companyA/pageC/component';
import DashboardC from './dashboard/features/pages/companyA/pageC/main/comapny';
import DashboardD from './dashboard/features/pages/companyA/pageD/main';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/activeCompanies" element={<ActiveCompanies />} />
          <Route path="/leadsProspects" element={<LeadsProspects />} />
          <Route path="/archived" element={<Archived />} />
          <Route path="/general" element={<DashboardA />} />
          <Route path="/price" element={<DashboardB />} />
          <Route path="/contracts" element={<DashboardC />} />
          <Route path="/mailing" element={<DashboardD />} />
          <Route path="/dashboard" element={<DashboardD />} />


        </Routes>
      </Router>
    </PersistGate>
  </Provider>
);
