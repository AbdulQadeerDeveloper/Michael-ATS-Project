// actionApis.tsx
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from "./actionTypes";
import { Dispatch } from "redux";
import { API_END_POINTS } from "../../../services/index"

interface User {
  name: string;
  email: string;
}

export const loginWithMicrosoft = (accessToken: string, user: User) => {
  return async (dispatch: Dispatch) => {
    try {
      const backendResponse = await fetch(API_END_POINTS.USER_LOGIN_WITH_MICROSOFT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_token: accessToken,
          user: {
            name: user.name,
            email: user.email,
          },
        }),
      });

      if (!backendResponse.ok) {
        throw new Error(`Backend API error: ${backendResponse.status}`);
      }

      const backendData = await backendResponse.json();

      // Store tokens in localStorage
      localStorage.setItem("authToken", backendData.access_token);
      localStorage.setItem("refreshToken", backendData.refresh_token);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          user: {
            name: user.name || "Unknown User",
            email: user.email,
          },
          accessToken: backendData.access_token,
          refreshToken: backendData.refresh_token,
        },
      });

    } catch (error: any) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.message,
      });
      console.error("Login failed:", error);
    }
  };
};

export const logoutMicrosoft = () => {
  return (dispatch: Dispatch) => {
    // Clear all authentication-related storage
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");

    // Dispatch logout success action
    dispatch({ type: LOGOUT_SUCCESS });

    // Optional: Clear any Microsoft-related session storage
    const msalKeys = Object.keys(sessionStorage)
      .filter(key => key.startsWith("msal."));
    msalKeys.forEach(key => sessionStorage.removeItem(key));
  };
};