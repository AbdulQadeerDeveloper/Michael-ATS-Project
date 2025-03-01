import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Mail, Phone } from "lucide-react";
// import Image from "next/image";

const contacts = [
  {
    title: "Primary Contact",
    name: "Steven Lambert",
    role: "HR Manager",
    email: "slambert@mail.com",
    phone: "0123 456 789",
    img: "/avatar1.png",
  },
  {
    title: "Sign Authorizer",
    name: "Steven Lambert",
    role: "HR Manager",
    email: "slambert@mail.com",
    phone: "0123 456 789",
    img: "/avatar1.png",
  },
  {
    title: "Other Contact",
    contacts: [
      {
        name: "Patrick Johansen",
        role: "HR Staff",
        email: "pjohn123@mail.com",
        phone: "0987 654 321",
        img: "/avatar2.png",
      },
      {
        name: "Patrick Johansen",
        role: "HR Staff",
        email: "pjohn123@mail.com",
        phone: "0987 654 321",
        img: "/avatar2.png",
      },
      {
        name: "Patrick Johansen",
        role: "HR Staff",
        email: "pjohn123@mail.com",
        phone: "0987 654 321",
        img: "/avatar2.png",
      },
    ],
  },
];

export default function ContactInfo() {
  return (
    <Card className="w-[444px] h-[577px] rounded-xl border overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-lg">Contact</CardTitle>
      </CardHeader>
      <CardContent>
        {contacts.map((section, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-muted-foreground mb-2">{section.title}</h3>
            {section.contacts ? (
              section.contacts.map((contact, i) => (
                <ContactItem key={i} {...contact} />
              ))
            ) : (
              <ContactItem {...section} />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function ContactItem({ name, role, email, phone, img }: any) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-start gap-3">
        {/* <Image src={img} alt={name} width={40} height={40} className="rounded-full" /> */}
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
          <div className="flex gap-2 text-sm text-muted-foreground">
            <Mail className="w-4 h-4" />
            {email}
            <Phone className="w-4 h-4" />
            {phone}
          </div>
        </div>
      </div>
      <ExternalLink className="w-4 h-4 text-[#D40B52] cursor-pointer" />
    </div>
  );
}
