import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Briefcase, User, DollarSign, Mail, Settings, LucideContact } from "lucide-react";
import { BsCalculator } from "react-icons/bs";
import { IoMdBriefcase } from "react-icons/io";
import { HiOutlineViewGrid } from "react-icons/hi";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa6";
import { TbZoomScan } from "react-icons/tb";
import { LuContact } from "react-icons/lu";
import logo from "../../../assets/Logo.png";
import companyLogo from "../../../assets/Hofstead-logo-zwart-1 1.png";

export const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`bg-[#2B3759] text-white flex flex-col transition-all duration-300 h-auto ${expanded ? "w-[250px]" : "w-[40px]"}`}
      style={{ width: expanded ? "266px" : "56px" }}
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
        <SidebarItem to="/dashboard" icon={<HiOutlineViewGrid size={20} />} text="Dashboard" expanded={expanded} />
        <SidebarItem to="/leadsProspects" icon={<BsCalculator size={20} />} text="Company" expanded={expanded} />
        <SidebarItem to="/contact" icon={<LuContact size={20} />} text="Contact" expanded={expanded} />

        <SidebarItem to="/vacancy" icon={<IoMdBriefcase size={20} />} text="Vacancy" expanded={expanded} />
        <SidebarItem to="/candidate" icon={<User size={20} />} text="Candidate" expanded={expanded} />
        <SidebarItem to="/cashcow" icon={<FaHandshakeSimple size={20} />} text="Cashcow" expanded={expanded} />
        <SidebarItem to="/invoice" icon={<DollarSign size={20} />} text="Invoice" expanded={expanded} />
        <SidebarItem to="/mailing" icon={<Mail size={20} />} text="Mailing" expanded={expanded} />
        <SidebarItem to="/calendar" icon={<FaCalendar size={20} />} text="Calendar" expanded={expanded} />
        <SidebarItem to="/job-scraper" icon={<TbZoomScan size={20} />} text="Job Scraper" expanded={expanded} />
      </nav>

      {/* Divider Line before Settings */}
      <div className="w-full border-b border-gray-500 my-4"></div>

      {/* Settings Button */}
      <SidebarItem to="/settings" icon={<Settings size={20} />} text="Settings" expanded={expanded} />
    </div>
  );
};

const SidebarItem = ({ to, icon, text, expanded }) => {
  return (
    <NavLink to={to} className={({ isActive }) =>
      `flex items-center w-full text-white transition-all duration-300 ${
        isActive ? "bg-[#4E5976] px-4 py-4 rounded-md" : "p-2"
      } ${expanded ? "justify-start pl-4" : "justify-center"}`
    }>
      {icon}
      {expanded && <span className="ml-3">{text}</span>}
    </NavLink>
  );
};
