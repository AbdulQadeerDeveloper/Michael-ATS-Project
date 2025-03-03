import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function Location() {
  return (
    <Card className="mt-5 w-full p-4 rounded-xl border h-auto xl:h-[200px] bg-[white]">
      <h2 className="text-lg font-semibold font-[Montserrat]">Location</h2>
      <div className="space-y-2">
        {[
          { label: "Headquarter", value: "" },
          { label: "Address", value: "Amstel 1\n1011 PN Amsterdam" },
          { label: "Location Rotterdam", value: "Stania 35" },
        ].map((item, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-sm text-muted-foreground font-[Montserrat]">{item.label}</span>
            <span className="text-sm font-medium font-[Montserrat]">{item.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
