// Dashboard.jsx
import CompanyCard from "../companyCard";
import SentEmail from "../sentEmail";
import CompanyCards from "./allCards";
import CompanyTable from "../vacancies";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";


const DashboardA = () => {
  return (
    <div className="flex bg-[#F4F7FE]">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <CompanyCard/>
        <SentEmail/>
        <CompanyCards/>
        <CompanyTable/>
      
      </div>
    </div>
  );
};
export default DashboardA;
