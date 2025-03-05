// Dashboard.jsx
import { Sidebar } from "@/shared/sidebar";
import CompanyCard from "../../pageA/companyCard";
import MainPageB from "./card";
import { Topbar } from "@/shared/topbar";

const CompanyPricingAgreementPage = () => {
  return (
    <div className="flex bg-[#F4F7FE] min-h-screen h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen h-full">
        <Topbar />
        <div className="flex-1 overflow-y-auto mb-4">
          <CompanyCard/>
          <MainPageB/>
        </div>
      </div>
    </div>
  );
};
export default CompanyPricingAgreementPage;
