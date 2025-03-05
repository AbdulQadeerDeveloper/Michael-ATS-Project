import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableHead, TableRow, TableHeader, TableCell, TableBody } from '@/components/ui/table';
import { BiSortAlt2 } from "react-icons/bi";
import { BiLinkExternal } from "react-icons/bi";
import PaginationDesign from './pagination';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { IoFilterSharp } from 'react-icons/io5';
import { CiViewColumn } from 'react-icons/ci';
import { FileText, ExternalLink } from 'lucide-react';

const data = Array(14).fill({
    DocumentName: 'document1.pdf',
    Contract: 'XYZ Agreement',
    Sender: 'John Doe',
    Receiver: 'Steven Lambert',
    Date: '07 Jan 2025',
    Status: 'Signed',
});

export default function CompanyTable() {
    const headers = ['Document Name', 'Contract', 'Sender', 'Receiver', 'Date', 'Status'];

    return (
        <div>
            <Card className="p-4 h-100% mr-5 ml-5 shadow-md border border-gray-300 rounded-lg bg-white z-index-100">
                <div className="mb-4 flex justify-between items-center flex-wrap gap-3">
                    <div className="flex rounded-lg overflow-hidden">
                        <Button variant="ghost" className="bg-white text-black font-semibold px-4 py-2">Contracts Sent</Button>
                    </div>
                    <div className="flex gap-2">
                        <Input placeholder="Search contract..." className="w-72 border-gray-300" />
                        <Button variant="outline" className="flex items-center gap-2">
                            <IoFilterSharp className="text-gray-600" /> Filter
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="flex items-center gap-2">
                                    <CiViewColumn className="text-gray-600" /> Columns <ChevronDown size={16} />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-[#fff]">
                                {headers.map((header, index) => (
                                    <DropdownMenuItem key={index} className="hover:bg-white hover:text-black cursor-pointer">{header}</DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
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
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <FileText className="text-[#D40B52]" size={20} />
                                            <span className="text-sm">{item.DocumentName}</span>
                                            <ExternalLink className="text-[#D40B52] cursor-pointer" size={18} />
                                        </div>
                                        
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex justify-between items-center py-2">
                                            <div className="flex items-center gap-2">
                                                <FileText className="text-[#D40B52]" size={20} />
                                                <span className="text-sm">{item.Contract}</span>
                                                <ExternalLink className="text-[#D40B52] cursor-pointer" size={18} />
                                            </div>
                                            
                                        </div>
                                    </TableCell>
                                    <TableCell>{item.Sender}</TableCell>
                                    <TableCell>{item.Receiver}</TableCell>
                                    <TableCell>{item.Date}</TableCell>
                                    <TableCell>
                                        <span className={`px-2 py-1 rounded text-xs ${item.Status === 'Signed' ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
                                            {item.Status}
                                        </span>
                                    </TableCell>
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
