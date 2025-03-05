import CompanyCards from "../cardsComapny/cardMain/CompanyCards";
import CompanyTable from "../cardsComapny/dataInvoice";

const Container = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto md:h-screen gap-4">
      {/* Left Div - 37% */}
      <div className="md:w-[40%] w-full ml-2 mr-0 mt-0">
        <CompanyCards />
      </div>

      {/* Right Div - 69% */}
      <div className="md:w-[60%] w-full mr-4">
        <CompanyTable />
      </div>
    </div>
  );
};

export default Container;
