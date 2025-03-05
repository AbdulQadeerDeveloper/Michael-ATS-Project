import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../protectedRoute";
import LoginPage from "@/auth/component/microsoftLogin/werkbronAtsLogin";
import NotFoundPage from "@/shared/notFoundPage";
import ActiveCompanies from "@/dashboard/features/activeCompanies/mainDashboard";
import Archived from "@/dashboard/features/archived/component";
import LeadsProspects from "@/dashboard/features/leads&Prospects/component";
import CompanyGeneralPage from "@/dashboard/pages/companyA/pageA/mainPage/companyPage";
import CompanyPricingAgreementPage from "@/dashboard/pages/companyA/pageB/mainComponent/main";
import CompanyContractsPage from "@/dashboard/pages/companyA/pageC/main/comapny";
import CompanyMailingPage from "@/dashboard/pages/companyA/pageD/main";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<ProtectedRoute><ActiveCompanies /></ProtectedRoute>} />
        <Route path="/activeCompanies" element={<ProtectedRoute><ActiveCompanies /></ProtectedRoute>} />
        <Route path="/archived" element={<ProtectedRoute><Archived /></ProtectedRoute>} />
        <Route path="/leadsProspects" element={<ProtectedRoute><LeadsProspects /></ProtectedRoute>} />
        <Route path="/general" element={<ProtectedRoute><CompanyGeneralPage /></ProtectedRoute>} />
        <Route path="/price" element={<ProtectedRoute><CompanyPricingAgreementPage /></ProtectedRoute>} />
        <Route path="/contracts" element={<ProtectedRoute><CompanyContractsPage /></ProtectedRoute>} />
        <Route path="/mailing" element={<ProtectedRoute><CompanyMailingPage /></ProtectedRoute>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>

  );
};

export default AppRoutes;
