// Dashboard.jsx

import CompanyCard from "../companyCard";
import CardsRow from "../component";
import CompanyTable from "../dataContracts";
import { Sidebar } from "../sidebar";
import { Topbar } from "../topbar";



const DashboardC = () => {
  return (
    <div className="flex bg-[#F4F7FE] min-h-screen h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen h-full">
        <Topbar />
        <div className="flex-1 overflow-y-auto mb-4">
          <CompanyCard />
          <CardsRow />
          <CompanyTable />
        </div>
      </div>
    </div>
  );
};
export default DashboardC;
