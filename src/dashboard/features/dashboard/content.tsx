import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableHead, TableRow, TableHeader, TableCell, TableBody } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { ChevronDown, Filter } from 'lucide-react';
import { CiViewColumn } from 'react-icons/ci';
import { IoFilterSharp } from 'react-icons/io5';
import companyLogo from "../../../assets/Icon.png"
import { BiSortAlt2 } from "react-icons/bi";
import PaginationDesign from './header/paginationDesign.js';

const data = Array(10).fill({
  company: 'Company A',
  status: 'Key Account',
  contact: 'Steven Lambert',
  sector: 'Manufacturing',
  city: 'Amsterdam',
  phone: '0123 456 789',
  owner: 'John Doe'
});

export default function CompanyTable() {
  const headers = ['Companies Name', 'Status', 'Primary Contact', 'Sector', 'City', 'Phone Number', 'Owner'];

  return (
    <div className="m-[30px]">
      <Card className="p-4 shadow-md border border-gray-300 rounded-lg">
        <div className="mb-4 flex justify-between items-center flex-wrap gap-3">
          <div className="flex bg-gray-50 rounded-lg overflow-hidden">
            <Button variant="ghost" className="bg-white text-gray-700 font-semibold px-4 py-2">Active Companies</Button>
            <Button variant="ghost" className="text-gray-600 px-4 py-2">Leads & Prospects</Button>
            <Button variant="ghost" className="text-gray-600 px-4 py-2">Archived</Button>
          </div>

          <div className="flex gap-2">
            <Input placeholder="Search company..." className="w-72 border-gray-300" />
            <Button variant="outline" className="flex items-center gap-2">
              <IoFilterSharp className="text-gray-600" /> Filter
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <CiViewColumn className="text-gray-600" /> Columns <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {headers.map((header, index) => (
                  <DropdownMenuItem key={index}>{header}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="bg-[#D40B52] text-white">Add Company</Button>
          </div>
        </div>

        <CardContent>
          <Table>
            <TableHeader className="p-0 w-100">
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
                  <TableCell className="flex items-center gap-2">
                    <img src={companyLogo} alt="Company Logo" width={30} height={30} className="rounded-full" />
                    {item.company}
                  </TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>{item.contact}</TableCell>
                  <TableCell>{item.sector}</TableCell>
                  <TableCell>{item.city}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>{item.owner}</TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>

          <PaginationDesign/>
        </CardContent>
      </Card>
    </div>
  );
}
