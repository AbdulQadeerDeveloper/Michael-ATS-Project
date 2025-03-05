// Dashboard.jsx
import { Sidebar } from "@/shared/sidebar";
import CompanyTable from "./content";
import { Topbar } from "@/shared/topbar";

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
