import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, CheckCircle, User2 } from "lucide-react";

interface MailItemProps {
  tag: string;
  title: string;
  date: string;
  user: string;
  status: string;
  color: string;
}

const MailItem = ({ tag, title, date, user, status, color }: MailItemProps) => {
  return (
    <div className="flex flex-col gap-1 border-b pb-4 last:border-none w-full">
      <Badge
        className={`w-[84px] text-[18px] mb-[13px] rounded-md bg-${color}-100 text-${color}-700 text-center`}
      >
        {tag}
      </Badge>
      <p className="text-sm font-semibold">{title}</p>
      <div className="flex justify-between text-xs text-gray-500">
        <span>{date}</span>
        <div className="flex items-center gap-2">
          <User2 size={14} /> {user}
          {status === "sent" ? (
            <CheckCircle size={14} className="text-green-500" />
          ) : (
            <Check size={14} />
          )}
        </div>
      </div>
    </div>
  );
};

const MailSentCard = () => {
  const mails = [
    {
      tag: "Cashcow",
      title: "Exciting Job Opportunity – Project Manager at Company A",
      date: "07 Jan 2025",
      user: "John Doe",
      status: "sent",
      color: "green",
    },
    {
      tag: "System",
      title: "Mail Subject",
      date: "07 Jan 2025",
      user: "John Doe",
      status: "pending",
      color: "gray",
    },
    {
      tag: "User",
      title: "Mail Subject",
      date: "07 Jan 2025",
      user: "John Doe",
      status: "pending",
      color: "pink",
    },
    {
      tag: "Invoice",
      title: "Mail Subject",
      date: "07 Jan 2025",
      user: "John Doe",
      status: "pending",
      color: "blue",
    },
  ];

  return (
    <Card className="rounded-xl w-full border p-4 bg-[#fff] mt-5 max-w-full lg:max-w-[100%]">
      <h3 className="text-lg font-semibold mb-4">Mail Sent</h3>
      <CardContent className="flex flex-col gap-4 overflow-y-auto">
        {mails.map((mail, index) => (
          <MailItem key={index} {...mail} />
        ))}
      </CardContent>
    </Card>
  );
};

export default MailSentCard;
