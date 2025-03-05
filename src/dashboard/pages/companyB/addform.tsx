import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useState } from "react";

const steps = [
  { id: 1, title: "General" },
  { id: 2, title: "Financial" },
  { id: 3, title: "Files" },
];

export default function CompanyProfileForm() {
  const [logo, setLogo] = useState(null);

 
  return (
    <div className="container mx-auto p-6 flex gap-10 bg-[#fff]">
      <div className="w-1/4">
        <div className="flex flex-col gap-10 border p-6 rounded-lg">
          {steps.map((step) => (
            <div key={step.id} className="flex items-center gap-4">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full border ${step.id === 1 ? "bg-pink-500 text-white" : "bg-white text-gray-500 border-gray-300"}`}
              >
                {step.id}
              </div>
              <span className="text-lg font-semibold text-gray-700">{step.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-3/4">
        <Card className="shadow-lg p-6">
          <h2 className="text-xl font-bold mb-6">Company Information</h2>
          <div className="mb-6">
            <Label>Logo</Label>
            <div className="flex items-center gap-4">
              {logo ? (
                <img src={logo} alt="Company Logo" className="w-20 h-20 object-cover rounded-full border" />
              ) : (
                <div className="w-20 h-20 flex items-center justify-center border rounded-full bg-gray-100 text-gray-500">Logo</div>
              )}
              <input type="file" className="hidden" id="logo-upload" />
              Upload Image
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Company Name</Label>
              <Input placeholder="Enter company name..." />
            </div>
            <div>
              <Label>Parent Company</Label>
              <Input placeholder="Select or search parent company..." />
            </div>
            <div>
              <Label>Customer Status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select customer status" />
                </SelectTrigger>
              </Select>
            </div>
            <div>
              <Label>Sector</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select sector" />
                </SelectTrigger>
              </Select>
            </div>
            <div>
              <Label>Sub Sector</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select sub sector" />
                </SelectTrigger>
              </Select>
            </div>
            <div>
              <Label>Phone Number</Label>
              <Input placeholder="Enter company phone number..." />
            </div>
            <div>
              <Label>Email</Label>
              <Input placeholder="Enter company mail..." />
            </div>
            <div>
              <Label>Website</Label>
              <Input placeholder="Enter company website..." />
            </div>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-6">Location</h2>
          <div>
            <Label>Postcode House Number</Label>
            <Input placeholder="Enter postal code and house number..." />
          </div>
          <Button variant="link" className="text-pink-500 mt-4">
            <Plus className="w-4 h-4 mr-2" /> Add other Location
          </Button>

          <h2 className="text-xl font-bold mt-10 mb-6">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>First Name</Label>
              <Input placeholder="Enter contact person first name..." />
            </div>
            <div>
              <Label>Last Name</Label>
              <Input placeholder="Enter contact person last name..." />
            </div>
            <div>
              <Label>Job Title</Label>
              <Input placeholder="Enter contact person job title..." />
            </div>
            <div>
              <Label>Email</Label>
              <Input placeholder="Enter contact person mail..." />
            </div>
            <div>
              <Label>Phone Number</Label>
              <Input placeholder="Enter contact person phone number..." />
            </div>
            <div>
              <Label>Location</Label>
              <Input placeholder="Enter contact person location..." />
            </div>
            <div>
              <Label>Gender</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select contact person gender" />
                </SelectTrigger>
              </Select>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <Checkbox /> <Label>Set as Primary Contact</Label>
            <Checkbox /> <Label>Set as Sign Authorizer</Label>
          </div>
          <Button variant="link" className="text-pink-500 mt-4">
            <Plus className="w-4 h-4 mr-2" /> Add other Contact
          </Button>

          <div className="text-right mt-10">
            <Button className="bg-pink-500 text-white">Next</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}