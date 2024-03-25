import { createSlice } from "@reduxjs/toolkit";
import JobOpportunity from "./types";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const akilApiKey = "https://akil-backend.onrender.com/opportunities/search";

const initialState = {
  jobs: [],
  loading: false,
  error: false,
};

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  try {
    const response = await axios.get(akilApiKey);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.jobs = action.payload.data.slice(2) // Assuming the data is directly under 'data' key
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default jobSlice.reducer;
