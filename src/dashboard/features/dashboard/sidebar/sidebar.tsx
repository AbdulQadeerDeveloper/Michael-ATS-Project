import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Briefcase, User, DollarSign, Mail, Settings } from "lucide-react";
import { BsCalculator } from "react-icons/bs";
import { IoMdBriefcase } from "react-icons/io";
import { HiOutlineViewGrid } from "react-icons/hi";
import { FaHandshakeSimple } from "react-icons/fa6";
import { TbZoomScan } from "react-icons/tb";
import logo from "../../../../assets/Logo.png";
import companyLogo from "../../../../assets/Hofstead-logo-zwart-1 1.png";

export const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setExpanded(true); // Expand sidebar when any tab is clicked
  };

  return (
    <div
      className={`bg-[#2B3759] text-white flex flex-col transition-all duration-300`}
      style={{ width: expanded ? "250px" : "56px"}}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Logo */}
      <div className={`flex ${expanded ? "justify-start pl-0" : "justify-center"} items-center w-full my-4`}>
        <img
          src={expanded ? companyLogo : logo}
          width={expanded ? "230px" : "40px"}
          height={expanded ? "32px" : "40px"}
          alt="companyLogo"
          className="transition-all duration-300"
        />
      </div>

      {/* Divider Line */}
      <div className="w-full border-b border-gray-500 mb-4"></div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-1 flex-grow w-full">
        <SidebarItem icon={<HiOutlineViewGrid size={20} />} text="Dashboard" expanded={expanded} activeTab={activeTab} setActiveTab={handleTabClick} />
        <SidebarItem icon={<BsCalculator size={20} />} text="Company" expanded={expanded} activeTab={activeTab} setActiveTab={handleTabClick} />
        <SidebarItem icon={<Calendar size={20} />} text="Calendar" expanded={expanded} activeTab={activeTab} setActiveTab={handleTabClick} />
        <SidebarItem icon={<IoMdBriefcase size={20} />} text="Vacancy" expanded={expanded} activeTab={activeTab} setActiveTab={handleTabClick} />
        <SidebarItem icon={<User size={20} />} text="Candidate" expanded={expanded} activeTab={activeTab} setActiveTab={handleTabClick} />
        <SidebarItem icon={<FaHandshakeSimple size={20} />} text="Cashcow" expanded={expanded} activeTab={activeTab} setActiveTab={handleTabClick} />
        <SidebarItem icon={<DollarSign size={20} />} text="Invoice" expanded={expanded} activeTab={activeTab} setActiveTab={handleTabClick} />
        <SidebarItem icon={<Mail size={20} />} text="Mailing" expanded={expanded} activeTab={activeTab} setActiveTab={handleTabClick} />
        <SidebarItem icon={<TbZoomScan size={20} />} text="Job Scraper" expanded={expanded} activeTab={activeTab} setActiveTab={handleTabClick} />
      </nav>

      {/* Divider Line before Settings */}
      <div className="w-full border-b border-gray-500 my-4"></div>

      {/* Settings Button */}
      <SidebarItem icon={<Settings size={20} />} text="Settings" expanded={expanded} activeTab={activeTab} setActiveTab={handleTabClick}  />
    </div>
  );
};

const SidebarItem = ({ icon, text, expanded, activeTab, setActiveTab }) => {
  const isActive = activeTab === text;

  return (
    <Button
      variant="ghost"
      className={`flex items-center w-full text-white transition-all duration-300 ${
        isActive ? "bg-[#4E5976] px-4 py-4 rounded-md" : "p-2"
      } ${expanded ? "justify-start pl-4" : "justify-center"}`}
      onClick={() => setActiveTab(text)}
    >
      {icon}
      {expanded && <span className="ml-3">{text}</span>}
    </Button>
  );
};
