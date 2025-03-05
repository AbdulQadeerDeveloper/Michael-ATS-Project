import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ExternalLink, FileText } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Contact from "./contact";
import Contract from "./contract";
import Summary from "./summary";

export default function CardsRow() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] pt-0 w-full max-w-[1920px] m-auto p-[20px] z-index-[-1000]">
            {/* Contact Card */}

            <Contact />

            {/* Contract Card */}
            <Contract />

            {/* Summary Card */}
            <Summary />
        </div>
    );
}
