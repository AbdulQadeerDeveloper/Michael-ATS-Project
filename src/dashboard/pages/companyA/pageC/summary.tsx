import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

function Summary() {
    return (
        <Card className="w-full bg-[#fff] rounded-xl border border-gray-300 shadow-md">
            <CardHeader>
                <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-[20px]">
                <p className="text-sm text-gray-700">
                    The XYZ Agreement is an agreement that deals with contractual cooperation between the company and employees.
                </p>
                <div className="flex justify-end">
                    <Button className="bg-[#D40B52] text-white hover:bg-red-700">
                        Send Contract
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default Summary