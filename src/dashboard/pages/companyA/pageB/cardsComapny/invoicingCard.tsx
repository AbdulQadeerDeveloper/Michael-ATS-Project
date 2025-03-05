import { Card, CardContent } from "@/components/ui/card";

export default function InvoicingCard() {
  return (
    <Card 
      className="p-2 rounded-xl border border-neutral-200 bg-white shadow-md"
      
    >
      <CardContent className="p-2">
        <h2 className="text-lg font-semibold">Invoicing</h2>

        <div className="grid grid-cols-2 gap-y-3">
          <div className="text-sm text-[#71747D]">Postal Address</div>
          <div>
            <p className="text-sm font-medium">Amstel 1</p>
            <p className="text-sm font-medium">1011 PN Amsterdam</p>
          </div>

          <div className="text-sm text-[#71747D]">Billing Address</div>
          <div>
            <p className="text-sm font-medium">Amstel 1</p>
            <p className="text-sm font-medium">1011 PN Amsterdam</p>
          </div>

          <div className="text-sm text-[#71747D]">Invoice Email</div>
          <div>
            <p className="text-sm font-medium">finance@company.com</p>
          </div>

          <div className="text-sm text-[#71747D]">VAT Number</div>
          <div>
            <p className="text-sm font-medium">NL12345678B01</p>
          </div>

          <div className="text-sm text-[#71747D]">
            Chamber of Commerce Number
          </div>
          <div>
            <p className="text-sm font-medium">1234567</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
