import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const locations = [
  {
    title: "Headquarter",
    address: ["Amstel 1", "1011 PN Amsterdam"],
  },
  {
    title: "Location Rotterdam",
    address: ["Stania 35"],
  },
];

export default function Location() {
  return (
    <Card className="w-[500px] h-[155px] rounded-xl border overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-lg">Location</CardTitle>
      </CardHeader>
      <CardContent>
        {locations.map((location, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold">{location.title}</h3>
            {location.address.map((line, i) => (
              <p
                key={i}
                className={`text-sm ${
                  i === 0 ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {line}
              </p>
            ))}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
