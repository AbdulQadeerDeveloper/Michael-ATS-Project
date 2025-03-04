// Dashboard.jsx

import CompanyTable from "./content";
import { Sidebar } from "./siderbar";
import { Topbar } from "./topbar";


const LeadsProspects = () => {
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
export default LeadsProspects;
