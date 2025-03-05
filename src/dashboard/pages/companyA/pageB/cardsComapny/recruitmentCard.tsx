import { Card, CardContent } from "@/components/ui/card";

export default function RecruitmentCard() {
  return (
    <Card
      className="rounded-xl border border-neutral-200 bg-white shadow-md"
      
    >
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold">Recruitment</h2>

        <div className="grid grid-cols-2 gap-y-3">
          <div className="text-sm text-[#71747D]">Recruitment Junior</div>
          <div className="text-sm font-medium text-right">18%</div>

          <div className="text-sm text-[#71747D]">
            Recruitment & Selection
          </div>
          <div className="text-sm font-medium text-right">25%</div>
        </div>
      </CardContent>
    </Card>
  );
}
