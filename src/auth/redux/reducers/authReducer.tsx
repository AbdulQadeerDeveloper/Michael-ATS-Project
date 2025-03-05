// authReducer.ts
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from "../actions/actionTypes";
import { AnyAction } from '@reduxjs/toolkit';

type User = {
  name: string;
  email: string;
};

type AuthState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  error: string | null;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  error: null,
  isAuthenticated: false,
};

const authReducer = (state: AuthState = initialState, action: AnyAction): AuthState => {
  if (action.type === LOGIN_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      accessToken: action.payload.accessToken,
      refreshToken: action.payload.refreshToken,
      isAuthenticated: true,
      error: null,
    };
  }
  
  if (action.type === LOGIN_FAILURE) {
    return {
      ...state,
      error: action.payload,
      isAuthenticated: false,
      user: null,
      accessToken: null,
      refreshToken: null,
    };
  }
  
  if (action.type === LOGOUT_SUCCESS) {
    return initialState;
  }
  
  return state;
};

export default authReducer;