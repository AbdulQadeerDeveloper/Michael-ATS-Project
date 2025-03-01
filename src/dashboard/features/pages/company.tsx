import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '@/components/ui/table';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from "@/components/ui/badge"
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function VacancyDashboard() {
  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Vacancies</CardTitle>
          <div className="flex justify-between items-center">
            <input
              type="search"
              placeholder="Search vacancy..."
              className="border rounded p-2"
            />
            <div className="flex space-x-2">
              <Button variant="outline">Filter</Button>
              <Button variant="outline">Columns</Button>
              <Button className="bg-red-600 text-white">Add Vacancy</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job Number</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Sector</TableHead>
                <TableHead>Employment Type</TableHead>
                <TableHead>Recruitment Method</TableHead>
                <TableHead>Owner</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array(5).fill('').map((_, i) => (
                <TableRow key={i}>
                  <TableCell className="text-red-600">#123456</TableCell>
                  <TableCell>Project Leader</TableCell>
                  <TableCell>Architecture</TableCell>
                  <TableCell>Full time</TableCell>
                  <TableCell>Recruitment</TableCell>
                  <TableCell>John Doe</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Company Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>Company Name: Company A</div>
            <div>Parent Company Name: <a href="#" className="text-red-600">Company Z</a></div>
            <div>Status: Relation</div>
            <div>Sector: Manufacturing</div>
            <div>Phone Number: 0123 456 789</div>
            <div>Email: company@mail.com</div>
            <div>Website: https://company.com</div>
            <div>Owner: John Doe</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Location</CardTitle>
        </CardHeader>
        <CardContent>
          <div>Headquarter: Amstel 1, 1011 PN Amsterdam</div>
          <div>Location Rotterdam: Stania 35</div>
        </CardContent>
      </Card>

      <Alert className="bg-red-100 text-red-600">
        <AlertTitle>This company is new!</AlertTitle>
        <AlertDescription>Send them a welcoming email to their primary contact.</AlertDescription>
        <Button className="bg-red-600 text-white">Send Mail</Button>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-60">
            <div>Today</div>
            <div>John Doe change the status into Relation at 12:48</div>
            <div>Yesterday</div>
            <div>John Doe change the status into Ex-Client because contract not renewed at 21:43</div>
            <div>John Doe created the company at 12:48</div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
