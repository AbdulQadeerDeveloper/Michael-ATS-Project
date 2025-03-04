import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pencil, Trash } from "lucide-react";
import icon from "../../../../../assets/Icon.png";
import { useNavigate } from "react-router-dom";

export default function CompanyCard() {
  const navigate = useNavigate();

  const handleTabClick = (value: string) => {
    switch (value) {
      case "general":
        navigate("/general");
        break;
      case "pricing":
        navigate("/price");
        break;
      case "contracts":
        navigate("/contracts");
        break;
      case "mailing":
        navigate("/mailing");
        break;
      case "files":
        navigate("/dashboard");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <Card className="w-full rounded-lg shadow-sm border">
      <CardContent className="p-4 flex rounded-lg items-left justify-between bg-[white]">
        <div className="flex items-center gap-4">
          <img
            src={icon}
            alt="Company Logo"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold">Company A</h2>
            <p className="text-sm text-gray-500">Relation</p>
          </div>
        </div>
        <div className="flex items-left gap-2 mt-3">
          <Pencil className="w-5 h-5 text-gray-500 cursor-pointer hover:text-blue-500" />
          <Trash className="w-5 h-5 text-gray-500 cursor-pointer hover:text-red-500" />
        </div>
      </CardContent>
      <Tabs defaultValue="general" className="border-t">
        <TabsList className="flex space-x-2 p-2 bg-gray-100 w-full">
          <div className="flex space-x-2">
            {["general", "pricing", "contracts", "mailing", "files"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                onClick={() => handleTabClick(tab)}
                className="data-[state=active]:bg-white text-[#303135] text-sm relative bottom-[4px]"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </div>
        </TabsList>
      </Tabs>
    </Card>
  );
}
