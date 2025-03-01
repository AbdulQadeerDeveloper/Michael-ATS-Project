import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MenuBar() {
  return (
    <Tabs defaultValue="mailing">
      <TabsList className="bg-[#F4F7FE] p-1 rounded-lg">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="pricing">Pricing Agreement</TabsTrigger>
        <TabsTrigger value="contracts">Contracts</TabsTrigger>
        <TabsTrigger value="mailing" className="bg-white rounded-md">
          Mailing
        </TabsTrigger>
        <TabsTrigger value="files">Files</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
