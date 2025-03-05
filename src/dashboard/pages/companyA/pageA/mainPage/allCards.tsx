import CompanyInfo from "../companyInfo";
import Location from "../location";
import ContactInfo from "../contactInfo";
import RecentActivity from "../recentAct";

export default function CompanyCards() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 p-4">
            {/* First Card */}
            <div className="col-span-1 xl:col-span-1">
               <CompanyInfo/>
                <Location/>
            </div>

            {/* Second Card */}
           <ContactInfo/>

            {/* Third Card */}
            <RecentActivity/>
        </div>
    );
}
