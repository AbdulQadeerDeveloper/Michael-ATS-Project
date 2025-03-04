// header.tsx
import { Input } from "@/components/ui/input";
import { Bell } from "lucide-react";
import { IoMdLogOut } from "react-icons/io";
import companyLogo from "../../../assets/Hofstead-logo-zwart-1 1.png";
import buttonIcon from "../../../assets/Buttons (1).png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutMicrosoft } from "@/dashboard/auth/redux/actions/actionApis";


export const Topbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Get user from Redux store
  const { user } = useSelector((state: any) => state.auth.auth);
  console.log(user);

  const handleLogout = () => {
    dispatch(logoutMicrosoft()as any);
    navigate("/");
  };

  return (
    <div className="w-full bg-white shadow-md flex justify-between items-center px-6">
      <img src={companyLogo} width="200px" alt="Company Logo" />
      <Input placeholder="Search anything..." className="w-80 border rounded px-3 py-1" />
      <div className="flex items-center space-x-4">
        <img src={buttonIcon} width="40px" height="40px" alt="Plus" />
        <Bell size={20} />
        <div className="w-[40px] border border-[#D8DCE8] transform rotate-[-90deg]"></div>
        <span className="font-medium">{user?.name || "User"}</span>
        <button
          onClick={handleLogout}
          className="flex items-center justify-center w-[40px] h-[40px] bg-[#D40B52] text-white rounded-full hover:opacity-80 transition duration-300"
        >
          <IoMdLogOut size={25} />
        </button>
      </div>
    </div>
  );
};