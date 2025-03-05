import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function PaginationDesign() {
  return (
    <div className="flex justify-between items-center w-full p-4 bg-white text-gray-700 border rounded-lg">
      <div className="flex items-center gap-2">
        <span>Show</span>
        <Select>
          <SelectTrigger className="w-[100px] bg-white text-gray-900 border">
            <SelectValue placeholder="100" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="25">25</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>
        <span>of 628 total entries</span>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" className="text-gray-500">
          &lt;
        </Button>
        <Button variant="secondary">1</Button>
        <Button variant="ghost" className="text-gray-500">
          2
        </Button>
        <Button variant="ghost" className="text-gray-500">
          3
        </Button>
        <span className="text-gray-500">...</span>
        <Button variant="ghost" className="text-gray-500">
          &gt;
        </Button>
      </div>
    </div>
  );
}
