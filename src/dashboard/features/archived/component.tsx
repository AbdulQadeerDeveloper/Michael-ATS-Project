// Dashboard.jsx

import CompanyTable from "./content";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";



const Archived = () => {
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
export default Archived;
