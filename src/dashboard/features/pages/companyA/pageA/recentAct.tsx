import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  {
    date: "Today",
    logs: [
      {
        text: "John Doe change the status into Relation",
        time: "12:48",
      },
    ],
  },
  {
    date: "Yesterday",
    logs: [
      {
        text: "John Doe change the status into Ex-Client because contract not renewed",
        time: "21:43",
      },
      {
        text: "John Doe created the company",
        time: "12:48",
      },
    ],
  },
];

export default function RecentActivity() {
  return (
    <Card className="w-[360px] h-[577px] rounded-xl border overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-lg">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        {activities.map((activity, index) => (
          <div key={index} className="mb-6">
            <h3 className="font-semibold mb-2">{activity.date}</h3>
            {activity.logs.map((log, i) => (
              <div key={i} className="mb-4">
                <p className="text-sm">{log.text}</p>
                <p className="text-xs text-muted-foreground">{log.time}</p>
              </div>
            ))}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
