import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./features/jobs/jobSlice";

export const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});

// Infer the type of makeStore
export type RootStore = ReturnType<typeof store.getState>
// Infer the `RootState` and `AppDispatch` types from the store itself

export type AppDispatch = typeof store.dispatch