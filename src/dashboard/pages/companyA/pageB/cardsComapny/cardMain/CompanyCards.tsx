import InterimFreelanceCard from "../interimFreelanceCard";
import InvoicingCard from "../invoicingCard";
import RecruitmentCard from "../recruitmentCard";
import StaffingCard from "../staffingCard";

export default function CompanyCards() {
  

  return (
    <div className="space-y-6">
      <InvoicingCard/>
      <RecruitmentCard/>
      <StaffingCard/>
      <InterimFreelanceCard/> 
    
    </div>
  );
}
