import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { X, Rocket } from "lucide-react";
import { Mail, Phone, ExternalLink } from "lucide-react";

export default function SentEmail() {
  return (
    <Alert className="bg-[#FDE7EE] text-[#D40B52] border-[#D40B52] min-h-[64px] max-h-[64px] rounded-lg flex items-center justify-between gap-4 px-4 py-3 w-[97%] m-auto">
      <div className="flex items-center gap-4">
        <Rocket className="w-5 h-5" />
        <div>
          <AlertTitle className="font-bold">This company is new!</AlertTitle>
          <AlertDescription className="text-sm text-[#D40B52]">
            Send them a welcoming email to their primary contact.
          </AlertDescription>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button className="bg-[#D40B52] hover:bg-[#B30945] text-white rounded-md">
          Send Mail
        </Button>
        <X className="w-5 h-5 cursor-pointer text-[#D40B52] hover:text-[#B30945]" />
      </div>
    </Alert>
  );
}
