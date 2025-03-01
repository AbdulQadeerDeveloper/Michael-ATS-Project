import { Card, CardContent } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pencil, Trash2 } from "lucide-react";
import icon from "../../../../../assets/Icon.png"
export default function CompanyCard() {
  return (
    <Card className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
       <img src={icon} width="40px"/>
        <div>
          <h4 className="text-base font-semibold text-black">Company A</h4>
          <p className="text-sm text-muted-foreground">Relation</p>
        </div>
      </div>
      <div className="flex gap-2">
        <Pencil className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-black" />
        <Trash2 className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-black" />
      </div>
    </Card>
  );
}
