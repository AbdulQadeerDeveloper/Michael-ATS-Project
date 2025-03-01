// store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../dashboard/auth/redux/reducers/authReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import type { PersistPartial } from "redux-persist/es/persistReducer";
import type { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';

const persistConfig = {
  key: "auth",
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
});

type RootState = ReturnType<typeof rootReducer>;
type PersistedReducer = RootState & PersistPartial;

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;