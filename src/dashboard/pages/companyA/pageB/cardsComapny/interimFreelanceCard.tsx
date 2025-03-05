import { Card, CardContent } from "@/components/ui/card";

export default function InterimFreelanceCard() {
  return (
    <Card
      className="rounded-xl border border-neutral-200 bg-white shadow-md"
      
    >
      <CardContent className="p-6 space-y-4">
        <h2 className="text-lg font-semibold">Interim & Freelance</h2>

        <div className="grid grid-cols-2 gap-y-2">
          <div className="text-sm text-[#71747D]">ZZP Rate</div>
          <div className="text-sm font-medium text-right">€8,50</div>

          <div className="text-sm text-[#71747D]">Interim Rate</div>
          <div className="text-sm font-medium text-right">€25</div>
        </div>
      </CardContent>
    </Card>
  );
}
