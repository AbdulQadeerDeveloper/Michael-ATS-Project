import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

const toolbarOptions = [
    [{ 'font': [] }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['blockquote', 'code-block'],
    ['link', 'image'],
    [{ 'align': [] }],
    ['clean']
];

export default function MailEditor() {
    const [editorHtml, setEditorHtml] = useState("");

    const handleChange = (html: string) => {
        setEditorHtml(html);
    };

    return (
        <Card className="max-w-3xl rounded-2xl shadow-md w-[877px] bg-[#fff]  w-full max-w-[1200px] mx-aut">
            <CardHeader>
                <CardTitle>Mail</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4 p-4">
                    <div>
                        <label className="text-sm font-medium">Subject</label>
                        <Input placeholder="Enter mailing subject..." className="mt-1" />
                    </div>
                    <div>
                        <label className="text-sm font-medium">CC Recipient</label>
                        <div className="flex gap-2 mt-1">
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Add from contact" />
                                </SelectTrigger>
                                <SelectContent className="bg-[white]">
                                    <SelectItem value="john">John Doe</SelectItem>
                                    <SelectItem value="jane">Jane Doe</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button variant="ghost" size="icon">
                                <PlusCircle className="w-5 h-5 text-pink-500" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Text Editor */}
                <div className="mt-4 p-4">
                    <ReactQuill
                        theme="snow"
                        value={editorHtml}
                        onChange={handleChange}
                        modules={{ toolbar: toolbarOptions }}
                        className="h-[535px] bg-white"
                        placeholder="Write your mail here..."
                    />
                </div>
            </CardContent>

            <CardFooter className="justify-end mt-10 mb-4 mr-4">
                <Button className="bg-[#D40B52] hover:bg-pink-600 text-white">
                    Send Mail
                </Button>
            </CardFooter>
        </Card>
    );
}
