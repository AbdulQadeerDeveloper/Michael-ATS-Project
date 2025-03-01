// Dashboard.jsx

import { Topbar } from "@/dashboard/features/dashboard/header/header";
import { Sidebar } from "@/dashboard/features/dashboard/sidebar/sidebar";

import CompanyCard from "../companyCard";
import MenuBar from "../menubar";
import SentEmail from "../sentEmail";
import CompanyInfo from "../companyInfo";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <CompanyCard/>
        <MenuBar/>
        <SentEmail/>
        <CompanyInfo/>
      
      </div>
    </div>
  );
};
export default Dashboard;
