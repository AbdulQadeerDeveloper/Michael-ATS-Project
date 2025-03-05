// Dashboard.jsx
import { Sidebar } from "@/shared/sidebar";
import CompanyCard from "./companyCard";
import CompanyProfileForm from "./container";
import { Topbar } from "@/shared/topbar";


const CompanyMailingPage = () => {
  return (
    <div className="flex bg-[#F4F7FE] min-h-screen h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen h-full">
        <Topbar />
        <div className="flex-1 overflow-y-auto mb-4">
          <CompanyCard />
          <CompanyProfileForm/>
         
        </div>
      </div>
    </div>
  );
};
export default CompanyMailingPage;
