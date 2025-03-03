import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Mail, Phone } from "lucide-react";
import fisrtMen from "../../../../../assets/Ellipse.png";
import secondMen from "../../../../../assets/Ellipse (1).png";
import { Avatar } from "@/components/ui/avatar";

export default function ContactInfo() {
  return (
    <Card className="h-auto xl:h-[577px] rounded-xl border p-4 overflow-y-auto bg-[white]">
      <h2 className="text-lg font-semibold font-[Montserrat]">Contact</h2>
      <div className="space-y-4">
        {["Primary Contact", "Sign Authorizer", "Other Contact"].map((title, idx) => (
          <div key={idx}>
            <h3 className="text-sm font-medium mb-2 font-[Montserrat]">{title}</h3>
            {[...Array(1)].map((_, i) => (
              <div key={i} className="flex items-start gap-3">
                <Avatar className="w-10 h-10">
                  <img src={i === 0 ? fisrtMen : secondMen} alt="avatar" className="w-full h-full rounded-full" />
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="font-medium font-[Montserrat]">Steven Lambert</p>
                  <p className="text-sm text-muted-foreground font-[Montserrat]">HR Manager</p>
                  <div className="text-sm flex items-center gap-4 font-[Montserrat]">
                    <span className="flex items-center gap-2">
                      <Mail size={14} className="text-[#71747D]" /> slambert@mail.com
                    </span>
                    <span className="flex items-center gap-2">
                      <Phone size={14} className="text-[#71747D]" /> 0123 456 789
                    </span>
                  </div>
                </div>
                <ExternalLink className="cursor-pointer text-[#D40B52]" size={18} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
}


