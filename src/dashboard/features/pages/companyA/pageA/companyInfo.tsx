import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function CompanyInfo() {
  return (
    <Card className="w-[504px] rounded-xl border">
      <CardHeader>
        <CardTitle className="text-lg">Company Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-y-4 text-sm">
          <div className="text-muted-foreground">Company Name</div>
          <div className="font-medium">Company A</div>

          <div className="text-muted-foreground">Parent Company Name</div>
          <div className="flex items-center gap-1">
            Company Z
            <ExternalLink className="w-4 h-4 text-[#D40B52] cursor-pointer" />
          </div>

          <div className="text-muted-foreground">Status</div>
          <div className="font-medium">Relation</div>

          <div className="text-muted-foreground">Sector</div>
          <div className="font-medium">Manufacturing</div>

          <div className="text-muted-foreground">Sub Sector</div>
          <div className="font-medium">Installation Otomotive</div>

          <div className="text-muted-foreground">Phone Number</div>
          <div className="font-medium">0123 456 789</div>

          <div className="text-muted-foreground">Email</div>
          <div className="font-medium">company@mail.com</div>

          <div className="text-muted-foreground">Website</div>
          <div className="font-medium">
            <a href="https://company.com" target="_blank" className="text-blue-600 hover:underline">
              https://company.com
            </a>
          </div>

          <div className="text-muted-foreground">Owner</div>
          <div className="font-medium">John Doe</div>
        </div>
      </CardContent>
    </Card>
  );
}
