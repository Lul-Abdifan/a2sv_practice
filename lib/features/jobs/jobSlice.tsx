import { createSlice } from "@reduxjs/toolkit";
import JobOpportunity from "./types";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const akilApiKey = "https://akil-backend.onrender.com/opportunities";

const initialState = {
  jobs: [],
  loading: false,
  error: false,
  selectedJob: null,
};

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  try {
    const response = await axios.get(`${akilApiKey}/search`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const fetchJobById = createAsyncThunk(
  "jobs/fetchJobsById",
  async (id) => {
    try {
      const response = await axios.get(`${akilApiKey}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

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
        state.jobs = action.payload.data.slice(2); // Assuming the data is directly under 'data' key
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(fetchJobById.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchJobById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.selectedJob = action.payload.data;
      })
      .addCase(fetchJobById.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default jobSlice.reducer;
