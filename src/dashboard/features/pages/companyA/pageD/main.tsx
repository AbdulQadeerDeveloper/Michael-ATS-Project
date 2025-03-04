// Dashboard.jsx

import CompanyCard from "./companyCard";
import CompanyProfileForm from "./container";
import Container from "./container";
import MailEditor from "./mail";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";


const DashboardD = () => {
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
export default DashboardD;
