import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RecentActivity() {
  return (
    <Card className="h-auto xl:h-[577px] rounded-xl border p-4 overflow-y-auto bg-[white]">
      <h2 className="text-lg font-semibold font-[Montserrat]">Recent Activity</h2>
      <div className="space-y-4">
        {["Today", "Yesterday"].map((day, idx) => (
          <div key={idx}>
            <h3 className="text-sm font-medium mb-2 font-[Montserrat]">{day}</h3>
            {["John Doe change the status into Relation"].map((activity, i) => (
              <div key={i} className="space-y-1">
                <p className="text-sm font-[Montserrat]">{activity}</p>
                <span className="block text-xs text-#71747D font-[Montserrat]">12:48</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
}
