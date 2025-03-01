import { Table, TableHeader, TableRow, TableHead } from "@/components/ui/table";

export default function TableHeaderComponent() {
  return (
    <div className="w-[1336px] h-[48px] bg-[#F4F7FE]">
      <Table>
        <TableHeader>
          <TableRow>
            {["Companies Name", "Status", "Primary Contact", "Sector", "City", "Phone Number", "Owner"].map(
              (item, index) => (
                <TableHead key={index} className="text-sm text-[#6B7280] font-medium">
                  {item} <span className="cursor-pointer">↑↓</span>
                </TableHead>
              )
            )}
          </TableRow>
        </TableHeader>
      </Table>
    </div>
  );
}
