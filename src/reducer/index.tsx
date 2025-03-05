// reducer/index.tsx
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../auth/redux/reducers/authReducer';

// Combine all reducers
const reducers = combineReducers({
  auth: authReducer, 
});

export type RootState = ReturnType<typeof reducers>;
export default reducers;