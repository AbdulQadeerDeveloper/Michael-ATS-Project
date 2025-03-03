import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableHead, TableRow, TableHeader, TableCell, TableBody } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { CiViewColumn } from 'react-icons/ci';
import { IoFilterSharp } from 'react-icons/io5';
import { BiSortAlt2 } from "react-icons/bi";
import PaginationDesign from './pagination';

const data = Array(10).fill({
  JobNumber: '#123456',
  Position: 'Project Leader',
  Sector: 'Architecture',
  EmploymentType: 'Full time',
  RecruitmentMethod: 'Recruitment',
  Owner: 'John Doe',
});

export default function CompanyTable() {
  const headers = ['Job Number', 'Position', 'Sector', 'Employment Type', 'Recruitment Method', 'Owner'];

  return (
    <div className="mt-20px w-[97%] mr-2 ml-4">
      <Card className="p-4 shadow-md border border-gray-300 rounded-lg bg-[white]">
        <div className="mb-4 flex justify-between items-center flex-wrap gap-3">
          <div className="flex  rounded-lg overflow-hidden">
            <Button variant="ghost" className="bg-white text-black font-semibold px-4 py-2">Vacancies</Button>
          </div>

          <div className="flex gap-2">
            <Input placeholder="Search vacancy..." className="w-72 border-gray-300" />
            <Button variant="outline" className="flex items-center gap-2">
              <IoFilterSharp className="text-gray-600" /> Filter
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <CiViewColumn className="text-gray-600" /> Columns <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#F4F7FE]">
                {headers.map((header, index) => (
                  <DropdownMenuItem key={index} className="hover:bg-white hover:text-black cursor-pointer">{header}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="bg-[#D40B52] text-white">Add Vacancy</Button>
          </div>
        </div>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F4F7FE]">
                {headers.map((header, index) => (
                  <TableHead key={index} className="text-gray-600 text-sm">
                    {header} <BiSortAlt2 size={14} className="inline ml-1 cursor-pointer" />
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index} className="hover:bg-gray-100">
                  <TableCell className="text-red-600 cursor-pointer">{item.JobNumber}</TableCell>
                  <TableCell>{item.Position}</TableCell>
                  <TableCell>{item.Sector}</TableCell>
                  <TableCell>{item.EmploymentType}</TableCell>
                  <TableCell>{item.RecruitmentMethod}</TableCell>
                  <TableCell>{item.Owner}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <PaginationDesign />
        </CardContent>
      </Card>
    </div>
  );
}
