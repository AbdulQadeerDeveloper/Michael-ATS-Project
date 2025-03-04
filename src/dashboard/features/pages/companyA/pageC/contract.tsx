import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ExternalLink, FileText } from 'lucide-react'
import React from 'react'

const Contract = () => {
    return (
        <Card className="w-full rounded-xl bg-white border border-gray-300 shadow-md">
            <CardHeader>
                <CardTitle>Contract Cooperation Agreement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-5">
                <div>
                    <p className="text-sm font-medium">Contract</p>
                    <Select>
                        <SelectTrigger className="w-full bg-white border">
                            <SelectValue placeholder="XYZ Agreement" />
                        </SelectTrigger>
                        <SelectContent className='bg-[#fff]'>
                            <SelectItem value="xyz">XYZ Agreement</SelectItem>
                            <SelectItem value="abc">ABC Agreement</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex justify-between items-center py-3 border-t">
                    <div className="flex items-center gap-2">
                        <FileText className="text-[#D40B52]" size={20} />
                        <span className="text-sm">XYZ Agreement</span>
                    </div>
                    <ExternalLink 
                        className="text-[#D40B52] cursor-pointer hover:opacity-75 transition"
                        size={18}
                        aria-label="Open Agreement"
                    />
                </div>
            </CardContent>
        </Card>
    )
}

export default Contract
