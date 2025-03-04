// Dashboard.jsx

import CompanyTable from "./content";
import { Topbar } from "./header";
import { Sidebar } from "./sidebar";


const ActiveCompanies = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <CompanyTable />
      </div>
    </div>
  );
};
export default ActiveCompanies;
