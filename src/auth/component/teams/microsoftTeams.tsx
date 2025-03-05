import Logo from "../../../assets/logo.png"
import logoTop from "../../../assets/Hofstead-logo-zwart-1 1.png"
import MicrosoftTeams from "./microsoftTeamsConfig";
// Redirect to Microsoft Teams after successful login

export default function MicrosoftTeam() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row font-poppins font-semibold">
      {/* Left Side */}
      <div className="flex-1 bg-[#2B3759] text-white flex flex-col justify-between p-8">
        <img src={logoTop} width="230px" height="32px" />
        <p className="sizeFont">
          “A lot of people are afraid to say what they want. That’s why they don’t get what they want.”
          <br />
          <span className="font-bold">Madonna</span>
        </p>
      </div>

      {/* Right Side */}
      <div className="flex-1 bg-white flex items-center justify-center flex-col text-center p-10">
        <img src={Logo} width="50px" />
        <h3 className="text-[#2B3759] text-2xl font-Poppins font-semibold mb-6 pt-5">
          WERKBRON ATS
        </h3>
        <MicrosoftTeams />
      </div>
    </div>
  );
}
