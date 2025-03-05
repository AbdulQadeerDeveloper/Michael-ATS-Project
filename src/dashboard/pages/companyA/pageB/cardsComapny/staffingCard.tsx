import { Card, CardContent } from "@/components/ui/card";

export default function StaffingCard() {
  return (
    <Card className="rounded-xl border border-neutral-200 bg-white shadow-md">
      <CardContent className="p-4 space-y-4">
        <h2 className="text-lg font-semibold">Staffing</h2>

        <div className="grid grid-cols-2 gap-y-3">
          <div className="text-sm text-[#71747D]">Free to Take Over</div>
          <div className="text-sm font-medium text-right">1080</div>

          <div className="text-sm text-[#71747D]">Staffing Factor</div>
          <div className="text-sm font-medium text-right">2.3</div>

          <div className="text-sm text-[#71747D]">Nonstandard Hours</div>
          <div className="text-sm font-medium text-right">1.9</div>

          <div className="text-sm text-[#71747D]">
            Post Contract Renewal Factor
          </div>
          <div className="text-sm font-medium text-right">2.1</div>
        </div>
      </CardContent>
    </Card>
  );
}
