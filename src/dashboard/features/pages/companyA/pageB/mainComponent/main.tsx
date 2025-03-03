// Dashboard.jsx

import { Topbar } from "@/dashboard/features/dashboard/header/header";
import { Sidebar } from "@/dashboard/features/dashboard/sidebar/sidebar";
import CompanyCard from "../../pageA/companyCard";
import MainPageB from "./card";

const DashboardB = () => {
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
export default DashboardB;
