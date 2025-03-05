import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ExternalLink, Mail, Phone } from 'lucide-react';

function Contact() {
    return (
        <Card className="w-full rounded-xl bg-white border border-gray-300 shadow-md">
            <CardHeader>
                <CardTitle>Receiver</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-5">
                <div>
                    <p className="text-sm font-medium">Contact</p>
                    <Select>
                        <SelectTrigger className="w-full bg-white border">
                            <SelectValue placeholder="Steven Lambert" />
                        </SelectTrigger>
                        <SelectContent className='bg-[#fff]'>
                            <SelectItem value="steven">Steven Lambert</SelectItem>
                            <SelectItem value="john">John Doe</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-medium">Steven Lambert</p>
                            <p className="text-sm text-gray-500">HR Manager</p>
                        </div>
                        <ExternalLink className="text-[#D40B52] cursor-pointer" size={18} />
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                            <Mail size={16} />
                            <span>slambert@mail.com</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Phone size={16} />
                            <span>0123 456 789</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Contact;

