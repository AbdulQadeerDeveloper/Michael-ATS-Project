// Dashboard.jsx
import CompanyTable from "./content";
import { Topbar } from "./header/header";
import { Sidebar } from "./sidebar/sidebar";


const Dashboard = () => {
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
export default Dashboard;
