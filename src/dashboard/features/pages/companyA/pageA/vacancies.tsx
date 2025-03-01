import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

const vacancies = Array(10).fill({
  jobNumber: "#123456",
  position: "Project Leader",
  sector: "Architecture",
  employmentType: "Full time",
  recruitmentMethod: "Recruitment",
  owner: "John Doe",
});

export default function Vacancies() {
  return (
    <div className="w-[1336px] h-[534px] rounded-xl border bg-white shadow-sm">
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Vacancies</h2>
        <div className="flex items-center gap-4">
          <Input placeholder="Search vacancy..." className="w-60" />
          <Button variant="outline">Filter</Button>
          <Button variant="outline">Columns</Button>
          <Button className="bg-[#D40B52] text-white">Add Vacancy</Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {["Job Number", "Position", "Sector", "Employment Type", "Recruitment Method", "Owner"].map((header, i) => (
                <TableHead key={i} className="text-muted-foreground">
                  {header} ⬍
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {vacancies.map((vacancy, index) => (
              <TableRow key={index}>
                <TableCell className="text-[#D40B52]">{vacancy.jobNumber}</TableCell>
                <TableCell>{vacancy.position}</TableCell>
                <TableCell>{vacancy.sector}</TableCell>
                <TableCell>{vacancy.employmentType}</TableCell>
                <TableCell>{vacancy.recruitmentMethod}</TableCell>
                <TableCell>{vacancy.owner}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="p-4 flex justify-between items-center">
        <span className="text-sm text-muted-foreground">Show 10 of 62 total entries</span>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>3</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
