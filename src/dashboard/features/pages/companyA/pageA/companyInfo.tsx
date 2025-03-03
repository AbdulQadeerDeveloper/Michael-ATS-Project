import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function CompanyInfo() {
  return (
    <div>
      <Card className="h-auto xl:h-[352px] w-full p-6 space-y-2 bg-[white]">
        <h2 className="text-lg font-semibold font-[Montserrat]">Company Information</h2>
        <div className="space-y-2">
          {[
            { label: "Company Name", value: "Company A" },
            { label: "Parent Company Name", value: "Company Z", link: true },
            { label: "Status", value: "Relation" },
            { label: "Sector", value: "Manufacturing" },
            { label: "Sub Sector", value: "Installation Otomotive" },
            { label: "Phone Number", value: "0123 456 789" },
            { label: "Email", value: "company@mail.com" },
            { label: "Website", value: "https://company.com" },
            { label: "Owner", value: "John Doe" },
          ].map((item, index) => (
            <div key={index} className="flex justify-between">
              <span className="text-sm text-[#71747D] font-[Montserrat]">{item.label}</span>
              {item.link ? (
                <a href="#" className="text-sm font-medium text-primary flex items-center gap-1 text-[#D40B52] font-[Montserrat]">
                  {item.value} <ExternalLink size={16} className="text-[#D40B52]" />
                </a>
              ) : (
                <span className="text-sm font-medium font-[Montserrat]">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
