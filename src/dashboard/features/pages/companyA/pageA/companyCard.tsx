import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pencil, Trash } from "lucide-react";
import icon from "../../../../../assets/Icon.png";

export default function CompanyCard() {
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
            <TabsTrigger value="general" className="data-[state=active]:bg-white text-[#303135] text-sm relative bottom-[4px]">General</TabsTrigger>
            <TabsTrigger value="pricing" className="data-[state=active]:bg-white text-[#303135] text-sm relative bottom-[4px]">Pricing Agreement</TabsTrigger>
            <TabsTrigger value="contracts" className="data-[state=active]:bg-white text-[#303135] text-sm relative bottom-[4px]">Contracts</TabsTrigger>
            <TabsTrigger value="mailing" className="data-[state=active]:bg-white text-[#303135] text-sm relative bottom-[4px]">Mailing</TabsTrigger>
            <TabsTrigger value="files" className="data-[state=active]:bg-white text-[#303135] text-sm relative bottom-[4px]">Files</TabsTrigger>
          </div>
        </TabsList>
      </Tabs>
    </Card>
  );
}
