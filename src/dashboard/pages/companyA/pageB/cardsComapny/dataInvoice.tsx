import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableHead, TableRow, TableHeader, TableCell, TableBody } from '@/components/ui/table';
import { BiSortAlt2 } from "react-icons/bi";
import { BiLinkExternal } from "react-icons/bi";
import PaginationDesign from './pagination';

const data = Array(14).fill({
    InvoiceNumber: '#123456',
    InvoiceTitle: 'Invoice_002',
    Amount: '€1,234',
    IssueDate: '07 Jan 2025',
    DueDate: '10 Jan 2025',
    Status: 'Unpaid',
});

export default function CompanyTable() {
    const headers = ['Invoice Number', 'Invoice Title', 'Amount', 'Issue Date', 'Due Date', 'Status'];

    return (
        <div>
            <Card className="p-4 h-100% shadow-md border border-gray-300 rounded-lg bg-white">
                <div className="mb-4 flex justify-between items-center flex-wrap gap-3">
                    <div className="flex rounded-lg overflow-hidden">
                        <Button variant="ghost" className="bg-white text-black font-semibold px-4 py-2">Invoice</Button>
                    </div>

                    <div className="flex gap-2">
                        <Input placeholder="Search invoice..." className="w-72 border-gray-300" />
                        <Button className="bg-[#D40B52] text-white">Add Invoice</Button>
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
                                    <TableCell className="text-red-600 cursor-pointer">{item.InvoiceNumber}</TableCell>
                                    <TableCell>
                                        {item.InvoiceTitle} <BiLinkExternal className="inline ml-1 cursor-pointer text-sm text-red-600" />
                                    </TableCell>
                                    <TableCell>{item.Amount}</TableCell>
                                    <TableCell>{item.IssueDate}</TableCell>
                                    <TableCell>{item.DueDate}</TableCell>
                                    <TableCell>
                                        <span className={`px-2 py-1 rounded text-xs ${item.Status === 'Paid' ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
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