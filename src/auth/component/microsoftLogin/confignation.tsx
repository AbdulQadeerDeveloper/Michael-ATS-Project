
// confignation.tsx
import React from "react";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal } from "@azure/msal-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginWithMicrosoft } from "../../redux/actions/actionApis";
import { Button } from "@/components/ui/button";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const msalConfig = {
  auth: {
    clientId: import.meta.env.VITE_MICROSOFT_CLIENT_ID,
    authority: import.meta.env.VITE_MICROSOFT_AUTHORITY,
    redirectUri: import.meta.env.VITE_MICROSOFT_REDIRECT_URI,
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

const MicrosoftLoginButton: React.FC = () => {
  const { instance } = useMsal();
  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
  const navigate = useNavigate();

  const handleMicrosoftLogin = async () => {
    try {
      const loginResponse = await instance.loginPopup({
        scopes: ["User.Read"],
      });

      if (loginResponse.accessToken) {
        const user = {
          name: loginResponse.account?.name || "",
          email: loginResponse.account?.username || "",
        };
        const accessToken = loginResponse.accessToken;

        console.log("✅ Login Successful:", user);
        dispatch(loginWithMicrosoft(accessToken, user));
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("❌ Login Failed:", error);
    }
  };

  return (
    <Button
      className="flex items-center justify-center gap-3 px-6 py-4 bg-[#2B3759] font-semibold text-sm text-white w-60 h-12"
      onClick={handleMicrosoftLogin}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
        alt="Microsoft Logo"
        className="w-5 h-5"
      />
      Sign in with Microsoft
    </Button>
  );
};

const MicrosoftLogin: React.FC = () => {
  return (
    <MsalProvider instance={msalInstance}>
      <MicrosoftLoginButton />
    </MsalProvider>
  );
};

export default MicrosoftLogin;